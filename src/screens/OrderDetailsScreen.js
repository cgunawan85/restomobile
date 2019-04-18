import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { 
	Container, 
	Content
} from 'native-base';

class OrderDetailsScreen extends Component {
	static navigationOptions = {
		title: 'Order Details',
	};

	render() {
		const order = this.props.navigation.getParam('order');
		return (
			<Container>
				<Content>
					<View>
						<Text>{order.order_id}</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

export default OrderDetailsScreen;
