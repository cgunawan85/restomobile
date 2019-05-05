import React, { Component } from 'react';
import { 
	Container, 
	Content, 
	Header, 
	Left, 
	Right, 
	Button, 
	Icon, 
	Body, 
	Title 
} from 'native-base';
import ReviewsList from '../components/ReviewsList';

class ReviewsScreen extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button 
							transparent
							onPress={() => this.props.navigation.goBack()}
						>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title style={{ color: '#2077be' }}>Reviews</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<ReviewsList />
				</Content>
			</Container>
		);
	}
}

export default ReviewsScreen;
