import React, { Component } from 'react';
import { Container, Content, Tab, Tabs } from 'native-base';
import OrderList from '../components/OrderList';

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
							<OrderList />
						</Tab>
						<Tab heading='Completed'>
							<OrderList />
						</Tab>
					</Tabs>
				</Content>
			</Container>
		);
	}
}

export default OrdersScreen;
