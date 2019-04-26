import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, CardItem, Thumbnail } from 'native-base';
import NumericInput from 'react-native-numeric-input';

class CartItemProduct extends Component {
	render() {
		const { textStyle, priceTextStyle, itemTextContainerStyle } = styles;
		return (
			<CardItem bordered style={{ justifyContent: 'space-around' }}>
				<View style={{ justifyContent: 'flex-start' }}>
					<Thumbnail 
						square 
						small 
						source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/coldmoo-f07a2.appspot.com/o/photo1.JPG?alt=media&token=7d9ae1f8-f2b0-4133-b61c-2fd536cdac20' }} 
					/>
				</View>
				<View style={itemTextContainerStyle}>
					<Text 
						style={textStyle} 
						numberOfLines={2}
					>
						Product A Testing long ass name klajdfkl
					</Text>
				</View>
				<View>
					<Text style={textStyle}>1</Text>
				</View>
				<View>
					<Text style={priceTextStyle}>IDR 1,150,000</Text>
				</View>
			</CardItem>
		);
	}
}

const styles = {
	textStyle: {
		fontSize: 12,
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingHorizontal: 5,
		flexShrink: 1
	},
	itemTextContainerStyle: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingHorizontal: 5,
		flex: 0.7
	},
	priceTextStyle: {
		fontSize: 12,
		color: 'tomato',
		fontWeight: '600',
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingHorizontal: 5,
		flexShrink: 1
	}
};

export default CartItemProduct;
