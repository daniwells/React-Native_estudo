import React from 'react';
import { Text, View } from 'react-native'

interface TextCentralProps {
    children: React.ReactNode,
    bgColor?: string,
    color?: string,
}

const TextCenter: React.FC<TextCentralProps> = (props) => {
  return (
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.bgColor || '#000',
        }}
    >
        <Text 
            style={{
                fontSize: 50,
                color: props.color || '#fff',
            }}
        >
            {props.children}
        </Text>
    </View>
  );
};

export default TextCenter;