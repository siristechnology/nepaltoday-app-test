import { useLazyQuery, useQuery } from '@apollo/client'
import { firebase } from '@react-native-firebase/messaging'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import ArticleListItem from '../Common/ArticleListItem'
import { GET_ARTICLES_QUERY } from './GET_ARTICLES_QUERY'
import ShimmerCard from './ShimmerCard'

interface props {
	navigation: any
	route: { params: any }
}

const Home = ({ navigation }: props) => {
	const [refreshing, setRefreshing] = useState(false)
	const { loading, error, refetch, data } = useQuery(GET_ARTICLES_QUERY)

	const articles = data?.getArticles

	const renderItem = useCallback((info) => {
		return <ArticleListItem navigation={navigation} article={info.item} />
	}, [])

	const handleRefresh = useCallback(() => {
		setRefreshing(true)
		refetch().then(() => setRefreshing(false))
	}, [])

	return (
		<>
			{loading && <ShimmerCard />}
			{!loading && !error && articles && (
				<FlatList
					data={articles}
					renderItem={renderItem}
					keyExtractor={(item) => item._id}
					refreshing={refreshing}
					onRefresh={handleRefresh}
				/>
			)}
		</>
	)
}

export default Home
