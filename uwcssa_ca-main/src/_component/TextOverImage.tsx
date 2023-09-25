import React from 'react';
import '../app/home.css'; 

function TextOverImage() {
    return (
      <div className="image-container-left">
        <img src="../../uwcssa_logo.svg" className='transparent-icon' alt="Your Image" />
        <div className="text-overlay">
          <h1>欢迎来到温莎大学中国学生学者联谊会</h1>
          <p>- UWCSSA官网</p>
        </div>
      </div>
    );
  }
  
  export default TextOverImage;
  