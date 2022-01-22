import React from 'react'
import { AppRegistry } from 'react-native'
import messaging from '@react-native-firebase/messaging'
import AppContainer from './src/AppContainer'
import { name as appName } from './app.json'
import { Provider as PaperProvider } from 'react-native-paper'
import theme from './src/theme'

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
	console.log('Message handled in the background!', remoteMessage)
})

const AppWrapper = ({ isHeadless }) => {
	if (isHeadless) {
		console.log('printing isHeadless', isHeadless)
		// App has been launched in the background by iOS, ignore
		return null
	}

	return (
		<PaperProvider theme={theme}>
			<AppContainer />
		</PaperProvider>
	)
}

AppRegistry.registerComponent(appName, () => AppWrapper)
