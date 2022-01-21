import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import { Provider as PaperProvider } from 'react-native-paper'
import theme from './src/theme'

const AppWrapper = () => {
	return (
		<PaperProvider theme={theme}>
			<App />
		</PaperProvider>
	)
}

AppRegistry.registerComponent(appName, () => AppWrapper)
