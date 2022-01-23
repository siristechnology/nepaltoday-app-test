import gql from 'graphql-tag'

export const GET_CATEGORIES_QUERY = gql`
	query headlineScreenQuery {
		getArticles {
			_id
			title
			shortDescription
			content
			link
			imageLink
			createdDate
			modifiedDate
			category
			tags
			totalWeight
			source {
				name
				logoLink
			}
		}
	}
`
