import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CoinList } from '../config/api';
import { useHistory } from "react-router-dom";
// import { CryptoCurrency } from '../cryptoContext';

const CyptoTable = () => {

	const history = useHistory();

	const [Coins, setCoins] = useState([]);
	const [loading, setloading] = useState(false);
	const [Search, setSearch] = useState("");

	const [page, setPage] = useState(1);

	// const {currency, symbol} = CryptoCurrency();

	const fetchCoins = async () => {
		setloading(true);
		const { data } = await axios.get(CoinList('usd'));
		setCoins(data);
		setloading(false);
	};

	// console.log(Coins);

	useEffect(() => {
		fetchCoins();
	},[])

	function numberWithComma(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
	}

	const handleSearch = () => {
		return Coins.filter(
			(coin) => 
				coin.name.toLowerCase().includes(Search) ||
				coin.symbol.toLowerCase().includes(Search)
		);
	};

  return (
	<div>
		<div className="container crypto-search-container">
			<div className="form-group">
				<input type="text" onChange={(e) => setSearch(e.target.value)}  className="shadow-none form-control crypto-search" id="exampleFormControlInput1" placeholder="  Search for a Crypto Currency..."/>
			</div>
		</div>

		<div className="container-fluid crypto-table-container d-flex justify-content-center">

			{
				loading ? (
					<div className="spinner-border text-dark" role="status">
  						<span className="sr-only">Loading...</span>
					</div>
				) : (			
					<div className="conatiner cointable">
						<table className="table cointable-table table-cust-border">
							<thead className="thead-dark coin-table-head">
								<tr className="coin-table-head-row">
								<th scope="col" style={{width: "35%",paddingLeft:"30px"}}>Coin</th>
								<th scope="col" style={{width: "21.5%"}}>Price</th>
								<th scope="col" style={{width: "21.5%"}}>24h Change</th>
								<th scope="col" style={{width: "21.5%"}}>Market Cap</th>
								</tr>
							</thead>
							<tbody>
								{
									handleSearch().slice((page - 1)*10,((page - 1)*10) + 10).map((row) => {
										const profit = row.price_chnage_percentage_24h > 0;
										
										return(
											<tr onClick={() => history.push(`/currentrates/coins/${row.id}`)} key={row.name} className="coin-table-coin">
												<th scope="row" className="row coin-img-cell">
													<img className="coin-img" src={row?.image} alt={row.name} height="50" ></img>	
													<div className="d-flex coin-name-symbol">
														<div className="coin-table-symbol">{row.symbol}</div>
														<div className="coin-table-name">{row.name}</div>
													</div>
												</th>
												<th className="coin-table-price">$ {numberWithComma(row.current_price.toFixed(2))}</th>
												<th className="coin-table-change" style={{color : profit > 0 ? "green" : "red"}}>{profit && "+"} {row.price_change_percentage_24h.toFixed(2)}</th>
												<th className="coin-table-mcap">$ {numberWithComma(row.market_cap.toString().slice(0,-6))} M</th>
											</tr>
										)
									})
								}								
							</tbody>
						</table>

						{
							(handleSearch()?.length === 0 ) ? (
								<div className="d-flex" style={{color:"white",fontWeight:"600",fontSize:"16px"}}>
									No coins found...
								</div>
							) : ""
						}


						<div className="container">
							<div className="d-flex justify-content-center">
								<nav aria-label="Page navigation example">
									<ul className="pagination">
										<li key="page-row-prev" className="page-item navigation-btn-prev">
											{/* <a className="page-link" onClick={() => setPage(i)} aria-label="Previous"> */}
											<div key="prev-nav">
												{(() => {
													if(page === (1)) {
														return <a key="prev-disabled" className="page-link navLink disabled" aria-label="Previous"><span className="arrows" aria-hidden="true">&laquo;</span></a>
													}
												else {
														return <a key="prev" className="page-link navLink" onClick={() => setPage(page-1)} aria-label="Previous"><span className="arrows" aria-hidden="true">&laquo;</span></a>
												}

											})()}
												{/* <li className="page-item"><span className="page-link" onClick={() => setPage(i+1)}>{i+1}</span></li> */}
											</div>
												
											{/* </a> */}
										</li>
										{
											
											Array.from(Array(((handleSearch()?.length / 10) < 10) ? 1 : (handleSearch()?.length / 10)),(e,i) => {
												
												return <div>
													{(() => {
														if(page === (i+1)) {
															return <li key="page-row-active" className="page-item pageNumber active"><span className="page-link" onClick={() => setPage(i+1)}>{i+1}</span></li>
														}
													else {
															return <li key={i} className="page-item pageNumber"><span className="page-link" onClick={() => setPage(i+1)}>{i+1}</span></li>
													}

												})()}
													{/* <li className="page-item"><span className="page-link" onClick={() => setPage(i+1)}>{i+1}</span></li> */}
												</div>
											})
										}
										<li key="page-row-next" className="page-item navigation-btn-next">
											{/* <a className="page-link" onClick={() => setPage(i)} aria-label="Previous"> */}
											<div key="next-nav">
												{(() => {
													if(page === ((handleSearch()?.length / 10))) {
														return <a key="next-disabled" className="page-link navLink disabled" aria-label="Previous"><span className="arrows" aria-hidden="true">&raquo;</span></a>
													}
												else {
														return <a key="next" className="page-link navLink" onClick={() => setPage(page+1)} aria-label="Previous"><span className="arrows" aria-hidden="true">&raquo;</span></a>
												}

											})()}
												{/* <li className="page-item"><span className="page-link" onClick={() => setPage(i+1)}>{i+1}</span></li> */}
											</div>
												
										</li>
										

									</ul>
								</nav>
							</div>
							

						</div>
					</div>
				)
			}
		</div>
		
	</div>


  );
};

export default CyptoTable;
