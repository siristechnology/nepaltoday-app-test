import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useQuery } from '@apollo/client'
import ArticleList from './ArticleList'
import { GET_CATEGORIES_QUERY } from './GET_CATEGORIES_QUERY'

const Tab = createMaterialTopTabNavigator()

const categoryTabs = ({ navigation }) => {
	const { loading, error, refetch, data } = useQuery(GET_CATEGORIES_QUERY)

	const articles = data?.getArticles

	const tabNames = ['news', 'entertainment', 'sports', 'cartoon', 'business', 'social', 'health', 'technology', 'share', 'agriculture']

	return (
		<Tab.Navigator>
			{tabNames.map((tabname, index) => {
				const categoryArricles = articles?.filter((a) => a.category === tabname)
				return (
					<Tab.Screen name={tabname} options={{ tabBarScrollEnabled: true, tabBarBounces: true }} key={index}>
						{() => <ArticleList articles={categoryArricles} refetch={refetch} navigation={navigation} />}
					</Tab.Screen>
				)
			})}
		</Tab.Navigator>
	)
}

export default categoryTabs
