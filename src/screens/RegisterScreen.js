import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Button } from 'native-base';
import CredentialForm from '../components/CredentialForm';

class RegisterScreen extends Component {
	static navigationOptions = {
		title: 'Register',
	};

	render() {
		const { buttonTextStyle } = styles;
		return (
			<Container>
				<Content>
						<CredentialForm />
						<Button block>
							<Text style={buttonTextStyle}>Register</Text>
						</Button>
				</Content>
			</Container>
		);
	}
}

const styles = {
	buttonTextStyle: {
		color: 'white'
	},
};

export default RegisterScreen;
