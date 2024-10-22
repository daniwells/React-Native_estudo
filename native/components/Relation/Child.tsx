import React from 'react';
import { Text } from 'react-native';
import styles from '@/app/(tabs)/styles';

type Props = {
    firstName: string,
    lastName: string,
};

const FunctionalComponent: React.FC<Props> = (props) => {
    return (
        <Text style={styles.giantText}>
            {props.firstName} {props.lastName}            
        </Text>
    );
};

export default FunctionalComponent;