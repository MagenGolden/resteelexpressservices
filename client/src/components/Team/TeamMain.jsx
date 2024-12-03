import React from 'react';
import './teamMain.scss';
import Amanda from '../../assets/amanda.jpg';
import Eric from '../../assets/eric.jpg';
import Wells from '../../assets/wells.jpg';
import Kris from '../../assets/kris.jpg';
import Peyton from '../../assets/peyton.jpg';
import Anthony from '../../assets/anthony.jpg';
import Mitch from '../../assets/mitch.jpg';
import Tim from '../../assets/tim.jpg';
import Fiona from '../../assets/fiona.jpg';
import Shop from '../../assets/shop.jpg';

const owners = [
  { img: `${Mitch}`, name: 'Max Benefield', title: 'Owner/Operator', years: '40+ Years of Experience', contact: 'mitch@resteelexpress.com'},
  { img: `${Eric}`, name: 'Charles Eric Dann', title: 'Owner/Operator', years: '40+ Years of Experience', contact: 'eric@resteelexpress.com'},
];

const employees = [
  { img: `${Anthony}`, name: `Anthony Ricouard "Hammer"`, title: 'General Manager', years: '15 Years of Experience in Customer Service & Drafting', certs: 'AutoCAD Certified', school: 'PRCC Alumni', contact: 'anthony@resteelexpress.com' },
  { img: `${Tim}`, name: 'Timmy McGowan', title: 'General Manager of Production', years: '14 Years of Experience in Rebar Fabrication', contact: 'tim@resteelexpress.com' },
  { img: `${Amanda}`, name: 'Amanda Lee', title: 'Office Administrator', years: '24 Years of Experience in Bookkeeping', certs: 'Certified Notary Public', school: 'PRCC Alumni', contact: 'amanda@resteelexpress.com' },
  { img: `${Wells}`, name: 'Eric Wells', title: 'Head of Detailing', years: '5 Years of Experience in Drafting', certs: 'AutoCAD Certified', school: 'PRCC Alumni', contact: 'wells@resteelexpress.com' },
  { img: `${Peyton}`, name: 'Peyton Ferreira', title: 'Draftsman/Detailer', years: '3 Years of Experience in Drafting', certs: 'AutoCAD Certified', school: 'PRCC Alumni', contact: 'peyton@resteelexpress.com' },
  { img: `${Kris}`, name: 'Kristin Lizana', title: 'Draftsman/Detailer', years: '2 Years of Experience in Drafting', certs: 'AutoCAD Certified', school: 'PRCC Alumni', contact: 'kris@resteelexpress.com' },
  { img: `${Fiona}`, name: 'Fiona Lee', title: 'Chief of Security', years: '4+ Years of Experience', certs: 'Certified in Doggy Kung Fu', school: 'Graduated from Paws 4 Safety' }
];

const TeamMain = () => {

  return (
    <main className='meetTeam'>
      <h2>In The Office:</h2>
      <div className='ownSheets'>
        {owners.map((o) =>(
          <div key={o.name}>
            <img className='hvr-shrink' src={o.img} alt="" />
            <h3>{o.name}</h3>
            <ul>
              <li>{o.title}</li>
              <li>{o.years}</li>
              <li>Contact: {o.contact}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className='empSheets'>
        {employees.map((e) =>(
          e.name === 'Timmy McGowan' ?
          <div  key={e.name}>
            <img className='hvr-shrink'  src={e.img} alt="" />
            <h3>{e.name}</h3>
            <ul>
              <li>{e.title}</li>
              <li>{e.years}</li>
              <li>Contact: {e.contact}</li>
            </ul>
          </div> :
          e.name === 'Fiona Lee' ?
          <div key={e.name}>
            <img className='hvr-shrink'  src={e.img} alt="" />
            <h3>{e.name}</h3>
            <ul>
              <li>{e.title}</li>
              <li>{e.years}</li>
              <li>{e.certs}</li>
              <li>{e.school}</li>
            </ul>
          </div> :
          <div key={e.name}>
            <img className='hvr-shrink'  src={e.img} alt="" />
            <h3>{e.name}</h3>
            <ul>
              <li>{e.title}</li>
              <li>{e.years}</li>
              <li>{e.certs}</li>
              <li>{e.school}</li>
              <li>Contact: {e.contact}</li>
            </ul>
          </div>
        ))}
      </div>
      <section className='shop'>
        <h2>In the Shop:</h2>
        <img className='hvr-shrink'  src={Shop} alt="" />
        <p>Our dedicated shop team personally handles all customer orders and ensures that only the best quality products make it into your hands.</p>
      </section>
    </main>
  );
};

export default TeamMain;
