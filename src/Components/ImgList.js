import React from 'react';
import Img from './Img';
import NoImgs from './NoImgs';

const ImgList = props => {
	const results = props.data;
	let imgs;
	if (results.length > 0) {
		imgs = results.map(img =>
			<Img
				url={img.urls.thumb}
			/>
		);
	} else {
		imgs = <NoImgs />;
	}
	return (
		<div>
			<section id="photos">
			{imgs}
			</section>
		</div>
	);
};

export default ImgList;
