import React from 'react';
import { Text } from 'react-native';
import styles from '@/app/(tabs)/styles';
import If from './If';

type Props = {
    user: {name: string, email: string}
};

const FunctionalComponent: React.FC<Props> = ({ user }) => {
    return (
        <>
            <If test={Object.keys(user).length < 2} >
                <Text style={styles.giantText}>
                    User Logged:
                </Text>
                <Text style={styles.giantText}>
                    {user.name} - {user.email}
                </Text>
            </If>
        </>
    );
};

export default FunctionalComponent;