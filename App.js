import React from 'react';

//Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { LandingStackScreen } from './helpers/navigation'

export default function App() {
  return (
    <NavigationContainer>
      {LandingStackScreen()}
    </NavigationContainer>
  );
}

