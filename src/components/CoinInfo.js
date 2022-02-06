import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { HistoricalChart } from '../config/api';
import { chartDays } from '../config/data';
import SelectButton from './SelectButton';

// import { CryptoCurrency } from '../cryptoContext';

const CoinInfo = ({coin}) => {

	const [historicData, setHistoricData] = useState();
	const [days, setDays] = useState(1);

	// const {currency} = CryptoCurrency();

	const fetchHistoricalData = async () => {
		const { data } = await axios.get(HistoricalChart(coin.id, days,'usd'));
		
		setHistoricData(data.prices);
	};

	useEffect(() => {
		fetchHistoricalData();
	},[days]);

	// console.log(historicData);




  return (
		<div className="container " style={{marginTop:"25px",marginBottom:"10px"}}>

			{ !historicData ? (
				<div className="container d-flex justify-content-center spinner-border" style={{marginTop: '200px',height: '5em',width:'5em',color:'white'}} role="status"></div>
				) : (
					<div>
						<div >
							<Line data={{
								labels:historicData.map((coin) => {
									let date = new Date(coin[0]);
									let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`
									
									return days===1 ? time : date.toLocaleDateString()							
								}),

								datasets: [{
									data:historicData.map((coin) => coin[1]),
									label:`Price ( Past ${days} Day(s) ) in USD`,
									borderColor:"black",
									
								},],

								
							}}
							options={{
								scales: {
									x: {
										grid: {
											display: false
										}
									},

								},
								elements :{
									point:{
										radius:1,
									},
								},
							}}>

							</Line>
						</div>
						<div className="daysButtons d-flex flex-row align-items-center justify-content-around">
							{chartDays.map(day => (
								<SelectButton key={day.value} onClick={()=>setDays(day.value)} selected={day.value===days} >
									{day.label}
								</SelectButton>
							))}
						</div>
					</div>
				) }

		</div>

  );
};

export default CoinInfo;
