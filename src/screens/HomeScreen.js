import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, H1 } from 'native-base';
import { signOut } from '../actions';
import { products } from '../data/productData';

import HorizontalFlatList from '../components/HorizontalFlatList';
import HomeBanner from '../components/HomeBanner';
import CategoryTable from '../components/CategoryTable';
import SearchBar from '../components/SearchBar';
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
					<HomeBanner />
					<Seperator />
					<H1 style={titleStyle}>Categories</H1>
					<CategoryTable />
					<Seperator />
					<H1 style={titleStyle}>Best Sellers</H1>
					<HorizontalFlatList products={products} />
					<Seperator />
					<H1 style={titleStyle}>Recently Bought</H1>
					<HorizontalFlatList products={products} />
					<Seperator />
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
		paddingTop: 20,
		paddingBottom: 15,
		paddingLeft: 7
	}
};

export default connect(null, { signOut })(HomeScreen);
