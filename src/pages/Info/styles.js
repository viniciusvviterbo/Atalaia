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

    box: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#1c1c1c',
        marginTop: 48,
        marginBottom: 16,
    },

    definition: {
        fontSize: 14,
        color: '#7d7d7d',
        fontWeight: 'bold',
    },

    info:  {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#1c1c1c',
        marginBottom: 16,
    },

    infoText: {
        marginTop: 6,
        fontSize: 13,
        color: '#7d7d7d',
    },

});