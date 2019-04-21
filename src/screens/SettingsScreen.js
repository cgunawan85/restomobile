import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, Button } from 'native-base';
import { signOut } from '../actions';
import SettingsListItem from '../components/SettingsListItem';

class SettingsScreen extends Component {
	static navigationOptions = {
		title: 'Settings',
	};

	onLogoutButtonPress() {
		this.props.signOut();
	}
	
	render() {
		return (
			<Container>
				<Content contentContainerStyle={{ flex: 1 }}>
					<SettingsListItem iconName='question' destination='HomeScreen'>About Us</SettingsListItem>
					<SettingsListItem iconName='user' destination='HomeScreen'>My Account</SettingsListItem>
					<SettingsListItem iconName='paper-plane' destination='HomeScreen'>Shipping Addresses</SettingsListItem>
					<SettingsListItem iconName='support' destination='HomeScreen'>Help</SettingsListItem>
					<View style={{ flex: 1, justifyContent: 'flex-end' }}>
						<Button
							onPress={this.onLogoutButtonPress.bind(this)}
							block
							style={{ bottom: 0 }}
						>
							<Text style={{ color: 'white' }}>Logout</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default connect(null, { signOut })(SettingsScreen);
