import React, { Component } from 'react';
import { Container, Content, H1 } from 'native-base';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home',
	};
	
	render() {
		return (
			<Container>
				<Content contentContainerStyle={styles.contentContainerStyle}>
						<H1>Home!</H1>
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

export default HomeScreen;
