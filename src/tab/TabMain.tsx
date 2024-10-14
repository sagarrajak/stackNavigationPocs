import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FeedComponent from './FeedComponent';
import MessagesComponent from './MessagesComponent';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackNavigationProps } from '../Main';

export type TabNavigationProps = {
  Feed: undefined
  Messages: undefined
};

const Tab = createBottomTabNavigator<TabNavigationProps>();

export type TabScreen<T extends keyof TabNavigationProps> = CompositeScreenProps<
  BottomTabScreenProps<TabNavigationProps, T>,
  StackScreenProps<RootStackNavigationProps>
>;

const TabMain = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedComponent} />
      <Tab.Screen name="Messages" component={MessagesComponent} />
    </Tab.Navigator>
  );
};

export default TabMain;
