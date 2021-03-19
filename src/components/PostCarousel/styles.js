import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
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
        fontSize: 16,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    price: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    number: {
        color: '#5b5b5b',
        fontSize: 16,
    },
})

export default styles;