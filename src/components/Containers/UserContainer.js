import React from 'react';
import '../styles.css';

function UserContainer(props) {
  const { userImage } = props;
  const { name, place, timeAgo, genre } = props.data;
  return (
    <div className='UserContainer'>
      <img className='Sticker-32User-image-container' src={userImage} alt={"user"} />
      <div className='dataUser'>
        <p className='name'>{name}</p>
        <p className='place-time'>{place} · {timeAgo}</p>
        <p className='Genre'>{genre}</p>
      </div>
    </div>
  );
}

export default UserContainer;
