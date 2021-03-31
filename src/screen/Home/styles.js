import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 680,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
        width: '50%',
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#fff',
        width: 180,
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    searchButton: {
        backgroundColor: '#fff',
        height: 50,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 25,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 25,
        elevation: 101,
        zIndex: 100,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
export default styles