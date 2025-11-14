import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WhoWeAre.css';
import hares from '../assets/images/hares-youssef.png';
import nasheed from '../assets/images/mohamed-nasheed.png';

// ІМПОРТИ ЛОГОТИПІВ
import logo1 from '../assets/images/1.webp';
import logo2 from '../assets/images/2.webp';
import logo3 from '../assets/images/3.webp';
import logo4 from '../assets/images/5.webp';
import logo5 from '../assets/images/4.webp';

// ТЕКСТИ
const longContent = {
  1: {
    type: 'text',
    content: `In his youth, fate led him to a military institute in the Soviet Union in Kyiv, after which Ukraine became his second home. There, having turned away from an army career, Hares entered the business world, which eventually expanded into various sectors of the economy: real estate, metallurgy, industrial engineering, and energy. Most of his assets were consolidated into a single holding company - Hares Group, with a turnover of $420 million in 2004.\nAlways showing interest in the sciences, Hares defended his doctoral dissertation at the Institute of World Economy and International Relations of the National Academy of Sciences of Ukraine. Later, this knowledge and his relationship with nature would become the basis for the new economic system he created.\nFrom 2005 to 2010, Hares served as an envoy to President Yushchenko on foreign investments and Middle Eastern affairs. His achievements in business and politics made Youssef one of the most influential Ukrainians of his time (according to the Ukrainian weekly magazine "Focus" list of the 200 most influential Ukrainians).\nHares has been actively involved in philanthropy and funding cultural and social projects in Ukraine and worldwide. He has supported educational initiatives under the UNESCO Education for Children in Need Foundation, including establishing the Hares Youssef Boys School and Hares Youssef Girls School in Pakistan. He has also funded the "Ukraine-3000" foundation of Katerina Yushchenko. From 2011 to 2013, Youssef published the literary journal "Drugoi", with the world-renowned Arab poet and essayist Adonis as its editor-in-chief.\nAt 45, Hares re-evaluated his life priorities, leaving most of his business assets in Ukraine and moving to Europe. There, he dedicated himself to poetry, philosophical and economic research and established the charitable foundation "GAIIA". In 2020, he published the eponymous book "GAIIA," a philosophical, futurological novel translated into four languages.`
  },
  2: {
    type: 'video',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    textTop: `Often dubbed the ‘Mandela of the Maldives,’ Mohamed Nasheed was the Maldives’ first democratically elected president. He is the current Secretary General of the Climate Vulnerable Forum, an international partnership of countries most threatened by a warming planet, composed of 68 member states from Africa, Asia, the Caribbean, Latin America and the Pacific, representing some 1.4 billion people.  In addition to championing action and international cooperation against climate change, Nasheed remains a global leader for the promotion of human rights and democracy in Islamic countries dubbed the 'Mandela of the Maldives,' Mohamed Nasheed was the Maldives' first democratically elected president. He is the current Secretary General of the Climate Vulnerable Forum...`,
    textBottom: `A former political prisoner, Nasheed led a campaign of non-violent, civil disobedience in the Maldives that pressured Maumoon Gayoom, then Asia’s longest-serving ruler, to roll back authoritarian controls and allow political pluralism. In historic democratic polls in 2008, Nasheed was elected president, sweeping away 30 years of one-man rule. Before serving as President, Nasheed was named an Amnesty International ‘Prisoner of Conscience,’ and is widely credited for playing an instrumental part in bringing freedom and democracy to the Maldives.

President Nasheed served as Speaker of the Maldivian People’s Majlis (parliament) from May 2019 to November 2023. In May 2021, Islamic extremists attempted to assassinate President Nasheed in Male’, exploding an IED hidden in a motorcycle as he walked past. After four lifesaving surgeries he survived and returned to his political duties.

​President Nasheed is the recipient of the United Nations ‘Champions of the Earth’ environment award, the Anna Lindh Prize for promoting human rights, democracy and environmental protection, the James Lawson Award for non-violent conflict resolution; the Mission Blue Award bestowed by Dr. Sylvia Earle for distinguished work on climate advocacy, and the ‘2017 Courage Award’ presented by a coalition of 25 international human rights groups at the Geneva Summit for Human Rights and Democracy.

​Time Magazine declared President Nasheed a ‘Hero of the Environment’ in 2009 and in 2010, Newsweek named included him in its list of ‘World’s Ten Best Leaders.’ Nasheed is the subject of the acclaimed documentary film The Island President, which received the Audience Award at the Toronto International Film Festival.

Mohamed Nasheed's remarkable journey intersects with the vision of Gaiia Foundation's founder, Hares Youssef. Their meeting sparked a resonance born of shared values and a deep understanding of the urgent challenges facing our planet. Nasheed's advocacy for climate action, human rights, and democracy aligns seamlessly with the ethos of Gaiia Foundation. As a leader intimately acquainted with the complexities of environmental and social justice, Nasheed's support further validates the Gaiia Foundation's role in fostering sustainable solutions for a better world.

​"The Island President" documents Mohamed Nasheed's fight against rising sea levels threatening the Maldives. As its democratically elected leader, Nasheed employs diplomatic finesse and media prowess to amplify his nation's plight on the global stage. His efforts culminate in a stirring appeal for unity at the 2009 Copenhagen Climate Summit, solidifying his role as a leading voice in the fight against climate change.`
  }
};

const WhoWeAre = () => {
  const [selectedId, setSelectedId] = useState(null);
  
  // Ця змінна більше не потрібна, бо ми перевіряємо ID напряму
  // const selectedContent = selectedId ? longContent[selectedId] : null;

  return (
    <section className="who-section">
      <div className="who-inner">
        
        {/* === БЛОК 1: HARES === */}
        <div className="who-block left">
          <div className="text-side left">
            <h1>HARES<br/>YOUSSEF</h1>
            <p className="role">Founder / Chairman</p>
            <p className="desc">
              Born in a small coastal village in Syria, Hares has built a political career and a multimillion-dollar business while contributing to philanthropy and global environmental projects.
            </p>
            <button onClick={() => setSelectedId(selectedId === 1 ? null : 1)}>
              {selectedId === 1 ? 'CLOSE' : 'READ MORE'}
            </button>
          </div>
          <motion.div 
            className="photo-wrapper" 
            whileHover={{ scale: 1.03 }}
            animate={{ scale: selectedId === 1 ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
             <img src={hares} alt="Hares Youssef" className="photo" />
          </motion.div>
        </div>

        {/* === НОВА СТРУКТУРА: БЛОК, ЩО ВИПАДАЄ, ДЛЯ HARES === */}
        <AnimatePresence>
          {selectedId === 1 && (
            <motion.div
              className="expanded-content-wrapper"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="expanded-text-content">
                {longContent[1].content.split('\n').map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* === БЛОК 2: NASHEED === */}
        <div className="who-block right">
          <motion.div 
            className="photo-wrapper" 
            whileHover={{ scale: 1.03 }}
            animate={{ scale: selectedId === 2 ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img src={nasheed} alt="Mohamed Nasheed" className="photo" />
          </motion.div>
          <div className="text-side right">
            <h1>MOHAMED<br/>NASHEED</h1>
            <p className="role">Co-Founder & President</p>
            <p className="desc">
              His Excellency Mohamed Nasheed, Secretary-General of the Climate Vulnerable Forum and Former President of the Maldives.
            </p>
            <button onClick={() => setSelectedId(selectedId === 2 ? null : 2)}>
              {selectedId === 2 ? 'CLOSE' : 'READ MORE'}
            </button>
          </div>
        </div>

        {/* === НОВА СТРУКТУРА: БЛОК, ЩО ВИПАДАЄ, ДЛЯ NASHEED === */}
        <AnimatePresence>
          {selectedId === 2 && (
            <motion.div
              className="expanded-content-wrapper"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="expanded-video-content">
                <p className="video-text-top">{longContent[2].textTop}</p>
                <div className="video-player-container">
                  <video controls src={longContent[2].videoUrl}></video>
                </div>
                <div className="video-text-bottom">
                   {longContent[2].textBottom.split('\n').map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* === ЛОГОТИПИ ЗАЛИШАЮТЬСЯ В КІНЦІ === */}
      <div className="media-logo-bar">
        <img src={logo1} alt="Partner 1" />
        <img src={logo2} alt="Partner 2" />
        <img src={logo3} alt="Partner 3" />
        <img src={logo4} alt="Partner 4" />
        <img src={logo5} alt="Partner 5" />
      </div>

    </section>
  );
};

export default WhoWeAre;