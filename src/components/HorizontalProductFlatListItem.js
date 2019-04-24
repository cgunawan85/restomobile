import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { 
	Card, 
	CardItem,
	Text,
	Body
} from 'native-base';
import { withNavigation } from 'react-navigation';

class HorizontalProductFlatListItem extends Component {
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
			<TouchableOpacity 
				onPress={() => 
					this.props.navigation.navigate('ProductDetailScreen', { product: this.props.product })}
			>
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
			</TouchableOpacity>
		);
	}
}

const styles = {
	cardStyle: {
		width: 150,
		borderWidth: 1,
		borderColor: 'gray',
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
		color: 'tomato',
		paddingTop: 10
	}
};

export default withNavigation(HorizontalProductFlatListItem);
