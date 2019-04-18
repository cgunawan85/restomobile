import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Card } from 'native-base';

class ProductImage extends Component {
	render() {
		const { photo } = this.props.product;
		const { cardStyle, imageStyle } = styles;
		return (
			<Card style={cardStyle}>
				<Image 
					style={imageStyle} 
					source={{ uri: photo }} 
					resizeMode='contain'
				/>
			</Card>
		);
	}
}

const screenHeight = Dimensions.get('screen').height;

const styles = {
	cardStyle: {
		height: screenHeight / 2.5,
		padding: 5,
		borderWidth: 1
	},
	imageStyle: {
		flex: 1
	},
};

export default ProductImage;
