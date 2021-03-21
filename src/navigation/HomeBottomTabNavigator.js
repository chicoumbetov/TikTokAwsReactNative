import React from 'react';
import { Text, Image } from 'react-native';

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import SearchScreen from '../screens/Search/SearchScreen';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import plusIcon from '../assets/images/plus-icon.png'

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return(
            <Tab.Navigator
                tabBarOptions={{
                    tabStyle: {
                        backgroundColor: '#000',
                        paddingBottom: 5,
                        paddingTop: 5,
                        
                    },
                    activeTintColor: '#fff',
                }}
            >
                <Tab.Screen 
                    name="Home" component={HomeScreen} 
                    options={{
                        tabBarIcon: ({color}) => (
                            <Entypo name={"home"} size={24} color={color} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="Search" 
                    component={SearchScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <AntDesign name={"search1"} size={24} color={color} />
                            
                        )
                    }} 
                />
                <Tab.Screen 
                    name="Upload" component={ProfileScreen} 
                    options={{
                        tabBarIcon: () => (
                            <Image 
                                source={plusIcon} 
                                style={{height: 35, resizeMode: 'contain' }}
                             />
                        ),
                        tabBarLabel: () => null,
                    }}
                />
                <Tab.Screen 
                    name="Inbox" component={DetailsScreen} 
                    options={{
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name={"message-minus-outline"} size={24} color={color} />
                            
                        )
                    }} 
                />
                <Tab.Screen 
                    name="Profile" component={ProfileScreen} 
                    options={{
                        tabBarIcon: ({color}) => (
                            <Ionicons name={"person-outline"} size={24} color={color} />
                            
                        )
                    }} 
                />
            </Tab.Navigator>
    );
};

export default HomeBottomTabNavigator;