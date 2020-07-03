import React from 'react';
import '../styles.css';
import iconSearch from '../../assets/icon-search.png';
import sLogo from '../../assets/s.png';

function Bar({userImage}) {
  return (
    <div className='Bar'>
      <div className='Logo-Soundcrawlers'>
        <div className='Oval'>
          <img className='s' src={sLogo} alt={"Soundcrawlres Logo"} />
        </div>
      </div>
      <img className='icon-search' src={iconSearch} alt={"search icon"} />
      <img className='Sticker-32User-image' src={userImage} alt={"user"} />
    </div>
  );
}

export default Bar;
