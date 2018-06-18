import React from 'react';
import {
    createStackNavigator,
} from 'react-navigation';
import Store from './src/store/Store';

import CreatePiggyScreen from './src/screens/CreatePiggyScreen';
import PiggyScreen from './src/screens/PiggyScreen';
import HomeScreen from './src/screens/HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    AddPiggy: { screen: CreatePiggyScreen },
    Piggy: { screen: PiggyScreen },
  },
  {
    intitialRouteName: 'Home',
  }
)

const App = () => {
  if(Store.isReady) {
   return <RootStack />
  }
  else {
    return <Text>Spinner...</Text>
  }
}



export default App;
