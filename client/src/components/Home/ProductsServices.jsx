import React from 'react';
import './productsServices.scss';
import Rebar from '../../assets/rebar-pile.jpg';
import BendMachine from '../../assets/bend-machine.jpg';
import { useInView } from 'react-intersection-observer';

const ProductsServices = () => {

const { ref, inView } = useInView({
  triggerOnce: true,
});

  return (
    <section ref={ref}>
      <div className={inView ? 'prodServ slide' : 'prodServ'}>
        <div  className='products'>
          <img src={Rebar} alt="rebar" />
          <div className='txtbx'>
            <h3>Products</h3>
            <p className='details'>Rebar | Mesh | Accessories</p>
            <p>Quality, American-Made Steel. Get all of your rebar needs from us. Products you can trust.</p>
            <button onClick={ () => location.href = '/products' } className='more hvr-shrink hvr-sweep-to-right'>MORE...</button>
          </div>
        </div>
        <div className='services'>
          <img src={BendMachine} alt="bend machine" />
          <div className='txtbx'>
            <h3>Services</h3>
            <p className='details'>Estimating | Detailing | Fabrication</p>
            <p>In house professionals trained to provide you with the best service possible.</p>
            <button onClick={ () => location.href = '/services' } className='more hvr-shrink hvr-sweep-to-right'>MORE...</button>
          </div>
        </div>
      </div>
      <div className='quote'>
        <h3>Not sure what you are looking for?</h3><button onClick={ () => location.href='/get-a-quote' } className='butQut hvr-shrink hvr-sweep-to-right'>GET A QUOTE</button>
      </div>
    </section>
  );
};

export default ProductsServices;
