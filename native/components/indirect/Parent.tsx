import React, { useState } from 'react';
import { Text } from 'react-native';
import styles from '@/app/(tabs)/styles';
import Child from './Child'

type Props = {
    
};

const FunctionalComponent: React.FC<Props> = (props) => {
    const [num, setNum] = useState(0);

    const showValue = (number: number) => {
        setNum(number)
    }

    return (
        <>
            <Text style={styles.giantText}>
                {num}
            </Text>
            <Child 
            min={1} 
            max={60} 
            function={showValue} 
        />
    </>
    );
};

export default FunctionalComponent;