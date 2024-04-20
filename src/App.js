import './App.css';
import Topbar from "./components/topbar/Topbar";
import Intro from  "./components/intro/Intro";
import Projects from './components/projects/Projects';
import Contact from './components/email/Contact';
import {useState,useEffect} from "react";
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { motion, useScroll, useSpring } from "framer-motion";
import Lottie from 'react-lottie';
import cooking  from './cooking.json'
import Up from './components/up/Up';
import Menu from './components/menu/Menu';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/services/services';
import Team from './components/team/team';
import Blog from './components/blog/blog';


function App() {

  
  const[menuOpen, setMenuOpen]= useState(false)
  const [backOpen,setBackOpen]= useState(false)
  const [loading,setLoading]=useState(false)
  const [load,setLoad]=useState(false)

  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: cooking,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

 // useEffect(() => {
 //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 // }, []);
 useEffect(() => {
  window.onload = () => {
    window.scrollTo(0, 0);
  };
}, []);

  useEffect(()=>{
    
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },0)
  },[])


  return (
  
    <div className={"App " } >
          <div className={"App " + (loading && 'appSize')} >

      <motion.div  className='progressBar'style={{ scaleX }}/>
   {
     loading ?
     <div  className='coffeeCont'>
      <Lottie onload={ window.scrollTo(0,0)} options={defaultOptions} className='cofload'/>

   
      </div>
     :
 
     <div className={'sections '}>
          


          <Router>
            <Topbar  backOpen={backOpen} setBackOpen={setBackOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
           
            <Routes>
            <Route path="/" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/blog" element={<Blog/>} />
            </Routes>
           
            <Footer/>
              {/* <Up/> */}
              </Router>
            {/* <Intro  menuOpen={menuOpen} setMenuOpen={setMenuOpen} backOpen={backOpen} setBackOpen={setBackOpen}/> */}
        
          
        {/* <Email menuOpen={menuOpen} setMenuOpen={setMenuOpen} load={load} setLoad={setLoad}/> */}
        {/* <div className={"x " + (menuOpen && "blurr") }> */}
       
        {/* <Menu/> */}
        {/* <About/> */}
       
        {/* </div> */}
      </div>
        }
    </div>
    </div>
  );
}

export default App;
