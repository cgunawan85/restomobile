import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { 
	Card, 
	Container, 
	Content,
	H2,
	Text,
	Icon 
} from 'native-base';
import Seperator from '../components/common/Seperator';
import { ORDER_STATUS_1, ORDER_STATUS_2, ORDER_STATUS_3, ORDER_STATUS_4, } from '../images';

class OrderDetailsScreen extends Component {
	static navigationOptions = {
		title: 'Order Details',
	};

	renderPaid() {
		const order = this.props.navigation.getParam('order'); // use state instead
		if (order.payment_status === 1) {
			return (
				<View style={{ backgroundColor: 'green', padding: 10 }}>
					<Text style={{ color: 'white' }}>Paid</Text>
				</View>
			);
		}
		return (
			<View style={{ backgroundColor: 'red', padding: 10 }}>
				<Text style={{ color: 'white' }}>Not Paid</Text>
			</View>
		);
	}

	renderOrderStatusImage() {
		const order = this.props.navigation.getParam('order');
		let imageName;
		switch (order.delivery_status) {
			case 1:
				imageName = ORDER_STATUS_1;
				break;
			case 2:
				imageName = ORDER_STATUS_2;
				break;
			case 3:
				imageName = ORDER_STATUS_3;
				break;
			case 4:
				imageName = ORDER_STATUS_4;
				break;
			default:
				return null;
		}
		return (
			<View 
				style={{ 
					flexDirection: 'row', 
					flex: 1 
				}}
			>
				<Image 
					source={imageName} 
					style={{ flex: 1 }}
					resizeMode='center'
				/>
			</View>
		);
	}

	render() {
		const order = this.props.navigation.getParam('order');
		return (
			<Container>
				<Content>
					<Card transparent style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
						<View style={{ paddingBottom: 15 }}>
							<Image style={{ height: 100, width: 100 }} source={{ uri: order.vendor_logo }} />
						</View>
						<Text>{order.date}</Text>
						<H2 style={{ paddingTop: 10, paddingBottom: 10 }}>{order.vendor}</H2>
						<Text>{`Order #${order.order_id}`}</Text>
						{this.renderPaid()}
					</Card>
					<Seperator />
					<Card transparent>
						{this.renderOrderStatusImage()}
					</Card>
					<Seperator />
					<Card transparent style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
						<View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
							<Icon name='calendar' type='SimpleLineIcons' style={{ fontSize: 18 }} />
							<Text style={{ color: '#444444' }}>Delivery Date</Text>
							<Text style={{ fontWeight: '600' }}>{order.date}</Text>
						</View>
						<View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
							<Icon name='location-pin' type='SimpleLineIcons' style={{ fontSize: 18 }} />
							<Text style={{ color: '#444444' }}>Delivered To</Text>
							<Text style={{ fontWeight: '600' }}>Home</Text>
						</View>
					</Card>
					<Seperator />
				</Content>
			</Container>
		);
	}
}

export default OrderDetailsScreen;
