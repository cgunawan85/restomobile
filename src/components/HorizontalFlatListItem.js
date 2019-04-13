import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
	Card, 
	CardItem,
	Text,
	Body
} from 'native-base';

class HorizontalFlatListItem extends Component {
	render() {
		const { photo, brand, name, price } = this.props.product;

		const { 
			cardStyle, 
			imageStyle, 
			vendorNameTextStyle, 
			productNameTextStyle, 
			priceTextStyle 
		} = styles;

		return (
			<Card style={cardStyle}>
				<CardItem cardBody>
					<Image 
						source={{ uri: photo }} 
						style={imageStyle} 
					/>
				</CardItem>
				<CardItem>
					<Body>
						<Text 
							style={vendorNameTextStyle}
							numberOfLines={1}
						>
							{brand}
						</Text>
						<Text 
							style={productNameTextStyle}
							numberOfLines={1}
						>
							{name}
						</Text>
						<Text 
							style={priceTextStyle}
							numberOfLines={1}
						>
							{`IDR ${price.toLocaleString()}`}
						</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		width: 150,
		borderWidth: 1,
		borderColor: 'blue'
	},
	imageStyle: {
		height: 150, 
		width: null, 
		flex: 1
	},
	vendorNameTextStyle: {
		fontSize: 12,
		color: 'gray'
	},
	productNameTextStyle: {
		fontSize: 12
	},
	priceTextStyle: {
		fontSize: 14,
		color: 'red'
	}
};

export default HorizontalFlatListItem;
