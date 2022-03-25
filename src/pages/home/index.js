import React from "react";

import GifResult from "../../components/gif/gif";
import Search from "../../components/search/search";

import "./index.css";

const Home = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='container'>
					<Search />
					<GifResult />
				</div>
			</header>
		</div>
	);
};

export default Home;