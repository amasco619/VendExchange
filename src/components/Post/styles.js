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
        marginVertical: 10,
        fontSize: 20,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 22,
        lineHeight: 30,
    },
    price: {
        fontSize: 20,
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
        fontSize: 20,
    },
})

export default styles;