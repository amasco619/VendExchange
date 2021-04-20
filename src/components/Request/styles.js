import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    descriptionText: {
        fontSize: 16,
        width: 310,
    },
    nameText: {
        fontWeight: 'bold',
    },
    buttonDesign: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#378be6',
        height: 35,
        width: 60,
        borderRadius: 10,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sign: {
        fontSize: 18,
        color: 'white',
    },
    count: {
        marginHorizontal: 17,
        fontSize: 17,
    },
})

export default styles