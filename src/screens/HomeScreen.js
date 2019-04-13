import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, H1 } from 'native-base';
import { signOut } from '../actions';
import { products } from '../data/productData';
import { LOGO } from '../images';

import HorizontalFlatList from '../components/HorizontalFlatList';
import HomeBanner from '../components/HomeBanner';
import CategoryTable from '../components/CategoryTable';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'RestoDepot'
	};

	onLogoutButtonPress() {
		this.props.signOut();
	}

	render() {
		const { titleStyle } = styles;
		return (
			<Container>
				<Content>
					<HomeBanner />
					<H1 style={titleStyle}>Categories</H1>
					<CategoryTable />
					<H1 style={titleStyle}>Best Sellers</H1>
					<HorizontalFlatList products={products} />
					<H1 style={titleStyle}>Recently Bought</H1>
					<HorizontalFlatList products={products} />
					<H1 style={titleStyle}>Best Deals</H1>
					<HorizontalFlatList products={products} />
					<Button
						onPress={this.onLogoutButtonPress.bind(this)}
						block
					>
						<Text style={{ color: 'white' }}>Logout</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

const styles = {
	titleStyle: {
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 7
	}
};

export default connect(null, { signOut })(HomeScreen);
