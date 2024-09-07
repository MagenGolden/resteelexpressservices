import React from 'react';
import './icons.scss';
import RebarIcon from '../../assets/rebar-icon.png';
import CageIcon from '../../assets/rebar-cage-icon.png';
import MeshIcon from '../../assets/mesh-icon.png';
import CouplerIcon from '../../assets/coupler-icon.png';

const Icons = () => {


  return (
    <section className='icons'>
      <div className='iconBx'>
        <img src={ RebarIcon } alt="" />
        <p>Rebar Fabrication</p>
      </div>
      <div className='iconBx'>
        <img src={ MeshIcon } alt="" />
        <p>Engineering Mesh</p>
      </div>
      <div className='iconBx'>
        <img src={ CouplerIcon } alt="" />
        <p>Couplers</p>
      </div>
      <div className='iconBx'>
        <img src={ CageIcon } alt="" />
        <p>Pre-tied Rebar Cages</p>
      </div>
    </section>
  );
};

export default Icons;
