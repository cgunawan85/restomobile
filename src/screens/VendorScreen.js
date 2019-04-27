import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { 
	Card, 
	Container, 
	Content,
	H2,
	Text,
	Icon,
	Button 
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { products } from '../data/productData';
import ProductList from '../components/ProductList';
import Seperator from '../components/common/Seperator';
import { LOADING_IMAGE } from '../images/';

class VendorScreen extends Component {
	static navigationOptions = {
		title: 'Vendor Information'
	};

	render() {
		const vendor = this.props.navigation.getParam('vendor');
		const { 
			linearGradientStyle, 
			vendorLogoStyle, 
			vendorNameTitleContainerStyle,
			vendorNameTitleTextStyle,
			joinDateTextStyle,
			messageVendorButtonStyle,
			descriptionTextStyle,
			vendorInfoSectionStyle,
			vendorInfoSectionItemStyle,
			vendorInfoTitleStyle,
			vendorInfoContentStyle,
			titleStyle
		} = styles;

		return (
			<Container>
				<Content style={{ flex: 1 }}>
					<LinearGradient style={linearGradientStyle} colors={['#2980b9', '#2c3e50']} />
					<Image 
						source={{ uri: vendor.logo }} 
						style={vendorLogoStyle}
						defaultSource={LOADING_IMAGE} 
					/>
					<Card transparent>
						<View style={vendorNameTitleContainerStyle}>
							<H2 style={vendorNameTitleTextStyle}>{vendor.name}</H2>
							<Text style={joinDateTextStyle}>{`Joined on ${vendor.join_date}`}</Text>
						</View>
						<Button bordered style={messageVendorButtonStyle}>
							<Text>Message Vendor</Text>
						</Button>
						<Seperator />
						<Text style={descriptionTextStyle}>{vendor.description}</Text>
					</Card>
					<Seperator />
					<Card transparent style={vendorInfoSectionStyle}>
						<View style={vendorInfoSectionItemStyle}>
							<Icon 
								name='basket' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={vendorInfoTitleStyle}>Products</Text>
							<Text style={vendorInfoContentStyle}>{vendor.products}</Text>
						</View>
						<View style={vendorInfoSectionItemStyle}>
							<Icon 
								name='layers' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={vendorInfoTitleStyle}>Transactions</Text>
							<Text style={vendorInfoContentStyle}>{vendor.transactions}</Text>
						</View>
						<View style={vendorInfoSectionItemStyle}>
							<Icon 
								name='badge' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={vendorInfoTitleStyle}>Rating</Text>
							<Text style={vendorInfoContentStyle}>{vendor.rating}</Text>
						</View>
					</Card>
					<Seperator />
					<H2 style={titleStyle}>Products</H2>
					<ProductList products={products} />
				</Content>
			</Container>
		);
	}
}

const styles = {
	linearGradientStyle: {
		height: Dimensions.get('window').height / 3,
	},
	vendorLogoStyle: {
		position: 'absolute',
		marginTop: Dimensions.get('window').height / 4,
		alignSelf: 'center',
		width: 140,	
		height: 140
	},
	vendorNameTitleContainerStyle: {
		paddingTop: '20%',
		paddingBottom: '5%'
	},
	vendorNameTitleTextStyle: {
		textAlign: 'center'
	},
	joinDateTextStyle: {
		color: 'gray', 
		fontSize: 12, 
		textAlign: 'center'
	},
	messageVendorButtonStyle: {
		alignSelf: 'center',
		marginBottom: 20
	},
	descriptionTextStyle: {
		fontSize: 14, 
		textAlign: 'center',
		paddingVertical: 15,
		paddingHorizontal: 15
	},
	vendorInfoSectionStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	vendorInfoSectionItemStyle: {
		alignItems: 'center',
		paddingVertical: 20
	},
	vendorInfoTitleStyle: {
		color: '#444444', 
		fontSize: 14
	},
	vendorInfoContentStyle: {
		fontWeight: '600', 
		fontSize: 14
	},
	titleStyle: {
		paddingTop: 20,
		paddingBottom: 15,
		paddingLeft: 7,
		fontSize: 24,
		fontWeight: 'bold'
	}	
};

export default VendorScreen;
