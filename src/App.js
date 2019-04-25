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
import { Root, Icon, StyleProvider, getTheme } from 'native-base';
import reducers from './reducers';

import HomeScreen from './screens/HomeScreen';
import OrdersScreen from './screens/OrdersScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SettingsScreen from './screens/SettingsScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import EditShippingAddressScreen from './screens/EditShippingAddressScreen';
import AddShippingAddressScreen from './screens/AddShippingAddressScreen';
import CartScreen from './screens/CartScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';
import VendorScreen from './screens/VendorScreen';
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

const HomeStack = createStackNavigator({ HomeScreen, ProductDetailScreen, VendorScreen });

const OrdersStack = createStackNavigator({ OrdersScreen, OrderDetailsScreen });

const SettingsStack = createStackNavigator({ 
	SettingsScreen, 
	ShippingAddressScreen,
	EditShippingAddressScreen, 
	AddShippingAddressScreen 
});

const CartStack = createStackNavigator({ CartScreen });

const MainTabNavigator = createBottomTabNavigator({
	Home: HomeStack,
	Orders: OrdersStack,
	Cart: CartStack,
	Settings: SettingsStack,
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
				iconName = `home${focused ? '' : '-outline'}`;
			} else if (routeName === 'Orders') {
				iconName = `file${focused ? '' : '-outline'}`;
			} else if (routeName === 'Settings') {
				iconName = `settings${focused ? '' : '-outline'}`;
			} else if (routeName === 'Cart') {
				iconName = `cart${focused ? '' : '-outline'}`;
			}
			return (
				<StyleProvider style={getTheme({ iconFamily: 'MaterialCommunityIcons' })}>
					<Icon 
						name={iconName}
						style={{ fontSize: 20 }}
					/>
				</StyleProvider>
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
