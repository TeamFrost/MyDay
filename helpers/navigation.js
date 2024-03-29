import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeViewGestureHandler } from "react-native-gesture-handler";

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
import AddNewGoalScreen from "../screens/AddNewGoalScreen";
import ProfileScreen from '../screens/ProfileScreen';
import FriendsScreen from '../screens/FriendsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChangeNameScreen from '../screens/Settings/ChangeNameScreen';
import ChangePasswordScreen from '../screens/Settings/ChangePasswordScreen';
import EditProfilePictureScreen from '../screens/Settings/EditProfilePictureScreen';
import QuizScreen from '../screens/Settings/QuizScreen';
import WorkoutQuizScreen from '../screens/Quiz/WorkoutQuizScreen';
import WorkoutResultScreen from '../screens/Quiz/WorkoutResultScreen';
import ActivityQuizScreen from '../screens/Quiz/ActivityQuizScreen';
import ActivityResultScreen from '../screens/Quiz/ActivityResultScreen';
import CustomizeCategoryScreen from '../screens/Settings/CustomizeCategoryScreen';
import AboutAppScreen from '../screens/Settings/AboutAppScreen';
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
const QuizStack = createStackNavigator();

export const HomeStackScreen = () =>
    <HomeStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="QuizStack" component={QuizStackScreen} />
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
        <GoalsStack.Screen name="AddGoal" component={AddNewGoalScreen} />
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
        <SettingsStack.Screen name="QuizStack" component={QuizStackScreen} />
        <SettingsStack.Screen name="CustomizeCategory" component={CustomizeCategoryScreen} />
        <SettingsStack.Screen name="AboutApp" component={AboutAppScreen} />
    </SettingsStack.Navigator>

export const QuizStackScreen = () =>
    <QuizStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <QuizStack.Screen name="Quiz" component={QuizScreen} />
        <QuizStack.Screen name="WorkoutQuiz" component={WorkoutQuizScreen} />
        <QuizStack.Screen name="WorkoutResult" component={WorkoutResultScreen} />
        <QuizStack.Screen name="ActivityQuiz" component={ActivityQuizScreen} />
        <QuizStack.Screen name="ActivityResult" component={ActivityResultScreen} />
        <QuizStack.Screen name="HomeStack" component={HomeStackScreen} />
        <QuizStack.Screen name="CreateActivity" component={CreateActivityScreen} />
    </QuizStack.Navigator>

export const HomeTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='HomeStack'
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
            }}

            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="HomeStack" component={HomeStackScreen} />
            <Tab.Screen name="CalendarStack" component={CalendarStackScreen} />
            <Tab.Screen name="GoalsStack" component={GoalsStackScreen} />
            <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
        </Tab.Navigator>
    )
}

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
        <LoginStack.Screen name="HomeTabs" component={HomeTabs} />
    </LandingStack.Navigator>