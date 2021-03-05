import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    aText:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    cText:{
        color: '#8d8d8d',
    },
    buttonDesign:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    button:{
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sign:{
        fontSize: 22,
        color: '#474747',
    },
    count: {
        marginHorizontal: 17,
        fontSize: 17,
    },
})

export default styles