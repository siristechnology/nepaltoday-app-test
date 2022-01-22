import { firebase } from '@react-native-firebase/messaging'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

interface props {
	navigation: any
	route: { params: any }
}

const MainScreen = ({ navigation }: props) => {
	const [text, setText] = useState('')

	useEffect(() => {
		firebase
			.messaging()
			.getToken()
			.then((token) => {
				setText(token)
			})
		//
	}, [])

	return (
		<>
			<Button
				onPress={() => {
					navigation.navigate('ArticleDetail', { article: 'art' })
				}}
				icon="camera"
				mode="contained"
			>
				go to detail
			</Button>
			<TextInput label="Token" value={text} onChangeText={(txt) => setText(txt)} multiline={true} />
		</>
	)
}

export default MainScreen
