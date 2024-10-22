import React from 'react';
import { 
    View, 
    StyleSheet, 
    ViewStyle, 
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import params from '@/constants/params';
import Mine from './Mine';
import Flag from './Flag';

interface FieldProps {
    mined?: boolean,
    opened?: boolean,
    nearMines?: number,
    exploded?: boolean,
    flagged?: boolean,
    onOpen?: () => {},
    onSelect?: () => {},
}

const Field: React.FC<FieldProps> = ({
    mined,
    opened,
    nearMines,
    exploded,
    flagged,
    onOpen,
    onSelect,
}) => {
    const styleField: ViewStyle[] = [styles.field];
    if (opened) styleField.push(styles.opened);
    if (!opened && !exploded) styleField.push(styles.regular);
    if (exploded) styleField.push(styles.exploded);
    if (flagged) styleField.push(styles.flagged)
    
    let color: string = '';
    if(nearMines && nearMines > 0){
        if(nearMines === 1) color = '#2A28d7'
        if(nearMines === 2) color = '#2B520F'
        if(nearMines > 2 && nearMines < 6) color = '#F9066A'
        if(nearMines >= 6) color = '#F221A9'
    }

    return (
        <TouchableWithoutFeedback 
            onPress={onOpen}
            onLongPress={onSelect}
        >
        <View style={styleField}>
            {!mined && opened && nearMines && nearMines > 0 ? 
                <Text style={[styles.label, { color: color }]} >
                    {nearMines && nearMines}
                </Text>
                :
                false
            }
            {mined && opened &&
                <Mine/>
            }
            {flagged && !opened &&
                <Flag/> 
            }
        </View>
        </TouchableWithoutFeedback>
    );
};

export default Field;

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#ccc',
        borderTopColor: '#ccc',
        borderBottomColor: '#333',
        borderRightColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    flagged: {

    },
});
