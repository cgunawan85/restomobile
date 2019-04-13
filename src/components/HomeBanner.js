import React from 'react';
import { View, Image } from 'react-native';
import { BANNER_SHIPPING } from '../images/';

function HomeBanner() {
	const { imageStyle } = styles;
	return (
		<View>
			<Image
				source={BANNER_SHIPPING}
				style={imageStyle}
				resizeMode='cover' 
			/>
		</View>
	);
}

const styles = {
	imageStyle: {
		height: 170,
		width: null
	}
};

export default HomeBanner;
