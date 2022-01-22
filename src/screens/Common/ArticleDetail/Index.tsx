import React from 'react'
import { IconButton } from 'react-native-paper'

interface props {
	navigation: any
	route: { params: any }
}

const ArticleDetail = ({ navigation }: props) => {
	return (
		<IconButton
			onPress={() => {
				navigation.navigate('Tab', { article: 'art' })
			}}
			icon="camera"
		/>
	)
}

export default ArticleDetail
