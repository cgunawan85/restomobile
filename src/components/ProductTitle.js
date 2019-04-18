import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, H1, Text, Icon } from 'native-base';

class ProductTitle extends Component {
	render() {
		const { 
			cardStyle, 
			containerStyle, 
			priceContainerStyle, 
			priceTextStyle, 
			ratingContainerStyle, 
			starIconStyle, 
			reviewsTextStyle 
		} = styles;
		const { brand, name, price } = this.props.product;
		
		return (
			<Card 
				transparent 
				style={cardStyle}
			>
				<View style={containerStyle}>
					<Text note>{brand}</Text>
					<H1>{name}</H1>
					<View style={priceContainerStyle}>
						<Text style={priceTextStyle}>
							{`IDR ${price.toLocaleString()}`}
						</Text>
					</View>
					<View style={ratingContainerStyle}>
						<Icon name='star' style={starIconStyle} />
						<Text style={{ color: '#FFD700' }}> 4.5</Text>
						<Text style={reviewsTextStyle}>  302 Reviews</Text>
					</View>
				</View>
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		padding: 5,
		borderWidth: 1,
	},
	containerStyle: {
		paddingLeft: 5, 
		paddingTop: 10, 
		paddingBottom: 10, 
		justifyContent: 'space-around'		
	},
	priceContainerStyle: {
		flex: 1, 
		paddingTop: 10
	},
	priceTextStyle: {
		color: 'red', 
		fontSize: 20, 
		fontWeight: '600', 
		textAlign: 'right'
	},
	ratingContainerStyle: {
		flexDirection: 'row', 
		paddingTop: 10
	},
	starIconStyle: {
		fontSize: 18, 
		color: '#FFD700'
	},
	reviewsTextStyle: {
		fontSize: 16, 
		color: '#333333', 
		fontStyle: 'italic'
	}
};

export default ProductTitle;
