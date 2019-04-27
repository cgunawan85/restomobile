import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Thumbnail, Text, Button } from 'native-base';
import { withNavigation } from 'react-navigation';
import { LOADING_IMAGE } from '../images/';

class HorizontalVendorFlatListItem extends Component {
	onMoreInfoButtonPress() {
		this.props.navigation.navigate('VendorScreen', { vendor: this.props.vendor });
	}

	render() {
		const { logo, name, rating } = this.props.vendor;
		const { 
			cardStyle, 
			contentContainerStyle, 
			logoContainerStyle, 
			textContainerStyle, 
			vendorNameTextStyle, 
			ratingTextStyle, 
			buttonContainerStyle 
		} = styles;
		
		return (
			<Card button style={cardStyle}>
				<View style={contentContainerStyle}>
					<View style={logoContainerStyle}>
						<Thumbnail 
							large 
							square 
							source={{ uri: logo }} 
							defaultSource={LOADING_IMAGE}
						/>
					</View>
					<View style={textContainerStyle}>
						<Text numberOfLines={1} style={vendorNameTextStyle}>{name}</Text>
						<Text style={ratingTextStyle}>{rating}</Text>
					</View>
					<View style={buttonContainerStyle}>
						<Button small bordered onPress={() => this.onMoreInfoButtonPress()}>
							<Text>More Info</Text>
						</Button>
					</View>
				</View>
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		width: 160, 
		justifyContent: 'space-around'
	},
	contentContainerStyle: {
		padding: 10, 
		alignItems: 'center'
	},
	logoContainerStyle: {
		paddingBottom: 10
	},
	textContainerStyle: {
		paddingBottom: 10, 
		alignItems: 'center'
	},
	vendorNameTextStyle: {
		fontSize: 14, 
		fontWeight: '600', 
		color: '#444444'
	},
	ratingTextStyle: {
		fontSize: 12
	},
	buttonContainerStyle: {
		flex: 1
	}
};

export default withNavigation(HorizontalVendorFlatListItem);
