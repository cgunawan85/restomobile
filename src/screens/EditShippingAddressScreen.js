import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import ShippingAddressForm from '../components/ShippingAddressForm';


class EditShippingAddressScreen extends Component {
	static navigationOptions = {
		title: 'Edit Shipping Address',
	};

	render() {
		return (
			<Container>
				<Content>
					<ShippingAddressForm />
				<Button full success>
					<Text>Save Changes</Text>
				</Button>
				</Content>
			</Container>
		);
	}
}

export default EditShippingAddressScreen;
