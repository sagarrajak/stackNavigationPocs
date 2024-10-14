import React from 'react';
import ProfileComponent from './main/ProfileComponents';
import SettingsComponent from './main/SettingsComponent';
import TabMain from './tab/TabMain';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackNavigationProps = {
  Profile: undefined,
  Settings: undefined,
  Home: undefined
}

const Stack = createStackNavigator<RootStackNavigationProps>();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileComponent} />
      <Stack.Screen name="Settings" component={SettingsComponent} />
    </Stack.Navigator>
  );
};

export default Main;
