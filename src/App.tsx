import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabs } from './BottomTabs'

export const Tab = createMaterialBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<BottomTabs />
		</NavigationContainer>
	)
}

export default App
