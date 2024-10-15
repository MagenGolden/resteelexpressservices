import React from 'react';
import '../header.scss';
import TeamImg from '../../assets/team.jpg';

const TeamHeader = () => {

  return (
    <header>
      <img src={TeamImg} alt="" />
      <div className='accTxt'>
        <div className='title'>
          <h1>Meet The Team &emsp;&emsp;</h1>
        </div>
      </div>
    </header>
  );
};

export default TeamHeader;
