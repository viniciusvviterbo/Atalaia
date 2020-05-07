import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

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

    asteroid: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#1c1c1c',
        marginBottom: 16,
        marginTop: 48,
    },

    asteroidPropertyRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    asteroidInfo: {
        marginTop: 8,
        marginBottom: 15,
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

    actions: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#1c1c1c',
        marginBottom: 8,
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#2288FF',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
});