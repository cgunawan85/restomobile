import React, { Component } from 'react';
import { Form, Item, Label, Input } from 'native-base';

class CredentialForm extends Component {
	render() {
		const { onEmailChanged, onPasswordChanged } = this.props;
		return (
			<Form>
				<Item stackedLabel>
					<Label>Email</Label>
					<Input 
						onChangeText={(text) => onEmailChanged(text)}
					/>
				</Item>
				<Item stackedLabel>
					<Label>Password</Label>
					<Input 
						onChangeText={(text) => onPasswordChanged(text)}
					/>
				</Item>
			</Form>
		);
	}
}

export default CredentialForm;
