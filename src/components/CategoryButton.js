import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class CategoryButton extends Component {
	render() {
		const { children, style } = this.props;
		const { linearGradientStyle, containerStyle, textStyle } = styles;
		return (
			<TouchableOpacity style={[containerStyle, style]}>
				<LinearGradient 
					style={linearGradientStyle}
					colors={this.props.buttonColors}
				>
					<Text style={textStyle}>{children}</Text>
				</LinearGradient>
			</TouchableOpacity>
		);
	}
}

const styles = {
	linearGradientStyle: {
		padding: 10
	},
	containerStyle: {
		backgroundColor: 'blue',
		width: '49%',
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
