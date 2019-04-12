import React, { Component } from 'react';

import { 
	createBottomTabNavigator, 
	createStackNavigator, 
	createSwitchNavigator,
	createAppContainer
} from 'react-navigation';
import { Icon } from 'native-base';
import HomeScreen from './screens/HomeScreen';
import OrdersScreen from './screens/OrdersScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

class App extends Component {
	render() {
		return (
			<AppContainer />
		);
	}
}

const AuthStack = createStackNavigator({ LoginScreen, RegisterScreen });

const HomeStack = createStackNavigator({ HomeScreen });

const OrdersStack = createStackNavigator({ OrdersScreen });

const MainTabNavigator = createBottomTabNavigator({
	Home: HomeStack,
	Orders: OrdersStack
},
{
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray'
		},
		tabBarIcon: ({ focused }) => {
			const { routeName } = navigation.state;
			let iconName;
			if (routeName === 'Home') {
				iconName = `ios-star${focused ? '' : '-outline'}`;
			} else if (routeName === 'Orders') {
				iconName = `ios-star${focused ? '' : '-outline'}`;
			}
			return <Icon name={iconName} type='Ionicons' style={{ color: '#85BEEB' }} />;
		},
	})
}
);

const AppSwitchNavigator = createSwitchNavigator({
	AuthLoadingScreen: { screen: AuthLoadingScreen },
	AuthStack: { screen: AuthStack },
	Main: { screen: MainTabNavigator }
},
{
	initialRouteName: 'AuthStack'
}
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
