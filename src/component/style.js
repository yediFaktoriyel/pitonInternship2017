'use strict'
let React = require('react-native');
let{StyleSheet} = React;
const constants = {
    actionColor:'#3cb371'
}

module.exports = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
    },
    listview: {
        flex: 1,
    },
    li:{
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 10,
    },
    liContainer: {
        flex: 2,
    },
    liText:{
      color: '#333',
      fontSize: 16,
    },
    litime:{
        textAlign: 'center',
        color: '#333',
        fontSize: 15,
        paddingRight: 16,
    },
    lisumtemp:{
        textAlign: 'center',
        color: '#EE4E13',
        fontSize: 15,
        paddingRight: 16,
    },
    lisumhum:{
        textAlign: 'center',
        color: '#4d72ee',
        fontSize: 15,
        paddingRight: 16,
    },
    navbar: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor:'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        height: 44,
        flexDirection: 'row'
    },
    navbarTitle: {
        color:'#444',
        fontSize: 25,
        fontWeight:"500"
    },
    toolbar: {
        backgroundColor:'#fff',
        height: 22,
    }
});