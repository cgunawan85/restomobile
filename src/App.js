import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { 
	createBottomTabNavigator, 
	createStackNavigator, 
	createSwitchNavigator,
	createAppContainer
} from 'react-navigation';
import { Root, Icon } from 'native-base';
import reducers from './reducers';

import HomeScreen from './screens/HomeScreen';
import OrdersScreen from './screens/OrdersScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

import NavigationService from './services/NavigationService';

class App extends Component {
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Root>
					<AppContainer 
						ref={navigatorRef => {
							NavigationService.setTopLevelNavigator(navigatorRef);
					}}
					/>
				</Root>
			</Provider>
		);
	}
}

const AuthStack = createStackNavigator({ LoginScreen, RegisterScreen });

const HomeStack = createStackNavigator({ HomeScreen, ProductDetailScreen });

const OrdersStack = createStackNavigator({ OrdersScreen });

const ProfileStack = createStackNavigator({ ProfileScreen });

const CartStack = createStackNavigator({ CartScreen });

const MainTabNavigator = createBottomTabNavigator({
	Home: HomeStack,
	Orders: OrdersStack,
	Cart: CartStack,
	Profile: ProfileStack,
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
			} else if (routeName === 'Profile') {
				iconName = `ios-star${focused ? '' : '-outline'}`;
			} else if (routeName === 'Cart') {
				iconName = `ios-star${focused ? '' : '-outline'}`;
			}
			return (
				<Icon 
					name={iconName} 
					type='Ionicons' 
					style={{ paddingTop: 5, color: '#85BEEB', fontSize: 24 }} 
				/>
			);
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
	initialRouteName: 'AuthLoadingScreen'
}
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
