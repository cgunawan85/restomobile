import React, { Component } from 'react';
import { Container, Content, Tab, Tabs } from 'native-base';
import OrderList from '../components/OrderList';
import { orders } from '../data/orderData';

class OrdersScreen extends Component {
	static navigationOptions = {
		title: 'Orders',
	};

	render() {
		return (
			<Container>
				<Content>
					<Tabs>
						<Tab heading='Pending'>
							<OrderList orders={orders} />
						</Tab>
						<Tab heading='Completed'>
							<OrderList orders={orders} />
						</Tab>
					</Tabs>
				</Content>
			</Container>
		);
	}
}

export default OrdersScreen;
