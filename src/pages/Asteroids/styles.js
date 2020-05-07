import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { bold } from 'ansi-colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#333333',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
    },

    headerText: {
        fontSize: 15,
        color: '#7d7d7d',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 8,
        marginTop: 48,
        color: '#9ECBFF',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#7d7d7d',
    },

    dateSelection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
        marginBottom: 8,
    },

    date: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2288FF',
    },

    asteroidsList: {
        marginTop: 32,
    },

    asteroid: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#1c1c1c',
        marginBottom: 16,
    },

    asteroidInfo: {
        marginTop: 8,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    asteroidProperty: {
        fontSize: 14,
        color: '#7d7d7d',
        fontWeight: 'bold',
    },

    asteroidValue : {
        fontSize: 15,
        color: '#737380',
    },

    asteroidButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    asteroidButtonText: {
        color: '#9ECBFF',
        fontSize: 15,
        fontWeight: 'bold',
    }

});