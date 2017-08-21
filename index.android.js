/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBDQOHL-e5siAlaxkC8JAVEsoZrwZ_R-TY",
    authDomain: "awesomeproject-613f6.firebaseapp.com",
    databaseURL: "https://awesomeproject-613f6.firebaseio.com",
    projectId: "awesomeproject-613f6",
    storageBucket: "awesomeproject-613f6.appspot.com",
    messagingSenderId: "952830835060"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = require('./src/component/style');

let captain;
let general;

import {
    ActivityIndicator,
    Alert,
    AppRegistry,
    Button,
    Image,
    ListView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View,
    ViewPagerAndroid
} from 'react-native';

export default class pitonInternshipProject extends Component {

    constructor(){

        super();

        const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {itemDataSource: ds};

        this.itemsRef = this.getRef().child('Players');
        this.renderRow = this.renderRow.bind(this);
        this.pressRow = this.pressRow.bind(this);
    }

    getRef(){
        return firebaseApp.database().ref();
    }

    _onPressButton(){
        Alert.alert('BASTIN!')
    }

    _onLongPressButton(){
        Alert.alert('UZUN BASTIN!')
    }

    componentDidMount(){
        this.getItems(this.itemsRef);
    }

    componentWillMount(){
        this.getItems(this.itemsRef);
    }

    getItems(itemsRef){

        itemsRef.on('value', (snap) => {

            let items = [];

            snap.forEach((child) => {
                items.push({
                    General: child.val().General,
                    Captain: child.val().Captain,
                    _key: child.key
                });
            });

            this.setState({
                itemDataSource: this.state.itemDataSource.cloneWithRows(items)
            });
        });
    }

    pressRow(item){
        console.log(item);
    }

    renderRow(item){

        captain = parseInt(item.Captain);
        general = parseInt(item.General);

        return (
            <TouchableHighlight onPress={() => {
                this.pressRow(item);
            }}>
                <View style = {styles.li}>
                    <Text style = {styles.liText}>
                        General = {general} {'\n'}
                        Captain = {captain} {'\n'}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {

        let pic = {
            uri: 'https://www.premierguitar.com/ext/resources/archives/55d0a9fc-2fe9-4b6f-b7c7-21467ade97e2.JPG?1371672773'
        };

        return(

        <View style = {styles.container}>
            <ListView   dataSource={this.state.itemDataSource}
                        renderRow={this.renderRow}
            />
        </View>

        );
    }
    
}

AppRegistry.registerComponent('pitonInternshipProject', () => pitonInternshipProject);
