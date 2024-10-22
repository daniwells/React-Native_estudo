    import React from 'react';
    import { createStackNavigator } from '@react-navigation/stack';

    import ScreenA from '@/views/ScreenA';
    import ScreenB from '@/views/ScreenB';
    import ScreenC from '@/views/ScreenC';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    // import { Ionicons } from '@expo/vector-icons';
    import Ionicons from '@expo/vector-icons/Ionicons';


    interface TabNavProps {}

    const Tab = createBottomTabNavigator();

    const TabNav: React.FC<TabNavProps> = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: { fontSize: 30 },
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case 'ScreenA':
                                iconName = focused
                                    ? 'home' : 'home-outline'; 
                                break;
                            case 'ScreenB':
                                iconName = focused
                                    ? 'add-circle'
                                    : 'add-circle-outline';
                                break;
                            case 'ScreenC':
                                iconName = focused
                                    ? 'settings'
                                    : 'settings-outline';
                                break;
                            default:
                                break;
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name='ScreenA' component={ScreenA} />
                <Tab.Screen name='ScreenB' component={ScreenB} />
                <Tab.Screen name='ScreenC' component={ScreenC} />
            </Tab.Navigator>
        );
    }

    export default TabNav;
