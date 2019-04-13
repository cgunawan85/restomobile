import React, { Component } from 'react';
import { Header, Item, Icon, Input, Text, Button } from 'native-base';

class SearchBar extends Component {
	render() {
		return (
			<Header searchBar rounded>	
				<Item>
					<Icon name="ios-search" />
					<Input placeholder="Search" />
				</Item>
				<Button transparent>
					<Text>Search</Text>
				</Button>
			</Header>
        );
    }
}

export default SearchBar;
