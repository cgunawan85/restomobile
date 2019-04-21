import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { 
	Card, 
	Container, 
	Content,
	Thumbnail,
	H2,
	Text,
	Icon,
	Button 
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { products } from '../data/productData';
import ProductList from '../components/ProductList';

class VendorScreen extends Component {
	static navigationOptions = {
		title: 'Vendor Information'
	};

	render() {
		const product = this.props.navigation.getParam('product');
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
				<Content padder style={{ flex: 1 }}>
					<LinearGradient style={linearGradientStyle} colors={['red', 'blue']}>
						<Thumbnail 
							square 
							large 
							source={{ uri: product.vendor_logo }} 
							style={vendorLogoStyle} 
						/>
					</LinearGradient>
					<Card transparent>
						<View style={vendorNameTitleContainerStyle}>
							<H2 style={vendorNameTitleTextStyle}>{product.vendor}</H2>
							<Text style={joinDateTextStyle}>Joined on January 2001</Text>
						</View>
						<Button bordered style={messageVendorButtonStyle}>
							<Text>Message Vendor</Text>
						</Button>
						<Text style={descriptionTextStyle}>{product.vendor_description}</Text>
					</Card>
					<Card transparent style={vendorInfoSectionStyle}>
						<View style={vendorInfoSectionItemStyle}>
							<Icon 
								name='paper-plane' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={vendorInfoTitleStyle}>Products</Text>
							<Text style={vendorInfoContentStyle}>200</Text>
						</View>
						<View style={vendorInfoSectionItemStyle}>
							<Icon 
								name='paper-plane' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={vendorInfoTitleStyle}>Transactions</Text>
							<Text style={vendorInfoContentStyle}>1001</Text>
						</View>
						<View style={vendorInfoSectionItemStyle}>
							<Icon 
								name='paper-plane' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={vendorInfoTitleStyle}>Rating</Text>
							<Text style={vendorInfoContentStyle}>85%</Text>
						</View>
					</Card>
					<H2 style={titleStyle}>Products</H2>
					<ProductList products={products} />
				</Content>
			</Container>
		);
	}
}

const styles = {
	linearGradientStyle: {
		height: Dimensions.get('window').height / 3
	},
	vendorLogoStyle: {
		position: 'absolute',
		alignSelf: 'center',
		top: '50%'
	},
	vendorNameTitleContainerStyle: {
		paddingTop: '5%',
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
		alignSelf: 'center'
	},
	descriptionTextStyle: {
		fontSize: 14, 
		textAlign: 'center',
		paddingTop: 15
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
