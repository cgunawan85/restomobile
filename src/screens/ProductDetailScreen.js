import React, { Component } from 'react';
import { View } from 'react-native';
import { 
	Container, 
	Content, 
	Text, 
	Button, 
	Segment, 
	Header, 
	Left, 
	Body, 
	Title, 
	Icon,
	Right
} from 'native-base';
import { withNavigation } from 'react-navigation';
import ProductImage from '../components/ProductImage';
import ProductTitle from '../components/ProductTitle';
import ProductVendor from '../components/ProductVendor';
import ConfirmAddToCart from '../components/ConfirmAddToCart';
import Seperator from '../components/common/Seperator';
	
class ProductDetailScreen extends Component {
	static navigationOptions = {
		title: 'Product Detail Screen',
		header: null,
	};

	constructor(props) {
		super(props);
		this.state = { 
			page: 1,
			descriptionSegmentActive: true,
			specsSegmentActive: false,
			reviewsSegmentActive: false,
			modalVisible: false
		};
	}

	onDecline() {
		this.setState({
			modalVisible: false
		});
	}

	onAccept() {
	}

	showDescription() {
		this.setState({
			page: 1,
			descriptionSegmentActive: true,
			specsSegmentActive: false,
			reviewsSegmentActive: false,
			modalVisible: false
		});
	}

	showSpecifications() {
		this.setState({
			page: 2,
			descriptionSegmentActive: false,
			specsSegmentActive: true,
			reviewsSegmentActive: false,
			modalVisible: false
		});
	}

	showReviews() {
		this.setState({
			page: 3,
			descriptionSegmentActive: false,
			specsSegmentActive: false,
			reviewsSegmentActive: true,
			modalVisible: false
		});
	}

	render() {
		const page = this.state.page;
		let segmentContent = null;
		if (page === 1) {
			segmentContent = (
				<View style={{ paddingTop: 10, paddingBottom: 20 }}>
					<Text>
						This is where description goes. This is where description goes.
						This is where description goes. This is where description goes.
						This is where description goes.
					</Text>
				</View>
			);
		} else if (page === 2) {
			segmentContent = (
				<View style={{ paddingTop: 10, paddingBottom: 20 }}>
					<Text>
						This is where the specs go! This is where the specs go!
						This is where the specs go! This is where the specs go!
						This is where the specs go! This is where the specs go!
						This is where the specs go! This is where the specs go!
					</Text>
				</View>
			);
		} else if (page === 3) {
			segmentContent = (
				<View style={{ paddingTop: 10, paddingBottom: 20 }}>
					<Text>
						This is where description goes. This is where description goes.
						This is where description goes. This is where description goes.
						This is where description goes.
					</Text>
				</View>
			);
		}

		const { navigation } = this.props;
		const product = navigation.getParam('product');
		const { addToCartButtonContainerStyle } = styles;
		
		return (
			<Container>
				<Header hasSegment style={{ height: 0 }}>
					<Left>
						<Button 
							transparent
							onPress={() => this.props.navigation.goBack()}
						>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title>Product Details</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name='menu' />
						</Button>
					</Right>
				</Header>
				<Content padder style={{ flex: 1 }}>
					<View style={{ flex: 1, paddingBottom: 40 }}>
						<ProductImage product={product} />
						<ProductTitle product={product} />
						<Seperator />
						<ProductVendor />
						<Seperator />
						
						<Segment>
							<Button 
								first 
								active={this.state.descriptionSegmentActive}
								onPress={this.showDescription.bind(this)}
							>
								<Text>Description</Text>
							</Button>
							<Button 
								active={this.state.specsSegmentActive}
								onPress={this.showSpecifications.bind(this)}
							>
								<Text>Specifications</Text>
							</Button>
							<Button 
								last active={this.state.reviewsSegmentActive}
								onPress={this.showReviews.bind(this)}
							>
								<Text>Reviews</Text>
							</Button>
						</Segment>
						
						{segmentContent}

					</View>
				</Content>
				<View style={addToCartButtonContainerStyle}>
					<Button full onPress={() => this.setState({ modalVisible: true })}>
						<Text>Add To Cart</Text>
					</Button>
				</View>
				<ConfirmAddToCart 
					modalVisible={this.state.modalVisible}
					onDecline={this.onDecline.bind(this)}
					onAccept={this.onAccept.bind(this)}
				/>
			</Container>
		);
	}
}

const styles = {
	addToCartButtonContainerStyle: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0
	}
};

export default withNavigation(ProductDetailScreen);
