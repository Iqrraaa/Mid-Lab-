import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./screens/Home";
import Reports from "./screens/Reports";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={{
        tabBarActiveTintColor: 'purple',
        headerStyle: { backgroundColor: 'purple'}
      }}
      >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
         <Tab.Screen 
        name="Report" 
        component={Reports} 
        options={{
          tabBarLabel: 'Reports',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
    backgroundColor: "#fff",
  },
});