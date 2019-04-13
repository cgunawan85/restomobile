import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, Spinner } from 'native-base';
import CredentialForm from '../components/CredentialForm';
import { 
	emailChanged, 
	passwordChanged, 
	registerUser 
} from '../actions';

class RegisterScreen extends Component {
	static navigationOptions = {
		title: 'Register',
	};

	onEmailChanged(text) {
		this.props.emailChanged(text);
	}

	onPasswordChanged(text) {
		this.props.passwordChanged(text);
	}

	onRegisterButtonPress() {
		this.props.registerUser({ 
			email: this.props.email, 
			password: this.props.password 
		});
	}

	renderRegisterButtonOrSpinner() {
		if (this.props.loading) {
			return <Spinner />;
		}
		return (
			<Button 
				block
				onPress={this.onRegisterButtonPress.bind(this)}
			>
				<Text style={{ color: 'white' }}>Register</Text>
			</Button>
		);
	}

	render() {
		const { buttonTextStyle } = styles;
		return (
			<Container>
				<Content>
						<CredentialForm
							onEmailChanged={this.onEmailChanged.bind(this)}
							onPasswordChanged={this.onPasswordChanged.bind(this)}
						/>
						{this.renderRegisterButtonOrSpinner()}
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

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		loading: state.auth.loading,
		error: state.auth.error,
		user: state.auth.user
	};
};

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	registerUser 
})(RegisterScreen);
