import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import HorizontalFlatListItem from './HorizontalFlatListItem';

class HorizontalFlatList extends Component {
	renderCardItem(product) {
		return <HorizontalFlatListItem product={product.item} />;
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.props.products}
					renderItem={this.renderCardItem}
					horizontal
					keyExtractor={(product) => product.id.toString()}
					style={{ paddingBottom: 10 }}
				/>
			</View>
		);
	}
}

export default HorizontalFlatList;
