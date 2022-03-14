import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { getAuth, signInWithCustomToken } from 'firebase/auth'

import './config/firebase'

function App() {
  const [uid, setUID] = useState(null)

  useEffect(() => {
    login()
  }, [])

  async function login () {
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTY0NzI3MDI5MiwiZXhwIjoxNjQ3MjczODkyLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1jOTRsakBleC1maXJlYmFzZS1jdXN0b20tYXV0aC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWM5NGxqQGV4LWZpcmViYXNlLWN1c3RvbS1hdXRoLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoia2FqYW1lIn0.m3tUNahKrR9LR5QLfwcGTQ8auWLCQFLWdw38K7iWd5K1bsdjXBPlTH2u8kKiOZ1uN93TC14psM3oG9FKNZ9hHLsgr8_47vE2DfFZ7SgckQMCBfCM5QkuB5HvdHW4UVJw4SgURW1BbVJ6AeSixN4n2JrMnCpHHvueAIkwv13qtTEJsRD3WrMDsuuH0JxZdO3uVmZ1U9NNUHTwPNmrp-utl6yqEVH6gzlezSbd0aGz07eFF3pLiZbGy3Gzh6w_BQ-5deCH-xr8C917kScAkUsS8spVZXawZbryUlCGpP6nZ5TBQ0cV10O2iX8NJE48PgHJOrYRFW9n6CMWIPZDkJyNKw'
    const auth = getAuth()
    const { user } = await signInWithCustomToken(auth, token)

    setUID(user?.uid)
  }

  return (
    <View style={styles.container}>
      <Text>UID: {uid}</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
