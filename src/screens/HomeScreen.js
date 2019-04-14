import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button } from 'native-base';
import { signOut } from '../actions';

import { products } from '../data/productData';
import HorizontalFlatList from '../components/HorizontalFlatList';
import BannerCarousel from '../components/BannerCarousel';
import CategoryTable from '../components/CategoryTable';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import Seperator from '../components/common/Seperator';

class HomeScreen extends Component {
	static navigationOptions = {
		header: null,
		title: 'RestoDepot'
	};

	onLogoutButtonPress() {
		this.props.signOut();
	}

	render() {
		const { titleStyle } = styles;
		return (
			<Container>
				<SearchBar />
				<Content>
					<BannerCarousel />
					<Seperator />
					<Text style={titleStyle}>Categories</Text>
					<CategoryTable />
					<Seperator />
					<Text style={titleStyle}>Best Sellers</Text>
					<HorizontalFlatList 
						products={products} 
						navigation={this.props.navigation} 
					/>
					<Seperator />
					<Text style={titleStyle}>Recently Bought</Text>
					<HorizontalFlatList products={products} />
					<Seperator />
					<Text style={titleStyle}>Best Deals</Text>
					<HorizontalFlatList products={products} />
					<Seperator />
					<Text style={titleStyle}>Products</Text>
					<ProductList products={products} />
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
		paddingTop: 20,
		paddingBottom: 15,
		paddingLeft: 7,
		fontSize: 24,
		fontWeight: 'bold'
	}
};

export default connect(null, { signOut })(HomeScreen);
