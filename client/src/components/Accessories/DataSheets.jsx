import React from 'react';
import { useInView } from 'react-intersection-observer';
import './accessories.scss';
import '../../../node_modules/hover.css/css/hover.css';
import AnchorChair from '../../assets/Anchor_Chair_001-Trans.png';
import AnchorPDF from '../../assets/Anchor-Chair-Accessory-ReSteelExpressServices.pdf';
import GradeChair from '../../assets/Grade_Chair_With_Base_001-trans.png';
import GradePDF from '../../assets/Grade-Chair-wBase-Accessory-ReSteelExpressServices.pdf';
import MeshChair from '../../assets/Mesh_Chair_001-trans.png';
import MeshPDF from '../../assets/Mesh-Chair-Accessory-ReSteelExpressServices.pdf';
import Speedies from '../../assets/Speedies_002-trans.png';
import SpeediesPDF from '../../assets/Speedie-Spacer-Accessory-ReSteelExpressServices.pdf';
import MetalSlabUpper from '../../assets/Metal_Slab_Bolster_Upper_002-trans.png';
import MetalPDF from '../../assets/Metal-Slab-Bolster-Up-Accessory-ReSteelExpressServices.pdf';
import PlasticSlab from '../../assets/Plastic_Slab_Bolster_002-trans.png';
import PlasticPDF from '../../assets/Plastic-Slab-Bolster-Accessory-ReSteelExpressServices.pdf';
import PlasticSlabUpper from '../../assets/Plastic_Slab_Bolster_Upper_002-trans.png';
import PlasticUpperPDF from '../../assets/Plastic-Slab-Bolster-Upper-Accessory-ReSteelExpressServices.pdf';
import Stakes from '../../assets/Stakes_002-trans.png';
import StakesPDF from '../../assets/Stake-Accessory-ReSteelExpressServices.pdf';
import BarBoot from '../../assets/Bar_Boot_001-trans.png';
import BootPDF from '../../assets/Bar-Boot-Accessory-ReSteelExpressServices.pdf';
import DrillShaft from '../../assets/Drill_Shaft_Wheel_001-Trans.png';
import DrillPDF from '../../assets/Drill-Shaft-Wheel-Accessory-ReSteelExpressServices.pdf';
import EndSpacer from '../../assets/End_Spacer_001-trans.png';
import EndPDF from '../../assets/End-Spacer-Accessory-ReSteelExpressServices.pdf';
import ConcreteBrick from '../../assets/ConcreteBrick_001-trans.png';
import TieWire from '../../assets/TieWire_001-trans.png';
import WirePDF from '../../assets/Tie-Wire-Acessory-ReSteelExpressServices.pdf';
import SmoothDowel from '../../assets/SmoothRound_003-trans.png';
import DowelPDF from '../../assets/Smooth-Dowel-Accessory-ReSteelExpressServices.pdf';
import PolyVapor from '../../assets/Poly_001-trans.png';
import { IoMdDownload } from 'react-icons/io';

const DataSheets = () => {

const { ref: Chairs, inView: chairsInView } = useInView({
  triggerOnce: true,
});
const { ref: Speed, inView: speedInView } = useInView({
  triggerOnce: true,
});
const { ref: Plastic, inView: plasticInView } = useInView({
  triggerOnce: true,
});
const { ref: Drill, inView: drillInView } = useInView({
  triggerOnce: true,
});
const { ref: Tie, inView: tieInView } = useInView({
  triggerOnce: true,
});

  return (
    <main>
      <h3>Accessories</h3>
      <div ref={Chairs} className='redLine'></div>
      <div className='dataSheets'>
        <div className={ chairsInView ? 'sheets entranceLeft':'sheets' }>
          <a href = { AnchorPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={AnchorChair} alt="" />
            <div className='dataTxt'>
              <h4>Anchor Chair</h4>
              <p>secure the sections of rebar that intersect, eliminating the need for tie wire.</p>
              <h5>Advantages</h5>
              <ul>
                <li>Replaces the need for tie wire.</li>
                <li>Fast installment.</li>
                <li>Polycarbonate plastic provides higher strength.</li>
              </ul>
              <button className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
          <a href = { GradePDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={GradeChair} alt="" />
            <div className='dataTxt'>
              <h4>Grade Chair w/Base</h4>
              <p>secure the sections of rebar that intersect, eliminating the need for tie wire.</p>
              <h5>Advantages</h5>
              <ul>
                <li>Can be used for 2 different height applications.</li>
                <li>Plastic top tangs help secure wire mesh and break away fro rebar.</li>
              </ul>
              <button className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
          <a href = { MeshPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={MeshChair} alt="" /><div className='dataTxt'>
              <h4>Mesh Chair</h4>
              <p>secure sections of mesh that intersect, eliminating the need for tie wire.</p>
              <h5>Advantages</h5>
              <ul>
                <li>Eliminates the need for tie wire.</li>
                <li>Circular base provides extra stability.</li>
                <li>Provides positive lock.</li>
              </ul>
              <button ref={Speed} className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
        </div>
        <div className={ speedInView ? 'sheets entranceRight':'sheets' }>
          <a href = { SpeediesPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={Speedies} alt="" />
            <div className='dataTxt'>
              <h4>Speedies</h4>
              <p>lift mesh off of the ground to allow for proper slab reinforcement installation.</p>
              <h5>Advantages</h5>
              <ul>
                <li>Reduces working time by approx. 75%</li>
                <li>Speeds up installation.</li>
                <li>Allows to load up to 50 speedies.</li>
              </ul>
              <button className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
          <a href = { MetalPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={MetalSlabUpper} alt="" />
            <div className='dataTxt'>
              <h4>Metal Slab Bolster Upper</h4>
              <p>a continuous metal bar support used to maintain the elevation of rebar in reinforced concrete.</p>
              <h5>Advantages</h5>
              <ul>
                <li>Provides uniformed spacing for entire slab.</li>
              </ul>
              <button className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
          <a href = { PlasticPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={PlasticSlab} alt="" /><div className='dataTxt'>
              <h4>Plastic Slab Bolster</h4>
              <p>contains interlocking ends for joining two or more sections together to create a continuous beam.</p>
              <h5>Advantages</h5>
              <ul>
                <li>No metal to rust or stain concrete.</li>
                <li>High load strength.</li>
                <li>Impact resistant.</li>
              </ul>
              <button ref={Plastic} className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
        </div>
        <div className={ plasticInView ? 'sheets entranceLeft': 'sheets' }>
          <a href = { PlasticUpperPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={PlasticSlabUpper} alt="" />
            <div className='dataTxt'>
              <h4>Plastic Slab Bolster Upper</h4>
              <p>contains interlocking ends for joining two or more sections together to create a continuous beam.</p>
              <h5>Advantages</h5>
              <ul>
                <li>No metal to rust or stain concrete.</li>
                <li>High load strength.</li>
                <li>Impact resistant.</li>
              </ul>
              <button className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
          <a href = { StakesPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={Stakes} alt="" />
            <div className='dataTxt'>
              <h4>Stakes</h4>
              <p>used in footers to hold rebar off of the ground to allow for proper coverage of concrete.</p>
              <h5>Advantages</h5>
              <ul>
                <li>Easy installation.</li>
                <li>Greater stability.</li>
              </ul>
              <button className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
          <a href = { BootPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={BarBoot} alt="" /><div className='dataTxt'>
              <h4>Bar Boot</h4>
              <p>are an easy and quick way to support space rebar cage installations at the base of drilled holes or shafts.</p>
              <h5>Advantages</h5>
              <ul>
                <li>Support cages with fewer parts.</li>
                <li>Requires no tools.</li>
                <li>Ensures proper installation.</li>
              </ul>
              <button ref={Drill} className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
        </div>
        <div className={ drillInView ? 'sheets entranceRight': 'sheets' }>
          <a href = { DrillPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={DrillShaft} alt="" />
            <div className='dataTxt'>
              <h4>Drill Shaft Wheels</h4>
              <p>provides a guide system for reinforcement cages within caissons, drilled shafts and other construction applications.</p>
              <h5>Advantages</h5>
              <ul>
                <li>Easy jobsite application.</li>
                <li>No tools required.</li>
                <li>Multiple sizes of rebar can be used.</li>
              </ul>
              <button className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
          <a href = { EndPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img src={EndSpacer} alt="" />
            <div className='dataTxt'>
              <h4>End Spacer</h4>
              <p>developed to create a protective overlapping for rebar ends in vertical or horizontal applications.</p>
              <h5>Advantages</h5>
              <ul>
                <li>Prevents surface rust.</li>
                <li>No tools required.</li>
                <li>Fast installation.</li>
              </ul>
              <button ref={Tie} className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
          <a><div className='noCur data'>
            <img src={ConcreteBrick} alt="" /><div className='dataTxt'>
              <h4>Concrete Brick</h4>
              <p></p>
              <h5>Advantages</h5>
              <ul>
                <li> </li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
          </div></a>
        </div>
        <div className={ tieInView ? 'sheets entranceLeft': 'sheets' }>
          <a href = { WirePDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img className='smooth' src={TieWire} alt="" />
            <div className='dataTxt'>
              <h4>Tie Wire</h4>
              <p>used to bind rebar and mesh together.</p>
              <h5>Selection</h5>
              <ul>
                <li>Bar Ties</li>
                <li>Rebar Tie Wire</li>
                <li>Straightened and Cut</li>
              </ul>
              <button className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
          <a href = { DowelPDF } target = "_blank"><div className='data hvr-curl-top-right'>
            <img className='smooth' src={SmoothDowel} alt="" />
            <div className='dataTxt'>
              <h4>Smooth Dowel</h4>
              <p>hot rolled, smooth, round steel.</p>
              <h5>Advantages</h5>
              <ul>
                <li>Maintains vertical alignment of slabs.</li>
                <li>Allows slab movements perpendicular to the joint.</li>
              </ul>
              <button className='databutt hvr-shrink'><IoMdDownload className='download' size={20}/>Datasheet</button>
            </div>
          </div></a>
         <a><div className='noCur data'>
            <img className='smooth' src={PolyVapor} alt="" /><div className='dataTxt'>
              <h4>Poly Vapor Barrier</h4>
              <p> </p>
              <h5>Advantages</h5>
              <ul>
                <li> </li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
         </div></a>
        </div>
      </div>
      <br />
    </main>

  );
};

export default DataSheets;
