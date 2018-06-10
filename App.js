import React from 'react';
import {
    createStackNavigator,
} from 'react-navigation';

import CreatePiggyScreen from './src/screens/CreatePiggyScreen';
import HomeScreen from './src/screens/HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    AddPiggy: { screen: CreatePiggyScreen },
  },
  {
    intitialRouteName: 'Home',
  }
)

const App = () => (
  <RootStack />
)



export default App;
