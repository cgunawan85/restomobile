import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, H1, Text, Icon } from 'native-base';

class ProductTitle extends Component {
	render() {
		const { cardStyle } = styles;
		const { brand, name, price } = this.props.product;
		return (
			<Card 
				transparent 
				style={cardStyle}
			>
				<View 
					style={{ 
						paddingLeft: 5, 
						paddingTop: 10, 
						paddingBottom: 10, 
						justifyContent: 'space-around'
					}}
				>
					<Text note>{brand}</Text>
					<H1>{name}</H1>
					<View style={{ flex: 1, paddingTop: 10 }}>
						<Text 
							style={{ 
								color: 'red', 
								fontSize: 20, 
								fontWeight: '600', 
								textAlign: 'right' 
							}}
						>
						{price}
						</Text>
					</View>
					<View style={{ flexDirection: 'row', paddingTop: 10 }}>
						<Icon name='star' style={{ fontSize: 18, color: '#FFD700' }} />
						<Text style={{ color: '#FFD700' }}> 4.5</Text>
						<Text 
							style={{ 
								fontSize: 16, 
								color: '#333333', 
								fontStyle: 'italic' 
							}}
						>  302 Reviews
						</Text>
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
	}
};

export default ProductTitle;
