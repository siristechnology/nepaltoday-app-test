import moment from 'moment'
import React from 'react'
import { View } from 'react-native'
import { TouchableRipple, Avatar, Card, Paragraph } from 'react-native-paper'
import tw from 'tailwind-react-native-classnames'

const ArticleListItem = ({ navigation, article }) => {
	return (
		<View style={tw`pt-2 pb-2 pl-4 pr-4`}>
			<Card style={tw`rounded-lg`}>
				<TouchableRipple onPress={() => navigation.navigate('ArticleDetail', { article })} rippleColor="rgba(0, 0, 0, .32)">
					<View>
						<Card.Cover source={{ uri: article.imageLink }} style={tw`rounded-lg`} />
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
							titleNumberOfLines={4}
							style={tw`mt-1 mb-1`}
						/>
						<Card.Content>
							<Paragraph style={tw`mb-2`}>{article.content.substring(0, 100) + '...'}</Paragraph>
						</Card.Content>
					</View>
				</TouchableRipple>
			</Card>
		</View>
	)
}

export const getRelativeTime = (date) => {
	return moment(Number(date)).startOf('hour').fromNow()
}

export default ArticleListItem
