import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, StyleProvider, getTheme } from 'native-base';

class SpecificationsSegmentContent extends Component {
	//2077be RestoDepot Blue
	render() {
		const { product } = this.props;
		return (
			<View>
				<View style={{ flexDirection: 'row', marginBottom: 5 }}>
					<StyleProvider style={getTheme({ iconFamily: 'MaterialCommunityIcons' })}>
						<Icon 
							name="cube"
							style={{ fontSize: 16 }} 
						/>
					</StyleProvider>
					<Text>
						{ `${product.length}cm (L) x ${product.width}cm (W) x ${product.height}cm (H)` }
					</Text>
				</View>

				<View style={{ flexDirection: 'row' }}>
					<StyleProvider style={getTheme({ iconFamily: 'MaterialCommunityIcons' })}>
						<Icon 
							name="weight"
							style={{ fontSize: 16 }} 
						/>
					</StyleProvider>
					<Text>{ `${product.weight.toLocaleString()} grams` }</Text>
				</View>
			</View>
		);
	}
}

export default SpecificationsSegmentContent;
