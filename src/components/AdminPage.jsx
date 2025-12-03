import React, { useState, useEffect } from 'react';
import { Octokit } from "@octokit/rest";
import { encode, decode } from 'base-64';

// === НАЛАШТУВАННЯ ===
const REPO_OWNER = "vaskoaisher-maker"; // Твій нік
const REPO_NAME = "gaiia-site";       // Твій репозиторій
const FILE_PATH = "src/data/content.json"; // Шлях до файлу

const AdminPage = () => {
  const [token, setToken] = useState("");
  const [content, setContent] = useState(null);
  const [sha, setSha] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Вхід і завантаження
  const handleLogin = async () => {
    if (!token) return alert("Введи GitHub Token!");
    setLoading(true);
    setStatus("Підключення до GitHub...");
    
    try {
      const octokit = new Octokit({ auth: token });
      const response = await octokit.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: FILE_PATH,
      });

      const decoded = decode(response.data.content);
      setContent(JSON.parse(decoded));
      setSha(response.data.sha);
      setIsLoggedIn(true);
      setStatus("Дані завантажено! Можна редагувати.");
    } catch (error) {
      console.error(error);
      setStatus("Помилка! Перевір Токен (чи є галочка 'repo'?)");
    }
    setLoading(false);
  };

  // Зміна тексту
  const handleChange = (section, key, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  // Збереження
  const handleSave = async () => {
    if (!window.confirm("Оновити сайт? Це займе 1-2 хвилини.")) return;
    
    setLoading(true);
    setStatus("Завантаження змін на GitHub...");
    
    try {
      const octokit = new Octokit({ auth: token });
      const contentEncoded = encode(JSON.stringify(content, null, 2));

      await octokit.repos.createOrUpdateFileContents({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: FILE_PATH,
        message: "Update via Admin Panel",
        content: contentEncoded,
        sha: sha,
      });

      setStatus("Успішно! Сайт оновлюється...");
      
      // Оновлюємо SHA
      const newFile = await octokit.repos.getContent({ owner: REPO_OWNER, repo: REPO_NAME, path: FILE_PATH });
      setSha(newFile.data.sha);
      
    } catch (error) {
      console.error(error);
      setStatus("Помилка збереження!");
    }
    setLoading(false);
  };

  // Екран Логіну
  if (!isLoggedIn) {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#111', color: '#fff' }}>
        <h1 style={{marginBottom: '20px'}}>GAIIA ADMIN</h1>
        <p style={{marginBottom: '10px'}}>GitHub Token:</p>
        <input 
          type="password" 
          value={token} 
          onChange={e => setToken(e.target.value)} 
          style={{ padding: '10px', width: '300px', borderRadius: '5px', border: 'none', marginBottom: '20px' }}
        />
        <button onClick={handleLogin} disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}>
          {loading ? "Завантаження..." : "УВІЙТИ"}
        </button>
        <p style={{marginTop: '20px', color: 'orange'}}>{status}</p>
      </div>
    );
  }

  // Екран Редагування
  return (
    <div style={{ padding: '40px', background: '#f4f4f4', minHeight: '100vh', color: '#000', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', position: 'sticky', top: 0, background: '#f4f4f4', padding: '10px 0', borderBottom: '2px solid #ddd' }}>
         <h1>Адмін Панель</h1>
         <button 
           onClick={handleSave} 
           disabled={loading}
           style={{ padding: '15px 30px', background: loading ? '#ccc' : 'green', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}
         >
           {loading ? "Збереження..." : "ЗБЕРЕГТИ НА САЙТ"}
         </button>
      </div>
      <p style={{ fontWeight: 'bold', color: 'blue' }}>{status}</p>

      {/* HERO SECTION */}
      <div style={sectionStyle}>
        <h2>1. Hero Section</h2>
        <label style={labelStyle}>Main Title:</label>
        <input style={inputStyle} value={content.hero.mainText} onChange={e => handleChange('hero', 'mainText', e.target.value)} />
        
        <label style={labelStyle}>Foundation Text:</label>
        <input style={inputStyle} value={content.hero.foundation} onChange={e => handleChange('hero', 'foundation', e.target.value)} />
        
        <label style={labelStyle}>Tagline:</label>
        <input style={inputStyle} value={content.hero.tagline} onChange={e => handleChange('hero', 'tagline', e.target.value)} />
      </div>

      {/* ECOISM SECTION */}
      <div style={sectionStyle}>
        <h2>2. Ecoism Section</h2>
        <label style={labelStyle}>Title:</label>
        <input style={inputStyle} value={content.ecoism.title} onChange={e => handleChange('ecoism', 'title', e.target.value)} />
        
        <label style={labelStyle}>Subtitle:</label>
        <input style={inputStyle} value={content.ecoism.subtitle} onChange={e => handleChange('ecoism', 'subtitle', e.target.value)} />
      </div>

      {/* MISSION SECTION */}
      <div style={sectionStyle}>
        <h2>3. Mission Section</h2>
        <label style={labelStyle}>Subtitle:</label>
        <input style={inputStyle} value={content.mission.subtitle} onChange={e => handleChange('mission', 'subtitle', e.target.value)} />
        
        <label style={labelStyle}>Description:</label>
        <textarea 
          style={{ ...inputStyle, height: '120px' }} 
          value={content.mission.description} 
          onChange={e => handleChange('mission', 'description', e.target.value)} 
        />
      </div>

      {/* AI SECTION */}
      <div style={sectionStyle}>
        <h2>4. AI Section</h2>
        <label style={labelStyle}>Subtitle:</label>
        <input style={inputStyle} value={content.ai.subtitle} onChange={e => handleChange('ai', 'subtitle', e.target.value)} />
        
        <label style={labelStyle}>Description:</label>
        <textarea 
          style={{ ...inputStyle, height: '120px' }} 
          value={content.ai.description} 
          onChange={e => handleChange('ai', 'description', e.target.value)} 
        />
      </div>

      {/* INTELLECTUAL SECTION */}
      <div style={sectionStyle}>
        <h2>5. Intellectual Section</h2>
        <label style={labelStyle}>Subtitle:</label>
        <input style={inputStyle} value={content.intellectual.subtitle} onChange={e => handleChange('intellectual', 'subtitle', e.target.value)} />
        
        <label style={labelStyle}>Description:</label>
        <textarea 
          style={{ ...inputStyle, height: '120px' }} 
          value={content.intellectual.description} 
          onChange={e => handleChange('intellectual', 'description', e.target.value)} 
        />
      </div>

    </div>
  );
};

const sectionStyle = { background: 'white', padding: '25px', borderRadius: '10px', marginBottom: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };
const inputStyle = { width: '100%', padding: '10px', margin: '5px 0 20px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', fontFamily: 'inherit' };
const labelStyle = { fontWeight: 'bold', display: 'block', marginBottom: '5px', color: '#333' };

export default AdminPage;