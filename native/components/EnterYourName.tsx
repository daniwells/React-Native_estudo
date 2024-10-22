import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '@/app/(tabs)/styles';

type Props = {
    
};

const EnterYourName: React.FC<Props> = (props) => {
    return (
        <View>
            <Text>Input Name:</Text>
            <TextInput
                placeholder='Enter your name'
            />
        </View>
    );
};

export default EnterYourName;