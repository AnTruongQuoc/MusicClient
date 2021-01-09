//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';


import { StateProvider, useStateValue } from './src/StateProvider';
import { initialState, reducer } from './src/reducer'

import SplashScreen from './src/screens/SplashScreen/SplashScreen'
import Navigator from './src/Navigator';
import {Provider} from 'react-native-paper'




function App() {
  const [isLoading, setLoading] = useState(true)
  //const [state, dispatch] = useStateValue()

  useEffect(() => {
    let data = null

    const waiting = async () => {
      data = await loadingData()

      if (data !== null) {
        setLoading(false)
      }
    }

    waiting()
  }, [])

  const loadingData = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('datahere') },
        2000
      )
    );
  }


  if (isLoading) {
    return (
      <SplashScreen />
    )
  }

  return (
    <StateProvider
      initialState={initialState}
      reducer={reducer}
    >
     <Provider>
      <Navigator />
     </Provider>
    </StateProvider>
  )
}

export default App
