import { Notification, Notifications, Registered, RegistrationError } from 'react-native-notifications'

const NotificationService = {
	register: () => {
		Notifications.registerRemoteNotifications()

		Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
			console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`)
			completion({ alert: false, sound: false, badge: false })
		})

		Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
			console.log(`Notification opened: ${notification.payload}`)
			completion()
		})

		// Request permissions on iOS, refresh token on Android
		// Notifications.registerRemoteNotifications()

		Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {
			// TODO: Send the token to my server so it could send back push notifications...
			console.log('Device Token Received', event.deviceToken)
		})
		Notifications.events().registerRemoteNotificationsRegistrationFailed((event: RegistrationError) => {
			console.error(event)
		})

		Notifications.events().registerNotificationReceivedForeground(
			(notification: Notification, completion: (response: NotificationCompletion) => void) => {
				console.log('Notification Received - Foreground', notification.payload)

				// Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
				completion({ alert: true, sound: true, badge: false })
			},
		)

		Notifications.events().registerNotificationOpened(
			(notification: Notification, completion: () => void, action: NotificationActionResponse) => {
				console.log('Notification opened by device user', notification.payload)
				console.log('printing action', action)
				// console.log(`Notification opened with an action identifier: ${action.identifier} and response text: ${action.text}`)
				completion()
			},
		)

		Notifications.events().registerNotificationReceivedBackground(
			(notification: Notification, completion: (response: NotificationCompletion) => void) => {
				console.log('Notification Received - Background', notification.payload)

				// Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
				completion({ alert: true, sound: true, badge: false })
			},
		)
	},
}

export default NotificationService
