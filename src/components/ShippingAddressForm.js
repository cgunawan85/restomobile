import React, { Component } from 'react';
import { View } from 'react-native';
import { Form, Item, Label, Input, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { shippingAddressFormUpdate } from '../actions';

class ShippingAddressForm extends Component {
	render() {
		console.log(this.props.province);
		return (
			<Form>
				<View style={{ height: 200, justifyContent: 'center' }}>
					<Button bordered style={{ alignSelf: 'center' }}>
						<Text>Pin Address</Text>
					</Button>
					<Text note style={{ textAlign: 'center', paddingTop: 8 }}>
						This will help us easily find your delivery address
					</Text>
				</View>
				<Item stackedLabel>
					<Label>Title</Label>
					<Input
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'title', value: text })
						}
						value={this.props.title}
					/>
				</Item>
				<Item stackedLabel>
					<Label>Address</Label>
					<Input
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'address', value: text })
						}
						value={this.props.address}
					/>
				</Item>
				<Item stackedLabel>
					<Label>Province</Label>
					<Input 
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'province', value: text })
						}
						value={this.props.province}
					/>
				</Item>
				<Item stackedLabel>
					<Label>City</Label>
					<Input 
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'city', value: text })
						}
						value={this.props.city}
					/>
				</Item>
				<Item stackedLabel>
					<Label>Postal Code</Label>
					<Input 
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'postal_code', value: text })
						}
						value={this.props.postal_code}
					/>
				</Item>
				<Item stackedLabel>
					<Label>PIC</Label>
					<Input 
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ prop: 'pic', value: text })
						}
						value={this.props.pic}
					/>
				</Item>
				<Item stackedLabel>
					<Label>PIC Phone Number</Label>
					<Input 
						onChangeText={
							text => this.props.shippingAddressFormUpdate({ 
								prop: 'pic_phone_number', 
								value: text 
							})
						}
						value={this.props.pic_phone_number}
					/>
				</Item>
			</Form>
		);
	}
}

const mapStateToProps = (state) => {
	const { 
		title, 
		address, 
		province, 
		city, 
		postal_code, 
		pic, 
		pic_phone_number 
	} = state.shippingAddressForm;
	return { title, address, province, city, postal_code, pic, pic_phone_number };
};

export default connect(mapStateToProps, { shippingAddressFormUpdate })(ShippingAddressForm);
