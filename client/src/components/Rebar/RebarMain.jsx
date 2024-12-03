import React from 'react';
import './rebarMain.scss';
import RebFab from '../../assets/extra.jpg';
import Cup from '../../assets/rebar-coupler.png';
import EngMesh from '../../assets/mesh.jpg';
import PreCages from '../../assets/rebar-cage.jpg';

const RebarMain = () => {

  return (
    <main className='rebMain'>
      <div className='rebCon grey'>
        <img src={ RebFab } alt="" />
        <div className='rebTx'>
          <h3>Rebar Fabrication</h3>
          <p>All of our rebar is made from 100% domestic, grade 60, MDOT approved steel. We carry sizes ranging from #3 to #14. All of our rebar has the option to come coated. It can be covered in epoxy or zinc, which prevents rust and corrosion.</p>
        </div>
      </div>
      <div className='rebCon'>
        <div className='rebTx'>
          <h3>Engineering Mesh</h3>
          <p>All of our mesh comes uncoated in 8' x 20' sheets. We offer seven different sizes.</p>
          <ul>
            <li>6″x6″-10/10 (SW1.4) at 33.6 lbs per sheet</li>
            <li>6″x6″-8/8 (SW2.1) at 48.0 lbs per sheet</li>
            <li>6″x6″-6/6 (SW2.9) at 67.2 lbs per sheet</li>
            <li>6″x6″-4/4 (SW6644) at 92.8 lbs per sheet</li>
            <li>4″x4″-6/6 (SW4466) at 99.2 lbs per sheet</li>
            <li>4″x4″-4/4 (SW4444) at 137.6 lbs per sheet</li>
            <li>6″x12″-0/1 (SW0/1) at 126.4 lbs per sheet</li>
          </ul>
        </div>
        <img src={ EngMesh } alt="" />
      </div>
      <div className='rebCon grey'>
        <img src={ Cup } alt="" />
        <div className='rebTx'>
          <h3>Couplers</h3>
          <p>We offer couplers to make connecting rods together easier. Couplers help thread the ends of robs together and are a simple option for joining structures on site.</p>
        </div>
      </div>
      <div className='rebCon'>
        <div className='rebTx'>
          <h3>Pre-tied Rebar Cages</h3>
          <p>We offer pre-tied cages to fit the needs of your job's specifications. Our cages are tied in-house and shipped to your location.</p>
        </div>
        <img src={ PreCages } alt="" />
      </div>
    </main>
  );
};

export default RebarMain;
