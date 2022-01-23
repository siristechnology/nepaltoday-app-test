import { ApolloClient, InMemoryCache } from '@apollo/client'
import { NEPALTODAY_SERVER } from 'react-native-dotenv'

const client = new ApolloClient({
	uri: NEPALTODAY_SERVER,
	cache: new InMemoryCache(),
})

export default client
