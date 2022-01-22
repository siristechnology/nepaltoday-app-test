import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Home, Radio } from './screens/Index'
import { useNavigation } from '@react-navigation/native'
import messaging from '@react-native-firebase/messaging'
import { Tab } from './App'

export const BottomTabs = () => {
	const navigation = useNavigation()
	const [loading, setLoading] = useState(true)
	const [initialRoute, setInitialRoute] = useState('Home')

	useEffect(() => {
		// Assume a message-notification contains a "type" property in the data payload of the screen to open
		messaging().onNotificationOpenedApp((remoteMessage) => {
			console.log('Notification caused app to open from background state:', remoteMessage.notification)
			navigation.navigate('ArticleDetail', remoteMessage.data.type)
		})

		// Check whether an initial notification is available
		messaging()
			.getInitialNotification()
			.then((remoteMessage) => {
				if (remoteMessage) {
					console.log('Notification caused app to open from quit state:', remoteMessage.notification)
					setInitialRoute('ArticleDetail')
				}
				setLoading(false)
			})
	}, [])

	console.log('printing initialRoute', initialRoute)

	return (
		<Tab.Navigator initialRouteName={initialRoute}>
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
