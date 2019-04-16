import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card } from 'native-base';

class ProductImage extends Component {
	render() {
		const { photo } = this.props.product;
		const { cardStyle, imageStyle } = styles;
		return (
			<Card style={cardStyle}>
				<Image style={imageStyle} source={{ uri: photo }} />
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		flex: 0.6,
		padding: 5,
		borderWidth: 1
	},
	imageStyle: {
		flex: 1
	},
};

export default ProductImage;
