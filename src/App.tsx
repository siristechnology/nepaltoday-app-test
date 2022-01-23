import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import messaging from '@react-native-firebase/messaging'
import auth from '@react-native-firebase/auth'
import crashlytics from '@react-native-firebase/crashlytics'
import { BottomTabs } from './BottomTabs'
import ArticleDetail from './screens/ArticleDetail/Index'
import { ActivityIndicator, Colors } from 'react-native-paper'
import ArticleWeb from './screens/ArticleDetail/ArticleWeb'

const Stack = createNativeStackNavigator()

const App = () => {
	const navigation = useNavigation()
	const [loading, setLoading] = useState(true)
	const [initialRoute, setInitialRoute] = useState('Tab')

	useEffect(() => {
		// Assume a message-notification contains a "type" property in the data payload of the screen to open
		messaging().onNotificationOpenedApp((remoteMessage) => {
			console.log('Notification caused app to open from background state:', remoteMessage.notification)
			navigation.navigate('Notifications', remoteMessage.data.type)
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

		signInAnonymously()
	}, [])

	return (
		<>
			{loading && <ActivityIndicator animating={true} color={Colors.red800} />}
			{!loading && (
				<Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Tab" component={BottomTabs} />
					<Stack.Screen name="ArticleDetail" component={ArticleDetail} options={{ title: '', headerShown: true }} />
					<Stack.Screen name="ArticleWeb" component={ArticleWeb} options={{ title: '', headerShown: true }} />
				</Stack.Navigator>
			)}
		</>
	)
}

const signInAnonymously = () => {
	return auth()
		.signInAnonymously()
		.catch((error) => {
			crashlytics().recordError(error)
		})
}

export default App
