import React, { Component } from 'react';
import { View } from 'react-native';
import { 
	Text,
	CardItem,
	Form, 
	Picker, 
	Icon,
	StyleProvider, 
	getTheme 
} from 'native-base';

class ShippingMethodPicker extends Component {
	render() {
		const { containerStyle, shippingMethodsTextContainerStyle, pickerTextStyle } = styles;
		return (
			<CardItem bordered>
				<View style={containerStyle}>
					<View style={shippingMethodsTextContainerStyle}>
						<StyleProvider style={getTheme({ iconFamily: 'MaterialCommunityIcons' })}>
							<Icon 
								name='truck'
								style={{ fontSize: 16 }}
							/>
						</StyleProvider>
						<Text style={{ fontSize: 14 }}>Shipping Method</Text>
					</View>

					<View style={{ flex: 1 }}>
						<Form>
							<Picker
								mode="dropdown"
								note
								selectedValue={'key0'}
								textStyle={pickerTextStyle}
							>
								<Picker.Item label="Go-Jek Instant" value="key0" />
								<Picker.Item label="Go-Jek Same Day" value="key1" />
								<Picker.Item label="Ninja Van" value="key2" />
							</Picker>
						</Form>
					</View>
				</View>
			</CardItem>
		);
	}
}

const styles = {
	containerStyle: {
		flexDirection: 'row'
	},
	shippingMethodsTextContainerStyle: {
		flexDirection: 'row', 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
	pickerTextStyle: {
		fontSize: 14, 
		flexShrink: 1, 
		textAlign: 'right'
	}
};

export default ShippingMethodPicker;
