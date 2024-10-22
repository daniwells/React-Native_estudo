import React from 'react';
import { Text, Button } from 'react-native';
import styles from '@/app/(tabs)/styles';

type Props = {
    max: number,
    min: number,
    function: (n: number) => {},
};

const FunctionalComponent: React.FC<Props> = (props) => {
    const generateNumber = (min: number, max: number) => {
        const factor = max - min + 1;
        return Math.floor(Math.random() * factor) + min;
    }
    return (
        <Button title="Execute!" onPress={() => {
            const n = generateNumber(props.min, props.max)
            props.function(n)
        }} />
    );
};

export default FunctionalComponent;