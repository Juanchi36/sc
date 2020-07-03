import React from 'react';
import '../styles.css';

function YoutubeVideo({ videoImage }) {
  return (
    <img
      className='Youtube-Video'
      src={videoImage}
      alt={"published video"}
    />
  );
}

export default YoutubeVideo;
