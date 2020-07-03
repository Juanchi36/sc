import React from 'react';
import '../styles.css';

import iconLikePressed from '../../assets/icon-like-pressed.png';
import iconClose from '../../assets/close_24px.png'

function LikeList(props) {
  return (
    <div style={{ maxHeight: '54vh', overflowY: 'scroll' }}>
      <div className='title-container'>
        <img className='icon-like-pressed' src={iconLikePressed} alt={"like"} />
        <h1 className='likes-title'>Likes</h1>
        <img src={iconClose} alt={"close"} onClick={props.handleLikeList}/>
      </div>
      {props.data.map(like => {
        return (
          <div className='like-container' key={like.id}>
            <img src={like.avatar} alt={"avatar"} style={{ marginLeft: 17 }} />
            <div>
              <p className='likes-name'>{like.name}</p>
              <p className='likes-place'>{like.place}</p>
            </div>
            {like.isFollow ? (
              <div className='button-container'>
                <p className='follow'>Follow</p>
              </div>
            ) : (
                <div className='button-container-following'>
                  <p className='following'>Following</p>
                </div>
              )}
          </div>
        )
      })}
    </div>
  );
}

export default LikeList;
