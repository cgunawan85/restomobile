import React, { Component } from 'react';
import { Card, H1 } from 'native-base';

class ProductTitle extends Component {
	render() {
		const { cardStyle } = styles;
		return (
			<Card style={cardStyle}>
				<H1>Test</H1>
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

export default ProductTitle;
