import React, { Component } from 'react';
import { Container, Content, H1 } from 'native-base';

class SettingsScreen extends Component {
	static navigationOptions = {
		title: 'Settings',
	};
	
	render() {
		return (
			<Container>
				<Content contentContainerStyle={styles.contentContainerStyle}>
						<H1>Settings!</H1>
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

export default SettingsScreen;
