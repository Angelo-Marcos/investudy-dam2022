import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { Report } from '../screens/Report';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.title,
                tabBarInactiveTintColor: theme.colors.background,
                tabBarLabelPosition: 'beside-icon',
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.regular,
                    fontSize: RFValue(14)
                },
                tabBarStyle: {
                    height: 72
                }
            }}
        >
            <Screen
                name="LISTAGEM"
                component={Home}
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name='format-list-bulleted'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='CADASTRAR'
                component={Register}
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name='attach-money'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='RESUMO'
                component={Report}
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name='pie-chart'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    );
}