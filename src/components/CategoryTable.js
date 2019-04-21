import React, { Component } from 'react';
import { View } from 'react-native';
import CategoryButton from './CategoryButton';

class CategoryTable extends Component {
	render() {
		const { containerStyle } = styles;
		return (
			<View style={containerStyle}>
				<CategoryButton style={{ backgroundColor: 'orange' }} buttonColors={['#4c669f', '#3b5998', '#192f6a']}>Food & Beverages</CategoryButton>
				<CategoryButton style={{ backgroundColor: 'green' }} buttonColors={['#4c669f', '#3b5998', '#192f6a']}>Equipment</CategoryButton>
				<CategoryButton style={{ backgroundColor: 'purple' }} buttonColors={['#4c669f', '#3b5998', '#192f6a']}>Cleaning Supplies</CategoryButton>
				<CategoryButton style={{ backgroundColor: 'brown' }} buttonColors={['#4c669f', '#3b5998', '#192f6a']}>Coffee</CategoryButton>
				<CategoryButton style={{ backgroundColor: 'gray' }} buttonColors={['#4c669f', '#3b5998', '#192f6a']}>Disposables</CategoryButton>
				<CategoryButton buttonColors={['#4c669f', '#3b5998', '#192f6a']}>Test Category</CategoryButton>
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
