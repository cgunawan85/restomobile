import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, H1, Button } from 'native-base';
import { signOut } from '../actions';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home',
	};

	onLogoutButtonPress() {
		this.props.signOut();
	}

	render() {
		return (
			<Container>
				<Content contentContainerStyle={styles.contentContainerStyle}>
						<H1>Home!</H1>
						<Button
							onPress={this.onLogoutButtonPress.bind(this)}
						>
							<Text>Logout</Text>
						</Button>
				</Content>
			</Container>
		);
	}
}

const styles = {
	contentContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
};

export default connect(null, { signOut })(HomeScreen);
