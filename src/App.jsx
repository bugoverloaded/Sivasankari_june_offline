import React from "react";
import  './App.css';
import logo from '/logo.png';
import impo from '/impo.png';
import cons from '/doct.jpg';
import cons1 from '/doctor.webp';
import istock from '/istockphoto.jpg';
import meditation from '/meditation grp.jpg';
import meditations from '/meditations.jpg';
import consultancy from '/consultancy.avif';
import pin from '/pin.png';
import x from '/x.png';
import f from '/f.png';
import vid from '/vid.mp4';

import Sign from './pages/sign.jsx';
import { Link, Route, Routes } from "react-router-dom";

export default function App()
{
  return(
    
    <Routes>
      <Route path="/sign" element={<Sign />} />
<Route path="*" element={
  <>
         <ul id="n">
<li><img src={logo} width={100} height={70} /></li>
<li><h1>Medicare</h1></li>
<select id="dropdown">
  <option value="" >Services
  </option>
  <option value="option1">meditation</option>
  <option value="option2">Yoga</option>
</select>
<select id="dropdown">
  <option value="" >Resources
  </option>
  <option value="option1">Online appointments</option>
  <option value="option2">Offline appointments</option>
</select>
<li id="s"><input type="search" placeholder="search"/></li>
<li id="s"><Link to="/sign">Sign In</Link></li>

</ul>

<div><img src={impo} width={1500} height={700} /><br/></div>
<center><h1><p>"Your mental health is our priority. We're here to help you heal."</p></h1></center>
<div> <video controls width={1500} height={700} id="v">
  <source src={vid} type="video/mp4" />
</video>
<br/>
</div>
          <h1 className="h">Consultancy</h1>

    <div id="g"> 
      <div id="i"><img src={cons} width={200} height={250}/><br/><h2>Consult with Experts</h2><p>Speak to experienced counselors who truly listen, understand, and support your journey.</p></div>
    <div id="i"><img src={cons1} width={200} height={250}/><br/><h2>Your Wellness Partner</h2><p>From stress to self-care, we're your trusted partner for a healthier, happier mind.</p></div>
    <div id="i"><img src={consultancy} width={200} height={250}/><br/><h2>Talk to a Counselor</h2><p>Feeling stressed or overwhelmed? Talk to a caring counselor today – judgment-free and confidential.</p></div>
    </div >
   <h1 className="h">Meditations</h1>

    <div id="g"> 
      <div id="i"><img src={meditation} width={200} height={250}/><br/><h2>Guited group meditation</h2><p>Meditating with others creates a sense of connection, motivation, and shared energy that enhances the experience</p></div>
    <div id="i"><img src={meditations} width={200} height={250}/><br/><h2>Mindfulness Meditation</h2><p>Mindfulness helps you stay in the present moment, lowering overthinking and reducing stress.</p></div>
    <div id="i"> <img src={istock} width={200} height={250}/><br/><h2>Mantra Meditation</h2><p>Repeating a mantra helps train your mind to stay present, reducing distractions and boosting concentration</p></div>
    </div >
    <footer>

  
        <center>
    <ul id="f"><li><img src={f} width={40} height={40}/></li>
    <li><img src={pin} width={30} height={30}/></li>
    <li><img src={x} width={30} height={30}/></li></ul>
    <p>ThemeWagon Inc@2025
</p>
</center>
    </footer>
</>
   } />
    </Routes>
  );
}