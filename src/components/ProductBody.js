import React, { Component } from 'react';
import { Card, H1 } from 'native-base';

class ProductBody extends Component {
	render() {
		const { cardStyle } = styles;
		return (
			<Card style={cardStyle}>
				<H1>Description, specs and reviews</H1>
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		padding: 5,
		borderWidth: 1,
	}
};

export default ProductBody;
