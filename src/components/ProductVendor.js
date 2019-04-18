import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Card, Thumbnail, Button } from 'native-base';

class ProductVendor extends Component {
	render() {
		const { cardStyle } = styles;
		return (
			<Card 
				transparent
				style={cardStyle}
			>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<View>
						<Thumbnail 
							square
							source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/coldmoo-f07a2.appspot.com/o/photo1.JPG?alt=media&token=7d9ae1f8-f2b0-4133-b61c-2fd536cdac20' }} 
						/>
					</View>
					<View style={{ justifyContent: 'space-around' }}>
						<Text note>Sold By</Text>
						<Text>PT. Vendor Name</Text>
					</View>
					<View style={{ justifyContent: 'center' }}>
						<Button small bordered>
							<Text>Contact Vendor</Text>
						</Button>
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

export default ProductVendor;
