import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import ArticleListItem from '../Common/ArticleListItem'

const ArticleList = ({ articles, refetch, navigation }) => {
	const [refreshing, setRefreshing] = useState(false)

	const handleRefresh = useCallback(() => {
		setRefreshing(true)
		refetch().then(() => setRefreshing(false))
	}, [])

	const renderItem = useCallback((info) => {
		return <ArticleListItem navigation={navigation} article={info.item} />
	}, [])

	return <FlatList data={articles} renderItem={renderItem} keyExtractor={(item) => item._id} refreshing={refreshing} onRefresh={handleRefresh} />
}

export default ArticleList
