import React, { Component } from 'react';
import { List } from 'native-base';
import OrderListItem from './OrderListItem';
	
class OrderList extends Component {
	render() {
		return (
			<List>
				<OrderListItem />
				<OrderListItem />
				<OrderListItem />
				<OrderListItem />
			</List>
		);
	}
}

export default OrderList;
