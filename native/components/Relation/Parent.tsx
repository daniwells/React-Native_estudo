import React from 'react';
import { Text } from 'react-native';
import styles from '@/app/(tabs)/styles';
import Child from './Child'

type Props = {
    children: React.ReactNode
};

const FunctionalComponent: React.FC<Props> = (props) => {
    return (
        <>
            {props.children}
        </>
    );
};

export default FunctionalComponent;