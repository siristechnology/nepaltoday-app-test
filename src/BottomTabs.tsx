import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import color from 'color'
import { Home, Categories, Radio } from './screens/Index'
import { useTheme } from 'react-native-paper'

const Tab = createMaterialBottomTabNavigator()

export const BottomTabs = () => {
	const theme = useTheme()

	return (
		<Tab.Navigator
			labeled={false}
			activeColor={theme.colors.secondary}
			inactiveColor={color(theme.colors.text).alpha(0.4).rgb().string()}
			sceneAnimationEnabled={false}
			barStyle={{
				backgroundColor: theme.colors.surface,
				borderTopWidth: theme.borderWidth,
				borderTopColor: theme.colors.disabled,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-outline" color={color} size={26} />,
				}}
			/>
			<Tab.Screen
				name="Categories"
				component={Categories}
				options={{
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="newspaper-variant-multiple-outline" color={color} size={26} />,
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={Radio}
				options={{
					tabBarLabel: 'Updates',
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="skull" color={color} size={26} />,
				}}
			/>
		</Tab.Navigator>
	)
}
