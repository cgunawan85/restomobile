import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Button } from 'native-base';
import CredentialForm from '../components/CredentialForm';

class LoginScreen extends Component {
	static navigationOptions = {
		title: 'Login',
	};

	onEmailChanged(text) {
		//call action creator here to setState
		console.log(text);
	}

	onPasswordChanged(text) {
		//call action creator here to setState
		console.log(text);
	}

	onLoginButtonPress() {
		this.props.navigation.navigate('Main');
	}

	onRegisterButtonPress() {
		this.props.navigation.navigate('RegisterScreen');
	}

	render() {
		const { buttonTextStyle, textStyle } = styles;
		return (
			<Container>
				<Content>
						<CredentialForm 
							onEmailChanged={this.onEmailChanged}
							onPasswordChanged={this.onPasswordChanged}
							//insert this.props.email after mapping state to props
							//use emailValue prop to pass to child
						/>
						<Button 
							block
							onPress={this.onLoginButtonPress.bind(this)}
						>
							<Text style={buttonTextStyle}>Login</Text>
						</Button>
						<Text style={textStyle}>Don't have an account yet?</Text>
						<Button
							block 
							onPress={this.onRegisterButtonPress.bind(this)}
						>
							<Text style={buttonTextStyle}>Register First</Text>
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
	textStyle: {
		alignSelf: 'center',
		paddingTop: 20,
		paddingBottom: 20	
	}
};

export default LoginScreen;
