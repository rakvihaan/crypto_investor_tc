import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../config/api';
import { CryptoCurrency } from '../CryptoContext';
import CoinInfo from './CoinInfo';
import ReactHtmlParser from 'react-html-parser';

const CoinPage = () => {

	const { id } = useParams();
	// console.log(id);
	const [coin, setCoin] = useState();
	// const { currency,symbol } = CryptoCurrency();

	const fetchCoin = async() => {
		const { data } = await axios.get(SingleCoin(id));
		setCoin(data);
	}

	function numberWithComma(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
	}

	// console.log(coin);

	useEffect(() => {
	  fetchCoin();
	}, []);
	
	if (!coin) return <div className="container d-flex justify-content-center spinner-border" style={{marginTop: '200px',height: '5em',width:'5em',color:'white'}} role="status"></div>

  return (
		<div>
			<div className="container-fluid flex-column flex-xl-row d-flex justify-content-center coinInfoContainer" style={{marginTop: '200px'}}>
				<div className="d-flex justify-content-center align-items-center" >
					<div className="coinInfoSubContainer d-flex justify-content-center" >
						<div className="container sidebar-info d-flex flex-column justify-content-center">
							<img className="coinImg d-block mx-auto" src={coin?.image.large} alt={coin?.name} style={{marginBottom:20}} height="200"/>
							<div className="d-flex flex-column">
								<div className="d-flex justify-content-center coinName">
									{coin?.name}
								</div>
								<div className="coinDescription">
									{ReactHtmlParser(coin?.description.en.split(". ")[0])}.
								</div>
								<div className="d-flex flex-column flex-md-row flex-xl-column flex-sm-column justify-content-start justify-content-xl-start justify-content-md-around ">
									<div className="coinRank ">
										<div>Rank: <span className="coinRankNumber">{coin?.market_cap_rank}</span></div>
									</div>
									<div className="coinCurrPrice">
										Current Price: <span className="coinCurrPriceNumber">$ {numberWithComma(coin?.market_data.current_price['usd'])}</span>
									</div>
									<div className="coinMarketCap">
										Market Cap: <span className="coinMarketCapNumber">$ {numberWithComma(coin?.market_data.market_cap['usd'].toString().slice(0,-6))} M</span>
									</div>
								</div>
							</div>

						</div>
						
					</div>
				</div>
			<div className="container coinPageSpacingline">
				<div className="row coinpagedivline">
				</div>
			</div>
			<div className="d-flex align-items-center coinDataGraph">
				<CoinInfo coin={coin} />
			</div>
			</div>
			
		</div>
	
	);
};

export default CoinPage;
