import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import AppNavigator from './src/navigation/AppNavigator'; // Path to your AppNavigator

export default function App() {
    return (
        <NavigationContainer>  {/* Wrap AppNavigator inside NavigationContainer */}
            <AppNavigator />
        </NavigationContainer>
    );
}
