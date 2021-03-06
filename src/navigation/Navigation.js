import 'react-native-gesture-handler';
import * as React from 'react';

import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';

//import HomeScreen from '../screens/HomeScreen/HomeScreen';
//import SearchScreen from '../screens/Search/SearchScreen';
//import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
//import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeBottomTabNavigator from './HomeBottomTabNavigator';
import CreatePost from '../screens/CreatePost/CreatePost';

const Stack = createStackNavigator();

//const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
                <Stack.Screen 
                    name="CreatePost" component={CreatePost}
                    options={{
                        headerShown: true,
                        title: 'Post'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}