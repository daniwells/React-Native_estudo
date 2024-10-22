import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from '@/views/ScreenA';
import ScreenB from '@/views/ScreenB';
import ScreenC from '@/views/ScreenC';
import StepStack from '@/components/navigation/StepStack';

const Stack = createStackNavigator();

interface StackNavProps {

}

const StackNav: React.FC<StackNavProps> = (props) => (
    <Stack.Navigator 
        initialRouteName='ScreenA' 
        screenOptions={{headerShown: true}}
    >
        <Stack.Screen 
            name="ScreenA" 
            options={{title:'Start Informations'}}
        >
            {(props: any) => (
                <StepStack {...props} next='ScreenB'>
                    <ScreenA/>
                </StepStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
            name="ScreenB" 
            options={{title:'Start Informations'}}
        >
            {(props: any) => (
                <StepStack {...props} next='ScreenC' back nextParam={{number: 107}}>
                    <ScreenB/>
                </StepStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
            name="ScreenC"
            options={{title:'Start Informations'}}
        >
            {(props: any) => (
                <StepStack {...props} next='ScreenC' back>
                    <ScreenC {...props} />
                </StepStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>   
)

export default StackNav;