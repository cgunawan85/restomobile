import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Button, Card } from 'native-base';

function ConfirmAddToCart({ modalVisible, onAccept, onDecline }) {
	const { containerStyle, textStyle, cardStyle, buttonTextStyle } = styles;

	return (
		<Modal
			visible={modalVisible}
			transparent
			animationType='slide'
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<Card style={cardStyle}>
					<Text style={textStyle}>
						How many do you want?
					</Text>
					<Button onPress={onAccept}>
						<Text style={buttonTextStyle}>Confirm</Text>
					</Button>
					<Button onPress={onDecline}>
						<Text style={buttonTextStyle}>Cancel</Text>
					</Button>
				</Card>
			</View>
		</Modal>
	);
}

const styles = {
	cardStyle: {
		justifyContent: 'center',
		backgroundColor: 'white',
		height: 500
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	},
	buttonTextStyle: {
		color: 'white'
	}
};

export default ConfirmAddToCart;
