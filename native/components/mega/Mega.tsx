import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import styles from '@/app/(tabs)/styles';

// Definindo a interface Props
interface Props {
    amtNumbers: number;    
}

// Definindo a interface para o estado
interface State {
    amtNumbers: number;
    numbers: number[]
}

export default class Mega extends Component<Props> {
    state: State = {
        amtNumbers: this.props.amtNumbers,
        numbers: []
    };

    handleChangeAmountNumber = (amount: string) => {
        const value = Number(amount);
        this.setState({ amtNumbers: +value });
    };

    generateNumberNotContained = (nums: number[]): number => {
        const newNumber = Math.floor(Math.random() * 60) + 1
        return nums.includes(newNumber) ? this.generateNumberNotContained(nums) : newNumber
    }
    
    generateNumbers = () => {
        const numbers: number[] = Array(this.state.amtNumbers)
            .fill(this.state.amtNumbers)
            .reduce((n: number[]) => [...n, this.generateNumberNotContained(n)], [])
            .sort((a, b) => a - b)
        this.setState({numbers})
    }

    render() {
        return (
            <View>
                <Text style={styles.giantText}>
                    Mega-Sena Generator 
                </Text>
                <TextInput
                    placeholder='Amount of Numbers'
                    style = { styles.input }
                    value={`${this.state.amtNumbers}`}
                    onChangeText={this.handleChangeAmountNumber}
                    keyboardType='numeric'
                />
                <Button
                    title="Generate"
                    onPress={this.generateNumbers}
                />
                <Text style={styles.centerRowM} >
                    {this.state.numbers.join(', ')}
                </Text>
            </View>
        );
    }
}
