import React from 'react';
import '../styles.css';

function ButtonsContainer({ buttonsData, handleLikeList }) {
  return (
    <div className='ButtonsContainer'>
      {buttonsData ? (
        buttonsData.map((button, key) => {
          return (
            <div
              className='icon-container'
              key={button.id}
              onClick={button.name === 'like' ? handleLikeList : null}
            >
              <img className='icon' src={button.icon} alt={"icon"} />
              <p className='number'>{button.counter}</p>
            </div>
          )
        })
      ) : null}
    </div>
  );
}

export default ButtonsContainer;
