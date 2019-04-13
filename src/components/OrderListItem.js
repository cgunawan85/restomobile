import React, { Component } from 'react';
import { ListItem, Left, Thumbnail, Body, Text, Right, Button } from 'native-base';

class OrderListItem extends Component {
	render() {
		return (
			<ListItem thumbnail>
				<Left>
					<Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/coldmoo-f07a2.appspot.com/o/photo1.JPG?alt=media&token=7d9ae1f8-f2b0-4133-b61c-2fd536cdac20' }} />
				</Left>
				<Body>
					<Text>Order # 1234567</Text>
					<Text>Beras and 2 more items</Text>
					<Text note numberOfLines={1}>Courier Out For Delivery</Text>
				</Body>
				<Right>
					<Button transparent>
						<Text>View</Text>
					</Button>
				</Right>
			</ListItem>
		);
	}
}

export default OrderListItem;
