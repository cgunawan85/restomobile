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

	renderPaidOrNotPaid() {
		const order = this.props.navigation.getParam('order'); // use state instead
		if (order.payment_status === 1) {
			return (
				<View style={{ paddingTop: 20 }}>
					<Text style={{ backgroundColor: 'green', color: 'white', padding: 10 }}>Paid</Text>
				</View>
			);
		}
		return (
			<View style={{ paddingTop: 20 }}>
				<Text style={{ backgroundColor: 'red', color: 'white', padding: 10 }}>Not Paid</Text>
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
		const { 
			orderTitleSectionStyle, 
			vendorLogoContainerStyle, 
			vendorLogoImageStyle, 
			vendorTitleStyle, 
			orderDeliverySectionStyle, 
			orderDeliveryDateSectionStyle, 
			orderDeliveryDestinationSectionStyle 
		} = styles;

		return (
			<Container>
				<Content>
					<Card transparent style={orderTitleSectionStyle}>
						<View style={vendorLogoContainerStyle}>
							<Image style={vendorLogoImageStyle} source={{ uri: order.vendor_logo }} />
						</View>
						<Text>{order.date}</Text>
						<H2 style={vendorTitleStyle}>{order.vendor}</H2>
						<Text>{`Order #${order.order_id}`}</Text>
						{this.renderPaidOrNotPaid()}
					</Card>
					<Seperator />
					<Card transparent>
						{this.renderOrderStatusImage()}
					</Card>
					<Seperator />
					<Card transparent style={orderDeliverySectionStyle}>
						<View style={orderDeliveryDateSectionStyle}>
							<Icon 
								name='calendar' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={{ color: '#444444' }}>Delivery Date</Text>
							<Text style={{ fontWeight: '600' }}>{order.date}</Text>
						</View>
						<View style={orderDeliveryDestinationSectionStyle}>
							<Icon 
								name='location-pin' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
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

const styles = {
	orderTitleSectionStyle: {
		alignItems: 'center', 
		paddingTop: 20, 
		paddingBottom: 20
	},
	vendorLogoContainerStyle: {
		paddingBottom: 15 
	},
	vendorLogoImageStyle: {
		height: 100, 
		width: 100
	},
	vendorTitleStyle: {
		paddingTop: 10, 
		paddingBottom: 10
	},
	orderDeliverySectionStyle: {
		flexDirection: 'row', 
		justifyContent: 'space-around'
	},
	orderDeliveryDateSectionStyle: {
		alignItems: 'center', 
		paddingTop: 20, 
		paddingBottom: 20
	},
	orderDeliveryDestinationSectionStyle: {
		alignItems: 'center', 
		paddingTop: 20, 
		paddingBottom: 20
	}
};

export default OrderDetailsScreen;
