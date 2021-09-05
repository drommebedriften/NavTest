import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import Simple from './screens/Simple';
import App from './screens/App';
import Spill from './screens/Spill'
import './screens/Quiz.css';


//Screen names
const detailsName = "Spill";
const homeName = "Forside";
const settingsName = "Bedrifter";
const profileName = "Profil";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={detailsName}
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'widgets' : 'widgets-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'gamepad-square' : 'gamepad-square-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'factory' : 'factory';

            } else if (rn === profileName) {
              iconName = focused ? 'account-box' : 'account-box-outline';
            }
            

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 5, fontSize: 10 },
          style: { padding: 10, height: 70, margin: 10}
        }}>
        <Tab.Screen name={detailsName} component={Spill} />
        <Tab.Screen name={homeName} component={Simple} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={profileName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;