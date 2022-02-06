import React from 'react';
import banner from "../assets/currentratesBanner2.png";
import CyptoTable from './CyptoTable';

const Currentrates = () => {
  return (
	  <div>
		  <div className="container justify-content-start" style={{marginTop: '200px'}}>
          
            <div className="row align-items-center d-flex justify-content-center coinsBanner">
				<div className="col-lg-6 currentrates-description">
					<p>Check the current rates easily, from anywhere.</p>		
              	</div>
				<div className="col-lg-6 current-rates-banner-pic" >
					<img className="img-fluid" src={banner} alt="cryptocoins picture" />
				</div>              
            </div>
          
        </div>
		<CyptoTable/>
	  </div>
  );
};

export default Currentrates;
