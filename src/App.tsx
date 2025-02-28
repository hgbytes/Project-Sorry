// import React, { useState, useEffect } from 'react';
// import { Heart, Music, Music as MusicOff, X, Mail } from 'lucide-react';
// import Musicc from './music.mp3';
// import Img1 from './pic1.jpg';
// import Img2 from './pic2.jpg';
// import Img3 from './pic3.jpg';

// function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showLetter, setShowLetter] = useState(false);
//   const [showContent, setShowContent] = useState(false);
//   const [initialLetterOpened, setInitialLetterOpened] = useState(false);
//   const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

//   useEffect(() => {
//     if (!initialLetterOpened) {
//       const timer = setTimeout(() => {
//         setShowContent(true);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [initialLetterOpened]);

//   const toggleMusic = () => {
//     const audio = document.getElementById('bgMusic') as HTMLAudioElement;
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const addHeart = (e: React.MouseEvent) => {
//     const newHeart = {
//       id: Date.now(),
//       x: e.clientX,
//       y: e.clientY,
//     };
//     setHearts([...hearts, newHeart]);
//     setTimeout(() => {
//       setHearts(hearts => hearts.filter(h => h.id !== newHeart.id));
//     }, 1000);
//   };

//   if (!initialLetterOpened) {
//     return (
//       <div className="min-h-screen bg-pink-50 flex items-center justify-center">
//         <div
//           className="animate-bounce-slow cursor-pointer"
//           onClick={() => {
//             setInitialLetterOpened(true);
//             setShowLetter(true);
//           }}
//         >
//           <div className="relative">
//             <Mail className="w-24 h-24 text-pink-600" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
//             </div>
//           </div>
//           <p className="text-center mt-4 font-comic text-gray-700">Click to open</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="min-h-screen bg-pink-50 p-8 cursor-pointer relative overflow-hidden"
//       onClick={addHeart}
//     >
//       {/* Floating Hearts Animation */}
//       {hearts.map(heart => (
//         <div
//           key={heart.id}
//           className="absolute animate-float pointer-events-none"
//           style={{
//             left: heart.x - 10,
//             top: heart.y - 10,
//           }}
//         >
//           <Heart className="text-red-500 w-5 h-5" fill="currentColor" />
//         </div>
//       ))}

//       {/* Music Player */}
//       <audio id="bgMusic" loop>
//         <source src={Musicc} type="audio/mpeg" />
//       </audio>
//       <div className="fixed top-4 right-4 flex flex-col items-end gap-2">
//         <p className="text-sm font-comic text-gray-600 bg-white px-4 py-2 rounded-full shadow-md animate-pulse">
//           Click the music icon to play! 🎵
//         </p>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             toggleMusic();
//           }}
//           className="p-3 bg-white rounded-full shadow-lg hover:bg-pink-100 transition-colors"
//         >
//           {isPlaying ? (
//             <MusicOff className="w-6 h-6 text-pink-600" />
//           ) : (
//             <Music className="w-6 h-6 text-pink-600" />
//           )}
//         </button>
//       </div>

//       {/* Main Content with Animation */}
//       <div className={`max-w-4xl mx-auto space-y-8 ${showContent ? 'animate-fade-in' : 'opacity-0'}`}>
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-pink-600 mb-2 font-comic">
//             Hey Srushti! 🐻
//           </h1>
//           <p className="text-gray-600 font-comic">Click anywhere to spread some love! ❤️</p>
//         </div>

//         {/* Love Letter Section */}
//         <div className="comic-panel bg-white p-6 text-center transform hover:scale-105 transition-transform cursor-pointer"
//           onClick={(e) => {
//             e.stopPropagation();
//             setShowLetter(true);
//           }}>
//           <Mail className="w-12 h-12 text-pink-600 mx-auto mb-2" />
//           <h2 className="text-xl font-bold text-pink-600 font-comic">Read My Apology Letter💌</h2>
//           <p className="text-gray-600 font-comic mt-2">Click to open the special message I wrote for you</p>
//         </div>

//         {/* Comic Strip Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="comic-panel bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
//             <div className="comic-speech-bubble mb-4">
//               <p className="font-comic text-lg text-gray-800">
//                 I am not lazy..I am just conserving energy to think about u..
//               </p>
//             </div>
//             <img
//               src={Img1}
//               alt="Cute moment"
//               className="rounded-lg mb-4 w-full h-64 object-cover"
//             />
//             <p className="text-gray-700 font-comic text-center">
//               Soo please don't be angry...
//             </p>
//           </div>

//           <div className="comic-panel bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
//             <div className="comic-speech-bubble mb-4">
//               <p className="font-comic text-lg text-gray-800">
//                 My ride or die,My go to girl...Ur smile is soo contagious I think I just caught cavity
//               </p>
//             </div>
//             <img
//               src={Img2}
//               alt="Love hearts"
//               className="rounded-lg mb-4 w-full h-64 object-cover"
//             />
//             <p className="text-gray-700 font-comic text-center">
//               😭yar please itna try karaha hu maff karde🙂🤗
//             </p>
//           </div>
//         </div>


//         {/* Poetry Section */}
//         <div className="comic-panel bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300"></div>
//           <div className="comic-speech-bubble">
//             <h2 className="text-2xl font-bold text-pink-600 mb-4 font-comic text-center">
//               A Poem Just for You ✨
//             </h2>
//           </div>
//           <div className="bg-pink-50 p-6 rounded-lg border-2 border-dashed border-pink-300">
//             <p className="text-gray-700 italic leading-relaxed font-comic text-center text-lg">
//               Tum yaad aaye, aur dil tarasta hai, Shru,<br />
//               Kya kahun, kya na kahun, bas tumse juda hai.<br />
//               Har saans mein tumhari yaad basi hai,<br />
//               Har dhadkan mein tumhara pyaar mahsus hai.<br />

//               Tumhare bina zindagi suni suni hai,<br />
//               Tumhare saath har pal khushi khushi hai.<br />
//               Tum yaad aaye, aur dil mein dard hai,<br />
//               Kya kahun, kya na kahun, bas tumse baat karne ki ichha hai, Shru.<br />

//               Tumhare Dosti ki koi inteha nahi,<br />
//               Tumhare Pyarr ki koi had nahi.<br />
//               Tum yaad aaye, aur dil tarasta hai, Shru,<br />
//               Kya kahun, kya na kahun, bas tumse juda hai.<br />
//             </p>
//             <div className="mt-4 flex justify-center">
//               <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Love Letter Modal */}
//       {showLetter && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           onClick={(e) => {
//             e.stopPropagation();
//             setShowLetter(false);
//           }}
//         >
//           <div
//             className="bg-[url('https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center p-6 max-w-lg w-full relative transform hover:scale-105 transition-transform animate-modal-appear rounded-lg overflow-y-auto max-h-[90vh]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-xl">
//               <button
//                 onClick={() => setShowLetter(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//               <div className="prose max-w-none">
//                 <div className="flex items-center justify-center mb-4">
//                   <Heart className="w-8 h-8 text-red-500 mr-2" fill="currentColor" />
//                   <h3 className="text-2xl font-bold text-pink-600 font-comic m-0">Heyy Srushti,</h3>
//                 </div>
//                 <div className="space-y-3 font-comic text-gray-700 leading-relaxed">
//                   <p> Dear Madam, I'm really sorry I was not able to text you while I was in the College Campus. I know it felt like I was ignoring you, but that wasn't my intention at all😭. </p>

//                   <p>The truth is, I missed you soooooooooooooo, soooooooooooooo much while I was away.I still miss u.Being without my phone because of the college jammers was really tough, and not being able to talk to you was the hardest part 😭😭even though I knew  that u texted me.</p>

//                   <p>Shruu From now on, I promise to make it up to you. I'll do everything in my power to stay in touch, no matter what.... Whether I'm in a different city, country, or even just busy with work or school, you'll always be my priority.😶‍🌫️ I'll make sure to text  you regularly, so you never feel ignored or forgotten again.💯😭</p>

//                   <p>You mean everything to me, and I'm committed to showing you that 😭😭. Can you please forgive me and give me another chance mam? 🥺 I promise to be more thoughtful and considerate from now on.
//                     SORRYYYYYYY SHRUUUUUUUU</p>

//                   <p className="text-right font-bold mt-4">
//                     Yours,<br />
//                     Dannyiee 🙂🥲
//                   </p>
//                   <div className="text-center mt-3">
//                     <span className="text-xs text-gray-500">P.S. Your angry face is still the cutest thing ever! 🐻</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Music, Music as MusicOff, X, Mail } from 'lucide-react';
import Musicc from './music.mp3';
import Img1 from './pic1.jpg';
import Img2 from './pic2.jpg';
import Img3 from './pic3.jpg';

// StickyNote component for comic-style sticky notes
const StickyNote = ({ text, style, delay = 0 }) => (
  <motion.div
    className="absolute bg-yellow-200 p-2 rounded shadow-lg font-comic text-sm border-2 border-dashed border-yellow-300"
    style={style}
    initial={{ opacity: 0, y: -20, rotate: -5 }}
    animate={{ opacity: 1, y: 0, rotate: 0 }}
    transition={{ delay, type: 'spring', stiffness: 100 }}
  >
    {text}
  </motion.div>
);

// EnvelopeAnimation component using your envelope code
const EnvelopeAnimation = ({ onOpenComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      // After the envelope animation completes, signal that it is done.
      setTimeout(() => {
        onOpenComplete();
      }, 1500);
    }
  };

  const envelopeVariants = {
    closed: {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
    },
    open: {
      rotateX: -180,
      rotateY: [0, 0, -5, 5, 0],
      scale: [1, 1.1, 1.05],
      opacity: 0,
      filter: ['blur(0px)', 'blur(2px)', 'blur(4px)'],
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  const flapVariants = {
    closed: { rotateX: 0, originY: 0 },
    open: {
      rotateX: -180,
      originY: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-blue-50">
      <motion.div
        className="cursor-pointer absolute z-20"
        onClick={handleEnvelopeClick}
        variants={envelopeVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        style={{ willChange: 'transform, opacity, filter' }}
      >
        <div className="relative">
          <motion.div
            className="w-[400px] h-[280px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg shadow-xl flex items-center justify-center transform-gpu relative overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0">
              <div className="absolute left-0 bottom-0 w-0 h-0 border-l-[200px] border-b-[140px] border-l-transparent border-b-blue-200/50" />
              <div className="absolute right-0 bottom-0 w-0 h-0 border-r-[200px] border-b-[140px] border-r-transparent border-b-blue-200/50" />
              <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-blue-200/30" />
            </div>
            <motion.div
              className="absolute top-0 left-0 right-0 w-0 h-0 border-l-[200px] border-r-[200px] border-t-[140px] border-l-transparent border-r-transparent border-t-blue-300"
              style={{ transformOrigin: 'top' }}
              variants={flapVariants}
              animate={isOpen ? 'open' : 'closed'}
            >
              <div className="absolute top-[-140px] left-[-200px] right-[-200px] h-[140px] bg-gradient-to-b from-blue-200/50 to-transparent" />
            </motion.div>
            <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600/80 text-lg font-medium"
            animate={{ opacity: isOpen ? 0 : [0, 1, 0], y: isOpen ? 0 : [0, -5, 0] }}
            transition={{ duration: 2, repeat: isOpen ? 0 : Infinity }}
          >
            Click to open
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [initialLetterOpened, setInitialLetterOpened] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (initialLetterOpened && !showContent) {
      const timer = setTimeout(() => setShowContent(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [initialLetterOpened, showContent]);

  const toggleMusic = () => {
    const audio = document.getElementById('bgMusic');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const addHeart = (e) => {
    const newHeart = { id: Date.now(), x: e.clientX, y: e.clientY };
    setHearts([...hearts, newHeart]);
    setTimeout(() => {
      setHearts((hs) => hs.filter((h) => h.id !== newHeart.id));
    }, 1000);
  };

  if (!initialLetterOpened) {
    return (
      <EnvelopeAnimation
        onOpenComplete={() => {
          setInitialLetterOpened(true);
          setShowLetter(true);
        }}
      />
    );
  }

  // Array of sticky note definitions with varied positions and texts.
  const stickyNotes = [
    { text: "I'm truly sorry!", style: { top: '8%', left: '4%' }, delay: 0.2 },
    { text: "Forgive me, please.", style: { top: '20%', right: '6%' }, delay: 0.4 },
    { text: "I regret my mistakes.", style: { bottom: '18%', left: '5%' }, delay: 0.6 },
    { text: "Let’s start fresh.", style: { bottom: '12%', right: '8%' }, delay: 0.8 },
    { text: "My apology is sincere.", style: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, delay: 1 },
  ];

  return (
    <div
      className="min-h-screen bg-blue-50 p-8 cursor-pointer relative overflow-hidden"
      onClick={addHeart}
    >
      {/* Floating Hearts Animation */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float pointer-events-none"
          style={{ left: heart.x - 10, top: heart.y - 10 }}
        >
          <Heart className="text-blue-500 w-5 h-5" fill="currentColor" />
        </div>
      ))}

      {/* Render Multiple Sticky Comic-Style Notes */}
      {stickyNotes.map((note, index) => (
        <StickyNote key={index} text={note.text} style={note.style} delay={note.delay} />
      ))}

      {/* Music Player */}
      <audio id="bgMusic" loop>
        <source src={Musicc} type="audio/mpeg" />
      </audio>
      <div className="fixed top-4 right-4 flex flex-col items-end gap-2">
        <p className="text-sm font-comic text-gray-600 bg-white px-4 py-2 rounded-full shadow-md animate-pulse">
          Click the music icon to play! 🎵
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMusic();
          }}
          className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-100 transition-colors"
        >
          {isPlaying ? (
            <MusicOff className="w-6 h-6 text-blue-600" />
          ) : (
            <Music className="w-6 h-6 text-blue-600" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className={`max-w-4xl mx-auto space-y-8 ${showContent ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2 font-comic">Hieieieieiie ,</h1>
          <p className="text-gray-600 font-comic">Moon falls over Sunn.    </p>
        </div>

        {/* Apology Letter Section */}
        <div
          className="comic-panel bg-white p-6 text-center transform hover:scale-105 transition-transform cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setShowLetter(true);
          }}
        >
          <Mail className="w-12 h-12 text-blue-600 mx-auto mb-2" />
          <h2 className="text-xl font-bold text-blue-600 font-comic">Read My Apology Letter 💌</h2>
          <p className="text-gray-600 font-comic mt-2">Click to hear my sincere apology</p>
        </div>

        {/* Comic Panels with Apology-Themed Captions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="comic-panel bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <div className="comic-speech-bubble mb-4">
              <p className="font-comic text-lg text-gray-800">
                I know I’ve been distant, and I’m truly sorry...
              </p>
            </div>
            <img
              src={Img1}
              alt="Apology moment"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <p className="text-gray-700 font-comic text-center">I hope you can forgive me.</p>
          </div>
          <div className="comic-panel bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <div className="comic-speech-bubble mb-4">
              <p className="font-comic text-lg text-gray-800">
                I regret my careless mistakes and the pain they caused.
              </p>
            </div>
            <img
              src={Img2}
              alt="Sincere apology"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <p className="text-gray-700 font-comic text-center">I'm truly sorry and promise to do better.</p>
          </div>
        </div>

        {/* Apology Poem Section */}
        <div className="comic-panel bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300"></div>
          <div className="comic-speech-bubble">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 font-comic text-center">
              My Apology in Verse ✨
            </h2>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-dashed border-blue-300">
            <p className="text-gray-700 italic leading-relaxed font-comic text-center text-lg">
              Kannala kadhai pesa neeyum <br />
              Kai koruthu nada poda naanum <br />
              Verenna verenna venumm<br />
              Ne mattum ne mattum podhumm.<br /><br />
              Thaangadha bhaaram naan thaangum bodhum<br />
              Enaithaangum thoonaai nee dhaandii <br />
              Yaar vandha podhum , yaar pona podhum<br />
              Ne mattum ena vittu neengathadiii
            </p>
            <div className="mt-4 flex justify-center">
              <Heart className="w-8 h-8 text-blue-500" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Extra Apology Quote Section */}
        <div className="comic-panel bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <div className="comic-speech-bubble mb-4">
            <p className="font-comic text-lg text-gray-800">
              "This is us btw"
            </p>
          </div>
          <img
            src={Img3}
            alt="Apology doodle"
            className="rounded-lg mb-4 w-full h-64 object-cover"
          />
          <p className="text-gray-700 font-comic text-center">Don't be angyyyyyyy .</p>
        </div>
      </div>

      {/* Apology Letter Modal */}
      {showLetter && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            e.stopPropagation();
            setShowLetter(false);
          }}
        >
          <div
            className="bg-[url('https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center p-6 max-w-lg w-full relative transform hover:scale-105 transition-transform animate-modal-appear rounded-lg overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-xl">
              <button
                onClick={() => setShowLetter(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="prose max-w-none">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-blue-500 mr-2" fill="currentColor" />
                  <h3 className="text-2xl font-bold text-blue-600 font-comic m-0">Dear Madam Jii ,</h3>
                </div>
                <div className="space-y-3 font-comic text-gray-700 leading-relaxed">
                  <p>
                    I want to offer my sincerest apologies for the ways I have let you down. I know my absence and silence have hurt you, and for that, I am deeply sorry.
                  </p>
                  <p>
                    I regret not being there when you needed me most and for the moments lost due to my thoughtlessness. Your feelings matter to me, and I am committed to making things right.
                  </p>
                  <p>
                    Please forgive me for my mistakes. I promise to learn, to grow, and to always cherish our bond. Let this apology be the first step toward healing and rebuilding the trust we once shared.
                  </p>
                  <p className="text-right font-bold mt-4">
                    Yours sincerely,<br />
                    Booooooo.
                  </p>
                  <div className="text-center mt-3">
                    <span className="text-xs text-gray-500">P.S. Your forgiveness means the world to me.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
