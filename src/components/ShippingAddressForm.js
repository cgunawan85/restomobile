import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Form, Item, Label, Input, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { shippingAddressFormUpdate, resetLocation, updateLongitudeAndLatitude } from '../actions';
import { LOCATION_SUCCESS } from '../images/';
import { withNavigation } from 'react-navigation';

class ShippingAddressForm extends Component {
	onGetLocationButtonPress() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.props.updateLongitudeAndLatitude({ 
					longitude: position.coords.longitude, 
					latitude: position.coords.latitude 
				});
			}, (error) => console.log(error),
		{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
		);
	}

	onResetLocationButtonPress() {
		this.props.resetLocation();
	}

	renderGetLocationButtonOrSuccess() {
		const { 
			pinLocationContainerStyle, 
			locationSuccessImageStyle, 
			textStyle 
		} = styles;

		if (this.props.longitude && this.props.latitude) { 
			return (
				<View style={pinLocationContainerStyle}>
					<Image 
						style={locationSuccessImageStyle} 
						source={LOCATION_SUCCESS} 
					/>
					<Text style={textStyle}>We got your location!</Text>
					<Button 
						bordered 
						danger 
						style={{ alignSelf: 'center', marginTop: 10 }}
						onPress={() => this.onResetLocationButtonPress()}
					>
						<Text>Reset location</Text>
					</Button>
				</View>
			);
		}
		return (
			<View style={pinLocationContainerStyle}>
				<Button 
					bordered 
					style={{ alignSelf: 'center' }}
					onPress={() => this.props.navigation.navigate('PinLocationMapScreen')}
				>
					<Text>Pin Address</Text>
				</Button>
				<Text style={textStyle}>or</Text>
				<Button 
					bordered 
					success 
					style={{ alignSelf: 'center' }} 
					onPress={() => this.onGetLocationButtonPress()}
				>
					<Text>
						Use your current location
					</Text>
				</Button>
				<Text note style={textStyle}>
					This will help us easily find your delivery address
				</Text>
			</View>
		);
	}

	render() {
		return (
			<Form>
				{this.renderGetLocationButtonOrSuccess()}
				<Item stackedLabel>
					<Label>Title</Label>
					<Input
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'title', value: text })
						}
						value={this.props.title}
					/>
				</Item>
				<Item stackedLabel>
					<Label>Address</Label>
					<Input
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'address', value: text })
						}
						value={this.props.address}
					/>
				</Item>
				<Item stackedLabel>
					<Label>Province</Label>
					<Input 
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'province', value: text })
						}
						value={this.props.province}
					/>
				</Item>
				<Item stackedLabel>
					<Label>City</Label>
					<Input 
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'city', value: text })
						}
						value={this.props.city}
					/>
				</Item>
				<Item stackedLabel>
					<Label>Postal Code</Label>
					<Input 
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'postal_code', value: text })
						}
						value={this.props.postal_code}
					/>
				</Item>
				<Item stackedLabel>
					<Label>PIC</Label>
					<Input 
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'pic', value: text })
						}
						value={this.props.pic}
					/>
				</Item>
				<Item stackedLabel>
					<Label>PIC Phone Number</Label>
					<Input 
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ 
								prop: 'pic_phone_number', 
								value: text 
							})
						}
						value={this.props.pic_phone_number}
					/>
				</Item>
			</Form>
		);
	}
}

const styles = {
	pinLocationContainerStyle: {
		paddingVertical: 30, 
		justifyContent: 'center' 
	},
	locationSuccessImageStyle: {
		height: 100, 
		width: 100, 
		alignSelf: 'center'
	},
	textStyle: {
		textAlign: 'center', 
		paddingVertical: 10
	}
};

const mapStateToProps = (state) => {
	const { 
		title, 
		address, 
		province, 
		city, 
		postal_code, 
		pic, 
		pic_phone_number,
		error,
		longitude,
		latitude
	} = state.shippingAddressForm;
	return { 
		title, 
		address, 
		province, 
		city, 
		postal_code, 
		pic, 
		pic_phone_number, 
		error, 
		longitude, 
		latitude 
	};
};

export default withNavigation(connect(mapStateToProps, 
	{ shippingAddressFormUpdate, resetLocation, updateLongitudeAndLatitude }
	)(ShippingAddressForm));
