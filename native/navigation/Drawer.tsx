import React from 'react';
import ScreenA from '@/views/ScreenA';
import ScreenB from '@/views/ScreenB';
import ScreenC from '@/views/ScreenC';
import ScreenD from '@/views/ScreenD';
import { createDrawerNavigator } from '@react-navigation/drawer';

interface DrawerNavProps {}

const Drawer = createDrawerNavigator();

const DrawerNav: React.FC<DrawerNavProps> = (props) => {
    return (
        <Drawer.Navigator initialRouteName='ScreenB' >
            <Drawer.Screen name='ScreenA' component={ScreenA}/>
            <Drawer.Screen name='ScreenB' component={ScreenB}/>
            <Drawer.Screen name='ScreenC' component={ScreenC}/>
            <Drawer.Screen name='ScreenD' component={ScreenD}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav;