import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },

    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'
    },

    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },

    name: {
        marginVertical: 5,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 15,
    },

    price: {
        fontSize: 15,
        marginVertical: 10,
    },

    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },

    newPrice: {
        fontWeight: 'bold',
    },
    number: {
        color: '#5b5b5b',
        fontSize: 16,
    },
})

export default styles;