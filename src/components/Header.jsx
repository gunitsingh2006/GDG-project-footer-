
      // Import necessary modules
import React from "react";
import "./style.css"; // Ensure to create corresponding CSS

const Header = () => {
  return (
    <div className="app  min-h-screen
    ">
      {/* Top Section */}
     
        <div className="circle">
          
        </div>
        <div className="heading"><h1>Sign up to receive updates for <br />the latest event announcements</h1></div>


        <div className="email-input-container ">
      <input
        type="email"
        placeholder="Enter your e-mail address"
        className="email-input"
      />
      <button className="email-submit-button ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="#5a67d8"
        >
          <path d="M10 17l5-5-5-5v10z" />
        </svg>
      </button>
    </div>

        
      {/* Footer Section */}
      <footer className="footer">
        <p>Made with <span role="img" aria-label="love">❤️</span> by GDG-GTBIT</p>
        <p>Copyright &copy;2025, All rights reserved.</p>
      </footer>
    

    
    </div>
  );
};


export default Header
