import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import ShippingAddressForm from '../components/ShippingAddressForm';


class AddShippingAddressScreen extends Component {
	static navigationOptions = {
		title: 'Add Shipping Address',
	};

	render() {
		return (
			<Container>
				<Content>
					<ShippingAddressForm />
				<Button full success>
					<Text>Add Address</Text>
				</Button>
				</Content>
			</Container>
		);
	}
}

export default AddShippingAddressScreen;
