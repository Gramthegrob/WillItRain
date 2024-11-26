import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ForecastScreen from '../screens/ForecastScreen';
import ForecastDetails from '../screens/ForecastDetails';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack Navigator for "WillItRain"
function WillItRain() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
}

// Stack Navigator for Forecast and its details
function ForecastStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Forecast"
                component={ForecastScreen}
                options={{ title: 'Weather Forecast' }}
            />
            <Stack.Screen
                name="ForecastDetails"
                component={ForecastDetails}
                options={{ title: 'Forecast Details' }}
            />
        </Stack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Forecast">
            <Drawer.Screen
                name="WillItRain"
                component={WillItRain}
                options={{ drawerLabel: 'Will It Rain?' }}
            />
            <Drawer.Screen
                name="Forecast"
                component={ForecastStack}
                options={{ drawerLabel: 'Weather Forecast' }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ drawerLabel: 'Your Profile' }}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{ drawerLabel: 'About Us' }}
            />
        </Drawer.Navigator>
    );
}
