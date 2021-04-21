import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
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
        fontWeight: 'bold',
    },
    number:{
        color: '#5b5b5b',
        fontSize: 16,
    },
})

export default styles;