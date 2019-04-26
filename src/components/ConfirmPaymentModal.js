import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Button, Card } from 'native-base';

function ConfirmPaymentModal({ modalVisible, onAccept, onDecline }) {
	const { 
		containerStyle, 
		textStyle, 
		cardStyle,
		buttonContainerStyle,
		buttonStyle, 
		buttonTextStyle 
	} = styles;

	return (
		<Modal
			visible={modalVisible}
			transparent
			animationType='slide'
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<Card style={cardStyle}>
					<Text style={textStyle}>How would you like to pay?</Text>
					<View style={buttonContainerStyle}>
						<Button 
							bordered 
							danger 
							style={buttonStyle} 
							onPress={onDecline}
						>
							<Text style={{ color: 'red' }}>Cancel</Text>
						</Button>
						<Button
							success 
							style={buttonStyle} 
							onPress={onAccept}
						>
							<Text style={buttonTextStyle}>Confirm</Text>
						</Button>
					</View>
				</Card>
			</View>
		</Modal>
	);
}

const styles = {
	cardStyle: {
		backgroundColor: 'white',
		flex: 0.3,
	},
	textStyle: {
		fontSize: 18,
		textAlign: 'center',
		paddingTop: 20,
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	},
	buttonContainerStyle: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around'
	},
	buttonStyle: {
		alignSelf: 'center',
		paddingRight: 15,
		paddingLeft: 15
	},
	buttonTextStyle: {
		color: 'white'
	}
};

export default ConfirmPaymentModal;
