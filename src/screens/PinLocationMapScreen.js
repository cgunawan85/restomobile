import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { updateLongitudeAndLatitude } from '../actions';
import { PIN_MARKER } from '../images/';

/*
fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + myLat + ',' + myLon + '&key=' + myApiKey)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
})
*/

class PinLocationMapScreen extends Component {
	static navigationOptions = {
		title: 'Pin Location',
	};

	onPinLocationButtonPress(longitude, latitude) {
		this.props.updateLongitudeAndLatitude({ 
			longitude: longitude,
			latitude: latitude
		});
		this.props.navigation.goBack();
	}

	render() {
		let longitude = this.props.longitude;
		let latitude = this.props.latitude;

		return (
			<View style={{ flex: 1 }}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={{ flex: 1 }}
					initialRegion={{
						latitude: -6.21462,
						longitude: 106.84513,
						latitudeDelta: 0.0421,
						longitudeDelta: 0.0421, 
					}}
					onRegionChangeComplete={(region) => {
						latitude = region.latitude;
						longitude = region.longitude;
					}}
				/>
				<View style={styles.markerFixed}>
					<Image style={styles.marker} source={PIN_MARKER} />
					<TouchableOpacity 
						style={styles.buttonStyle}
						onPress={() => this.onPinLocationButtonPress(longitude, latitude)}
					>
						<Text style={styles.buttonTextStyle}>Pin this location</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	markerFixed: {
		left: '50%',
		marginLeft: -24,
		marginTop: -48,
		position: 'absolute',
		top: '50%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	marker: {
		height: 24,
		width: 24
	},
	buttonStyle: {
		backgroundColor: 'white', 
		padding: 5, 
		borderWidth: 0.2, 
		borderColor: 'black',
		marginTop: 5
	},
	buttonTextStyle: {
		color: '#444444',
		fontSize: 12
	}
};

const mapStateToProps = (state) => {
	const { longitude, latitude } = state.shippingAddressForm;
	return { longitude, latitude };
};

export default connect(mapStateToProps, { updateLongitudeAndLatitude })(PinLocationMapScreen);
