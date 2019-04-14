import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';


class BannerCarousel extends Component {
	render() {
		const { containerStyle, slide1Style, slide2Style, slide3Style, textStyle } = styles;
		return (
			<Swiper 
				style={containerStyle}  
				autoplay
				autoplayTimeout={4.5}
			>
				<View style={slide1Style}>
					<Text style={textStyle}>Hello Swiper</Text>
				</View>
				<View style={slide2Style}>
					<Text style={textStyle}>Beautiful</Text>
				</View>
				<View style={slide3Style}>
					<Text style={textStyle}>And simple</Text>
				</View>
			</Swiper>
	);
  }
}

const styles = {
	containerStyle: {
		height: 200
	},
	slide1Style: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
	},
	slide2Style: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5',
	},
	slide3Style: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9',
	},
	textStyle: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	}
};

export default BannerCarousel;
