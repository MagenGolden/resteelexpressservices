import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../Services/serMain.scss';
import ProdRebar from '../../assets/Rebar_001.jpg'
import ProdAcc from '../../assets/rebar-accessory.jpg'
import useScreenSize from '../useScreenSize';


const ProdMain = () => {

const { ref, inView } = useInView({
  triggerOnce: true,
});

  const size = useScreenSize();
  const screenSize = size.width;

  return (
    <main ref={ref} className='ser'>
      <div className={inView && screenSize > 635 ? 'serCon fade' : 'serCon'}>
        <div className='serBx'>
          <img src={ ProdRebar } alt="Rebar" />
          <div className='serTx'>
            <h3>Rebar</h3>
            <p className='boxDet'><em>comes in black or coated</em></p>
            <p>100% domestic. Made to fit your needs.</p>
            <button onClick={ () => location.href = '/rebar' } className='boxBut hvr-shrink hvr-sweep-to-right' >MORE...</button>
          </div>
        </div>
        <div className='serBx'>
          <img src={ ProdAcc } alt="Rebar tied with tie wire." />
          <div className='serTx'>
            <h3>Accessories</h3>
            <p className='boxDet'><em>products to help you finish the job</em></p>
            <p>We only provide products that we trust.</p>
            <button onClick={ () => location.href='/accessories' } className='boxBut hvr-shrink hvr-sweep-to-right'>MORE...</button>
          </div>
        </div>
      </div>
      <div className='prodQut'>
        <h3>Connect With One of Our Professionals To See if We Have What You Are Looking For!</h3>
        <button onClick={ () => location.href = '/get-a-quote' }  className='prodBut hvr-shrink hvr-sweep-to-right'>Get A Quote</button>
      </div>
    </main>
  );
};

export default ProdMain;
