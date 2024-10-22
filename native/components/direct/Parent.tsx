import React from 'react';
import { Text } from 'react-native';
import styles from '@/app/(tabs)/styles';
import Child from './Child'

type Props = {
    
};

const FunctionalComponent: React.FC<Props> = (props) => {
    let x = 14;
    let y = 1000;
    return (
        <Text style={styles.giantText}>
            <Child a={"AFFFEE"} b="LAULAU" />  
            <Child a={String(x)} b={String(y + x)} />  
        </Text>
    );
};

export default FunctionalComponent;