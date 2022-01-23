import React, { useEffect } from 'react'
import { WebView } from 'react-native-webview'
import { ActivityIndicator } from 'react-native-paper'
import tw from 'tailwind-react-native-classnames'

const ArticleWeb = (props) => {
	const { navigation } = props
	const { article } = props.route.params

	useEffect(() => {
		navigation.setOptions({
			title: article.source.name,
		})
	}, [article.source.name, navigation])

	return <WebView renderLoading={() => <ActivityIndicator style={tw`flex-1 items-center`} />} startInLoadingState source={{ uri: article.url }} />
}

export default ArticleWeb
