import React from "react";
import './sign.css';
import mail from '/mail.png';
import micro from '/micro.png';
import google from '/google.png';

export default function Sign() {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>Welcome to MindCare</h1>

      <input id="email" type="email" placeholder="email@gmail.com" /><br /><br />

      <button className="continue-btn">Continue</button>

      <p>Don't have an account?</p>
      <p id="account">Signup</p>

      <p>OR</p>

      <div>
    
        <button className="continue-btn">  <img src={mail} width={30} height={30} alt="Mail" /><br />Continue with Email</button>
      </div>

      <div>
        
        <button className="continue-btn"> <img src={micro} width={30} height={30} alt="Microsoft" /><br />Continue with Microsoft</button>
      </div>

      <div>
        
        <button className="continue-btn"><img src={google} width={30} height={30} alt="Google" /><br />Continue with Google</button>
      </div>
    </div>
  );
}
