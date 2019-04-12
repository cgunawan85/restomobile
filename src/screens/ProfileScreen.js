import React, { Component } from 'react';
import { Container, Content, H1 } from 'native-base';

class ProfileScreen extends Component {
	static navigationOptions = {
		title: 'Profile',
	};
	
	render() {
		return (
			<Container>
				<Content contentContainerStyle={styles.contentContainerStyle}>
						<H1>Profile!</H1>
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

export default ProfileScreen;
