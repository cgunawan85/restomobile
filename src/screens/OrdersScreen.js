import React, { Component } from 'react';
import { Container, Content, H1 } from 'native-base';

class OrdersScreen extends Component {
	static navigationOptions = {
		title: 'Orders',
	};

	render() {
		return (
			<Container>
				<Content contentContainerStyle={styles.contentContainerStyle}>
					<H1>Orders!</H1>
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

export default OrdersScreen;
