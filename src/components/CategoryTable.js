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
				<CategoryButton>Cleaning Supplies</CategoryButton>
				<CategoryButton>Coffee</CategoryButton>
				<CategoryButton>Disposables</CategoryButton>
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
		paddingLeft: 5
	},
};

export default CategoryTable;
