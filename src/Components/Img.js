import React from 'react';

const Img = props =>
	<div className="column">
		<a href={props.link}>
			<img src={props.url} alt="Unsplash Image here" />
		</a>
		
	</div>;

export default Img;
