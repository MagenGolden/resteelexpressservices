import React from 'react';
import './serMain.scss';
import { useInView } from 'react-intersection-observer';
import Fab from '../../assets/extra.jpg';
import Ship from '../../assets/shipping.jpg';
import Detail from '../../assets/detailing-crop.jpg';
import Estimate from '../../assets/estimating.jpg';
import Bend from '../../assets/BendTypes.pdf';
import useScreenSize from '../useScreenSize';

const SerMain = () => {

const { ref: sec1, inView: sec1InView } = useInView({
  triggerOnce: true,
});
const { ref: sec2, inView: sec2InView } = useInView({
  triggerOnce: true,
});
const size = useScreenSize();
const screenSize = size.width;

  return (
    <main className='ser'>
      <div ref={sec1} className='serCon'>
        <div className={ sec1InView && screenSize > 665 ? 'serBx fade' : 'serBx' }>
          <img src={Fab} alt="Rebar" />
          <div className='serTx'>
            <h3>Rebar Fabrication</h3>
            <p>We will cut, bend, and bundle rebar based on our clients' needs. Below is a list of our most standard bend types. <a className='bold' href="/contact">Contact us</a> if you are interested in a particular bend that is not included in our standard bar bend list.</p>
            <a href={ Bend } target='_blank'><button className='serButt hvr-shrink hvr-sweep-to-right'>Standard Bar Bend List</button></a>
          </div>
        </div>
        <div className={sec1InView && screenSize > 665 ? 'serBx fade' : 'serBx'}>
          <img src={Detail} alt="Building Plans" />
          <div className='serTx'>
            <h3>Detailing</h3>
            <p>Our in-house detailers will design a drawing packet based on the specs provided by the client.</p>
          </div>
        </div>
      </div>
      <div ref={sec2} className='serCon'>
        <div className={sec2InView && screenSize > 665 ? 'serBx fade' : 'serBx'}>
          <img src={Estimate} alt="Building Plans" />
          <div className='serTx'>
            <h3>Estimating</h3>
            <p>Our estimators will provide a list of needed materials and a quote based on our competitive prices if purchased from us. All you need to provide is a drawing packet.</p>
          </div>
        </div>
        <div className={sec2InView && screenSize > 665 ? 'serBx fade' : 'serBx'}>
          <img src={Ship} alt="Commercial Truck" />
          <div className='serTx'>
            <h3>Shipping</h3>
            <p>We provide shipping in Mississippi, Louisiana, Alabama, and parts of Florida.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SerMain;
