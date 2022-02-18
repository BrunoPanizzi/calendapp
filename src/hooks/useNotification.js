import { scheduleNotificationAsync } from 'expo-notifications'

export default function useNotification({ title, body, time }) {
  scheduleNotificationAsync({
    content: {
      title,
      body
    },
    trigger: time
  })
}
