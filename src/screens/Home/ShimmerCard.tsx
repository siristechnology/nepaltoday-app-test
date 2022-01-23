import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Card } from 'react-native-paper'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import tw from 'tailwind-react-native-classnames'

const ShimmerCard = () => {
	return (
		<View>
			{[1, 2].map((element, index) => (
				<View style={tw`pt-2 pb-2 pl-4 pr-4`} key={index}>
					<Card style={tw`rounded-lg`}>
						<View>
							<ShimmerPlaceholder LinearGradient={LinearGradient} style={tw`rounded-lg h-48 w-full`} />
							<View style={tw`ml-4 -mt-6`}>
								<ShimmerPlaceholder
									LinearGradient={LinearGradient}
									style={tw`m-2 h-10 w-10 rounded-full border-2 border-white items-center content-center overflow-hidden`}
								/>
							</View>
							<Card.Content>
								<ShimmerPlaceholder LinearGradient={LinearGradient} style={tw`m-2 w-full`} />
								<ShimmerPlaceholder LinearGradient={LinearGradient} style={tw`m-2 w-full`} />
							</Card.Content>
						</View>
					</Card>
				</View>
			))}
		</View>
	)
}

export default ShimmerCard
