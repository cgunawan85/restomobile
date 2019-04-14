import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class CategoryButton extends Component {
	render() {
		const { children, style } = this.props;
		const { containerStyle, textStyle } = styles;

		return (
			<TouchableOpacity style={[containerStyle, style]}>
					<Text style={textStyle}>{children}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = {
	containerStyle: {
		backgroundColor: 'blue',
		width: '49%',
		padding: 10,
		marginBottom: 15,
		marginRight: 2,
		borderRadius: 8
	},
	textStyle: {
		color: 'white',
		textAlign: 'center'
	}
};

export default CategoryButton;
