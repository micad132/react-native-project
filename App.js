import React  from 'react';
import {NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';

export default function App() {
  
   return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Login/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
    
}
