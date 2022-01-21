import React from 'react'
import { Button } from 'react-native-paper'

interface props {
	navigation: any
	route: { params: any }
}

const MainScreen = ({ navigation }: props) => {
	return (
		<Button
			onPress={() => {
				navigation.navigate('ArticleDetail', { article: 'art' })
			}}
			icon="camera"
			mode="contained"
		>
			go to detail
		</Button>
	)
}

export default MainScreen
