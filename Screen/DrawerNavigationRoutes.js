import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TaskScreen from './DrawerScreens/TaskScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
const Drawer = createDrawerNavigator();

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}
      >
      <Drawer.Screen
        name="taskScreen"
        options={{title: 'Task Screen', headerShown:true,}}
        component={TaskScreen}
        
      />
      <Drawer.Screen
        name="settingScreen"
        options={{title: 'Setting Screen', headerShown:true,}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;