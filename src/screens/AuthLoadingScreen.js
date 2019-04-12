import React, { Component } from 'react';
import { Container, Content, H1 } from 'native-base';

class AuthLoadingScreen extends Component {
	render() {
		return (
			<Container>
				<Content>
					<H1>This is a loading screen!</H1>
				</Content>
			</Container>
		);
	}
}

export default AuthLoadingScreen;
