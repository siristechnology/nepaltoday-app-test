import { DefaultTheme, DarkTheme } from 'react-native-paper'

const defaultTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#fcfcfc',
		secondary: '#212121',
		header: '#EEEEEE',
		divider: '#EEEEEE',
		lightBackground: '#F5F5F5',
	},
}

const darkTheme = {
	...DarkTheme,
	dark: true,
	borderWidth: 0.2,
	colors: {
		...DarkTheme.colors,
		primary: '#121212',
		secondary: '#F5F5F5',
		header: '#424242',
		divider: '#616161',
		lightBackground: '#212121',
	},
}

export default { defaultTheme, darkTheme }
