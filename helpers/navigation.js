import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import EmailSentScreen from '../screens/ForgotPassword/EmailSentScreen';
import CreateNewPasswordScreen from '../screens/ForgotPassword/CreateNewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import CreateActivityScreen from '../screens/CreateActivityScreen';
import GoalsScreen from '../screens/GoalsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FriendsScreen from '../screens/FriendsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChangeNameScreen from '../screens/Settings/ChangeNameScreen';
import ChangePasswordScreen from '../screens/Settings/ChangePasswordScreen';
import EditProfilePictureScreen from '../screens/Settings/EditProfilePictureScreen';
import QuizScreen from '../screens/Settings/QuizScreen';
import CustomTabBar from '../screens/Components/CustomTabBar';

const Tab = createBottomTabNavigator();
const LandingStack = createStackNavigator();
const LoginStack = createStackNavigator();
const ForgotPasswordStack = createStackNavigator();
const HomeStack = createStackNavigator();
const CalendarStack = createStackNavigator();
const GoalsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export const HomeStackScreen = () =>
    <HomeStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Notifications" component={NotificationsScreen} />
        <HomeStack.Screen name="Calendar" component={CalendarScreen} />
        <HomeStack.Screen name="CreateActivity" component={CreateActivityScreen} />
        <HomeStack.Screen name="Goals" component={GoalsScreen} />
    </HomeStack.Navigator>

export const CalendarStackScreen = () =>
    <CalendarStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
        <CalendarStack.Screen name="CreateActivity" component={CreateActivityScreen} />
        <CalendarStack.Screen name="Goals" component={GoalsScreen} />
    </CalendarStack.Navigator>

export const GoalsStackScreen = () =>
    <GoalsStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <GoalsStack.Screen name="Goals" component={GoalsScreen} />
    </GoalsStack.Navigator>

export const ProfileStackScreen = () =>
    <ProfileStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} />
        <ProfileStack.Screen name="Statistics" component={StatisticsScreen} />
        <ProfileStack.Screen name="Friends" component={FriendsScreen} />
        <ProfileStack.Screen name="SettingsStack" component={SettingsStackScreen} />
    </ProfileStack.Navigator>

export const SettingsStackScreen = () =>
    <SettingsStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        <SettingsStack.Screen name="EditProfilePicture" component={EditProfilePictureScreen} />
        <SettingsStack.Screen name="ChangeName" component={ChangeNameScreen} />
        <SettingsStack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <SettingsStack.Screen name="Quiz" component={QuizScreen} />
    </SettingsStack.Navigator>

export const HomeTabs = () =>
    <Tab.Navigator
        initialRouteName='HomeStack'
        screenOptions={{
            headerShown: false,
        }}
        tabBar={props => <CustomTabBar {...props} />}
    >
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="CalendarStack" component={CalendarStackScreen} />
        <Tab.Screen name="GoalsStack" component={GoalsStackScreen} />
        <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
    </Tab.Navigator>

export const ForgotPasswordStackScreen = () =>
    <ForgotPasswordStack.Navigator
        screenOptions={{
            headerShown: false,
            initialRouteName: 'ForgotPassword'
        }}>
        <ForgotPasswordStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <ForgotPasswordStack.Screen name="EmailSent" component={EmailSentScreen} />
        <ForgotPasswordStack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
    </ForgotPasswordStack.Navigator>

export const LoginStackScreen = () =>
    <LoginStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <LoginStack.Screen name="Login" component={LoginScreen} />
        <LoginStack.Screen name="HomeTabs" component={HomeTabs} />
        <LoginStack.Screen name="Register" component={RegisterScreen} />
        <LoginStack.Screen name="ForgotPasswordStack" component={ForgotPasswordStackScreen} />
    </LoginStack.Navigator>

export const LandingStackScreen = () =>
    <LandingStack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false
        }}>
        <LandingStack.Screen name="Landing" component={LandingScreen} />
        <LandingStack.Screen name="LoginStack" component={LoginStackScreen} />
        <LandingStack.Screen name="HomeTabs" component={HomeTabs} />
    </LandingStack.Navigator>