import React from 'react';
import { Text, Button } from 'react-native';
import styles from '@/app/(tabs)/styles';

type Props = {
    a: string,
    b: string,
};

const FunctionalComponent: React.FC<Props> = (props) => {
    return (
        <>
            <Text style={styles.giantText}>{props.a}</Text>
            <Text style={styles.giantText}>{props.b}</Text>
        </>
    );
};

export default FunctionalComponent;