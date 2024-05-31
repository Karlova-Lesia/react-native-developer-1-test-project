import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Test } from './screens/test'

export default function App() {
  return (
    <SafeAreaProvider>
      <Test />
    </SafeAreaProvider>
  )
}
