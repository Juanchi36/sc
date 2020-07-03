import React from 'react';
import '../styles.css';

function TrackTitle({ trackTitle }) {
  return (
    <h1 className='Track-title'>{trackTitle.toUpperCase()}</h1>
  );
}

export default TrackTitle;
