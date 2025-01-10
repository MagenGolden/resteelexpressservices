import React from 'react';
import './contactMain.scss';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const ContactMain = () => {

  return (
    <main className='contact'>
      <h1>Better yet, see us in person!</h1>
      <h2>We are located in the small town of Poplarville, Mississippi.</h2>
      <p>Re-Steel Express Services, Inc.</p>
      <p>9 Saw Road</p>
      <p>601-795-6110</p>
      <p>contact-us@resteelexpress.com</p>
      <section className='location'>
        <div className='hours'>
          <h3>Business Hours</h3>
          <div className='days'>
            <p>Monday</p><p>7:00 AM to 4:30PM</p>
          </div>
          <div className='days'>
            <p>Tuesday</p><p>7:00 AM to 4:30PM</p>
          </div>
          <div className='days'>
            <p>Wednesday</p><p>7:00 AM to 4:30PM</p>
          </div>
          <div className='days'>
            <p>Thursday</p><p>7:00 AM to 4:30PM</p>
          </div>
          <div className='days'>
            <p>Friday</p><p>7:00 AM to 2:30PM</p>
          </div>
          <div className='days'>
            <p>Saturday</p><p>Closed</p>
          </div>
          <div className='days'>
            <p>Sunday</p><p>Closed</p>
          </div>
        </div>
        <div className='map'>
          <APIProvider apiKey={ '***************' } onLoad={() => console.log( 'Maps API has loaded' )}>
            <Map defaultZoom={16} defaultCenter={{lat: 30.838910, lng: -89.516430}}>
              <Marker position={{lat: 30.838910, lng: -89.516430}} />
            </Map>
          </APIProvider>
        </div>
      </section>
    </main>
  );
};

export default ContactMain;
