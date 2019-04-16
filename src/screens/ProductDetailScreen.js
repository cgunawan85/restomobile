import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
import ProductImage from '../components/ProductImage';
import ProductTitle from '../components/ProductTitle';
import ProductVendor from '../components/ProductVendor';
import ProductBody from '../components/ProductBody';
	
class ProductDetailScreen extends Component {
	static navigationOptions = {
		title: 'Product Detail Screen'
	};

	render() {
		const { navigation } = this.props;
		const product = navigation.getParam('product');
		const { addToCartButtonContainerStyle } = styles;
		
		return (
			<Container>
				<Content contentContainerStyle={{ flex: 1 }}>
					<ProductImage product={product} />
					<ProductTitle />
					<ProductVendor />
					<ProductBody />
					<View>
						<Text>{product.name}</Text>
						<Text>{product.brand}</Text>
						<Text>{product.price}</Text>
					</View>
					<View style={addToCartButtonContainerStyle}>
						<Button full>
							<Text>Add To Cart</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = {
	addToCartButtonContainerStyle: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0
	}
};

export default ProductDetailScreen;
