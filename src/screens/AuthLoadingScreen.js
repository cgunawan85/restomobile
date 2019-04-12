import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View
} from 'react-native';
import firebase from 'firebase/app';

require('firebase/auth');

class AuthLoadingScreen extends Component {
	componentDidMount() {
		const config = {
			apiKey: 'AIzaSyCLhh7KQQQ6MRTWY1YM9uMADxYTdOX7gXA',
			authDomain: 'restomobile-95d5b.firebaseapp.com',
			databaseURL: 'https://restomobile-95d5b.firebaseio.com',
			projectId: 'restomobile-95d5b',
			storageBucket: 'restomobile-95d5b.appspot.com',
			messagingSenderId: '819764367913'
		};
		firebase.initializeApp(config);
		firebase.auth().onAuthStateChanged((user) => { 
			this.props.navigation.navigate(user ? 'Main' : 'AuthStack');
		});
	}

	render() {
		return (
			<View style={styles.activityIndicatorContainerStyle}>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
			);
	}
}

const styles = {
	activityIndicatorContainerStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
};

export default AuthLoadingScreen;
