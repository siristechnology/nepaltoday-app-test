import React, { useEffect } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Home, Radio } from './screens/Index'
import { NavigationContainer } from '@react-navigation/native'
import NotificationService from './NotificationService'

const Tab = createMaterialBottomTabNavigator()

const BottomTabs = () => {
	return (
		<Tab.Navigator initialRouteName="Feed">
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={Radio}
				options={{
					tabBarLabel: 'Updates',
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" color={color} size={26} />,
				}}
			/>
		</Tab.Navigator>
	)
}

const App = () => {
	useEffect(() => {
		NotificationService.register()
		console.log('printing NotificationService.register', NotificationService.register)
	}, [])

	return (
		<NavigationContainer>
			<BottomTabs />
		</NavigationContainer>
	)
}

export default App
