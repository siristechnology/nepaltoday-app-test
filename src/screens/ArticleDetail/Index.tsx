import React, { useCallback, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { Avatar, Button, Card, Paragraph } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { getRelativeTime } from '../Common/ArticleListItem'

const ArticleDetail = (props) => {
	const { navigation } = props
	const { article } = props.route.params
	const { colors } = useTheme()

	useEffect(() => {
		navigation.setOptions({
			title: article.source.name,
		})
	}, [article.source.name, navigation])

	const handleLinkClick = useCallback(() => {
		navigation.navigate('ArticleWeb', { article })
	}, [article, navigation])

	return (
		<SafeAreaView>
			<ScrollView>
				<Card>
					<Card.Cover source={{ uri: article.imageLink }} />
					<View style={tw`ml-4 -mt-4`}>
						<Avatar.Image
							size={40}
							source={{ uri: article.source.logoLink }}
							style={tw`border-2 border-white items-center content-center overflow-hidden`}
						/>
					</View>
					<Card.Title
						title={article.title}
						subtitle={getRelativeTime(article.modifiedDate || article.createdDate)}
						titleNumberOfLines={6}
						style={tw`mt-1 mb-1`}
					/>
					<Card.Content>
						<View>
							<Paragraph style={tw`mb-3`}>{article.content}</Paragraph>
						</View>
					</Card.Content>
					<Card.Actions>
						<Button onPress={handleLinkClick} color={colors.notification}>
							{'Read Original Source'}
						</Button>
					</Card.Actions>
				</Card>
			</ScrollView>
		</SafeAreaView>
	)
}

export default ArticleDetail
