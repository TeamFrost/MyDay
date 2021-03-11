import React from 'react';

//Redux imports
import { Provider } from 'react-redux'
import { store } from './redux/store';

//Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { LandingStackScreen } from './helpers/navigation'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {LandingStackScreen()}
      </NavigationContainer>
    </Provider>
  );
}

