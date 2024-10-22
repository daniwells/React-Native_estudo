import React from 'react';
import { View, StyleSheet } from 'react-native';
import { board } from '@/constants/types';
import Field from './Field';

interface MineFieldProps {
    board: board[][],
    onOpenField?: (r: number, c: number) => void,
    onSelectField?: (r: number, c: number) => void,
}

const MineField: React.FC<MineFieldProps> = (props) => {
    const rows: React.JSX.Element[] = props.board.map((row, r) => {
        const columns: React.JSX.Element[] = row.map((field, c) => {
            return <Field 
                {...field} 
                key={c}
                onOpen={
                    () => {
                        props.onOpenField ? 
                        props.onOpenField(r, c) : 
                        false; 
                        return {};
                    }
                }
                onSelect={
                    (e) => {
                        props.onSelectField ?
                        props.onSelectField(r, c) :
                        false;
                        return {};
                    }}
            />
        })
        return <View 
            key={r} 
            style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
};

export default MineField;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
})