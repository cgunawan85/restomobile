import React, { Component } from 'react';
import { Container, Content, H1 } from 'native-base';

class CartScreen extends Component {
	static navigationOptions = {
		title: 'Cart',
	};

	render() {
		return (
			<Container>
				<Content contentContainerStyle={styles.contentContainerStyle}>
					<H1>Cart!</H1>
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

export default CartScreen;
