import React from 'react';
import { Text, Platform } from 'react-native';
import styles from '@/app/(tabs)/styles';

type Props = {

};

const FunctionalComponent: React.FC<Props> = (props) => {
    if(Platform.OS === 'android'){
        return <Text style={styles.giantText}>Android</Text>
    }else if(Platform.OS === 'ios'){
        return <Text style={styles.giantText}>IOS</Text>
    }else{
        return <Text style={styles.giantText}>{Platform.OS}</Text>
    }
    
};

export default FunctionalComponent;