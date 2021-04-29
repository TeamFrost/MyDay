import React from 'react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

//Redux imports
import { Provider } from 'react-redux'
import { store } from './redux/store';

//Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { LandingStackScreen } from './helpers/navigation'

export default function App() {
  return (
    <Provider store={store}>
      <ActionSheetProvider>
        <NavigationContainer>
          {LandingStackScreen()}
        </NavigationContainer>
      </ActionSheetProvider>
    </Provider>
  );
}

