import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './MainScreen'
import ArticleDetailScreen from '../Common/ArticleDetail/Index'

const Stack = createNativeStackNavigator()

const Home = () => {
	return (
		<Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Spanilla' }} />
			<Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} options={{ title: '' }} />
		</Stack.Navigator>
	)
}

export default Home
