import React, { Component } from 'react';
import { View } from 'react-native';
import CategoryButton from './CategoryButton';

class CategoryTable extends Component {
	render() {
		const { containerStyle } = styles;
		return (
			<View style={containerStyle}>
				<CategoryButton style={{ backgroundColor: 'orange' }}>Food & Beverages</CategoryButton>
				<CategoryButton style={{ backgroundColor: 'green' }}>Equipment</CategoryButton>
				<CategoryButton style={{ backgroundColor: 'purple' }}>Cleaning Supplies</CategoryButton>
				<CategoryButton style={{ backgroundColor: 'brown' }}>Coffee</CategoryButton>
				<CategoryButton style={{ backgroundColor: 'gray' }}>Disposables</CategoryButton>
				<CategoryButton>Test Category</CategoryButton>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		paddingRight: 5,
		paddingLeft: 5,
		paddingBottom: 10
	},
};

export default CategoryTable;
