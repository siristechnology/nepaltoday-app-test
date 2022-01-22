import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Home, Radio } from './screens/Index'

const Tab = createMaterialBottomTabNavigator()

export const BottomTabs = () => {
	return (
		<>
			<Tab.Navigator>
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
		</>
	)
}
