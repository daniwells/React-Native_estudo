import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ImageBackground, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity, 
    Platform, 
    Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/FontAwesome";

import comonStyles from '../comonStyles';
import todayImage from '../../assets/imgs/today.jpg';

import moment from "moment";
import "moment/locale/pt-br";

import Task from '../components/Task';
import AddTask from './AddTask';

const initialState = {
    showDoneTasks: true,
    visibleTasks: [],
    showAddTask: false,
    tasks: []
}

export default class TaskList extends Component {
    state = {
        ...initialState
    }

    toggleFilter = () => {
        this.setState(
            {
                showDoneTasks: !this.state.showDoneTasks
            },
            this.filterTasks
        )
    }
    
    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem("tasksState");
        const state = JSON.parse(stateString) || initialState;
        this.setState(state);
    }
    
    filterTasks = () => {
        let visibleTasks = null;
        if(this.state.showDoneTasks){
            visibleTasks = [...this.state.tasks];
        } else {
            const pending = task => task.doneAt === null;
            visibleTasks = this.state.tasks.filter(pending);
        }
        
        this.setState({ visibleTasks });
        AsyncStorage.setItem("tasksState", JSON.stringify(this.state));
    }
    
    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id === taskId){
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks }, this.filterTasks)
    }

    addTask = newTask => {
        if(!newTask || !newTask.desc || !newTask.desc.trim()){
            Alert.alert("Invalid datas", "Description doesn't typed!")
            return
        }

        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimeAt: newTask.date,
            doneAt: null
        })

        this.setState({tasks, showAddTask: false}, this.filterTasks)
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks }, this.filterTasks)
    }

    render(){
        const today = moment().locale("pt-br").format("ddd, D [de] MMMM [de] YYYY")
        return (
            <View style={styles.container}>
                <AddTask 
                    isVisible={this.state.showAddTask} 
                    onCancel={() => this.setState({showAddTask: false})}
                    onSave={this.addTask}
                />
                <ImageBackground 
                    source={todayImage} 
                    style={styles.background}
                >
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter} >
                            <Icon 
                                name={this.state.showDoneTasks ? "eye" : "eye-slash"} 
                                size={20}
                                color={comonStyles.colors.secondary}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.titleBar} >
                        <Text style={styles.title} >Today</Text>
                        <Text style={styles.subtitle} >{today}</Text>
                    </View>   
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList 
                        data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask} />}
                    />
                </View>
                <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => this.setState({showAddTask: true})} 
                    style={styles.addButton}>
                    <Icon 
                        name="plus" 
                        size={20}
                        color={comonStyles.colors.secondary} 
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background:{
        flex:3
    },
    taskList:{
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: comonStyles.fontFamily,
        fontSize: 50, 
        color: comonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: { 
        fontFamily: comonStyles.fontFamily,
        fontSize: 20, 
        color: comonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20,
    },  
    iconBar: {
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "flex-end",
        marginTop: Platform.OS === "ios" ? 50 : 10,
    },
    addButton: {
        position: "absolute",
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: comonStyles.colors.today,
        justifyContent: "center",
        alignItems: "center",
    }

})