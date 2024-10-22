import { View, StyleSheet, Text, Alert } from 'react-native';
import params from '@/constants/params';
import MineField from '@/components/MineField';
import { Component } from 'react';
import { board } from '@/constants/types';
import Header from '@/components/Header';
import LevelSelection from '@/components/screens/LevelSelection';
import { 
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from '@/scripts/Functions';


interface HomeScreenProps {}

export default class HomeScreen extends Component{

  constructor(props: HomeScreenProps){
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMineBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row: number, column: number) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Looooooser', 'You lose!')
    }

    if (won) {
      Alert.alert('Congratulations', 'You win!')
    }

    this.setState({board, lost, won})
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if(won){
      Alert.alert('Congratulations', 'You win!');
    }
    this.setState({board, won});
  }

  onLevelSelected = (level) => {
    params.difficultLevel = level;
    this.setState(this.createState());
  }

  render(){
    return (
      <View style={styles.container}>
        <LevelSelection 
          isVisible={this.state.showLevelSelection} 
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({
            showLevelSelecton: false
          })}
        />
        <Header 
          flagLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({showLevelSelection: true})}
        />
        <View style={styles.board} >
          <MineField 
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  welcome: {
  },
  instructions: {
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})