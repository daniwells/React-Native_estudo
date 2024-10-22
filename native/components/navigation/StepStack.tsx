import React from 'react';
import { View, Button, Text } from 'react-native';

const StepStack = (props: any) => {
  return (
    <View style={{flex: 1}} >
        <View style={{flexDirection: 'row', justifyContent:'space-around'}} >
            {
                props.back ? 
                    <Button
                        title='Go back'
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
                : 
                    false
            }
            {
                // props.next ? 
                //     <Button
                //         title='Next'
                //         onPress={() => {
                //             props.navigation.navigate(props.next)
                //         }}
                //     />
                // : 
                //     false
                props.next ? 
                    <Button
                        title='Next'
                        onPress={() => {
                            props.navigation.push(
                                props.next, 
                                props.nextParam ? props.nextParam :
                                    {
                                        'number': parseInt(Math.random() * 100)
                                    }
                            )
                        }}
                    />
                : 
                    false
            }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
  );
};

export default StepStack;