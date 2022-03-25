import data from "../data/data";

const gifLists = data
	.filter((data) => data.rating == "g")
	.map((filteredData) => (
		<figure key={filteredData.id}>
			<img src={filteredData.url} alt='Result' />
			<figcaption className='gif-title'>{filteredData.title}</figcaption>
		</figure>
	));

const GifResult = () => {
	return <div className='result'>{gifLists}</div>;
};

export default GifResult;