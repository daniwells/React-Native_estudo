import React from 'react';
import TextCenter from '@/components/navigation/TextCenter';
import { Button, View } from 'react-native';

const ScreenD = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'end' }} >
            <Button
                title="Open"
                onPress={
                    () => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                props.navigation.toggleDrawer()
                            }, 1000)
                        }, 3000)
                    }
                }
            />
            {/* <Button
                title="Close"
                onPress={() => props.navigation.closeDrawer()}
            /> */}
        </View>
        <TextCenter bgColor={'#33fa72'} >
            Screen D
        </TextCenter>
    </View>    
  );
};

export default ScreenD;