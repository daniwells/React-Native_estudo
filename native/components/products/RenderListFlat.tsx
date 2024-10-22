import React from 'react';
import { Text, FlatList  } from 'react-native';
import styles from '@/app/(tabs)/styles';
import products from './products';

type pi = {id: number, name: string, email: string}
type products = pi[]

type Props = {};

const RenderList: React.FC<Props> = (props) => {

    const productRender = ({item: p}: {item: pi}) => {
        return <Text> {p.id} {p.name} - {p.email} </Text>
    }

    return (
        <>
            <Text style={styles.giantText}>
                List of Products:
            </Text>
            <FlatList
                data={products}
                keyExtractor={i => `${i.id}`}
                renderItem={productRender}
            />
        </>
    );
};

export default RenderList;