import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    profilePic: {
        height: 80,
        width: 80,
        borderRadius: 40
    },

    profileName: {
        marginHorizontal: 20,
        width: '80%',
        fontSize: 20,
    },

    buttons1: {
        marginTop: 90,
        paddingLeft: 20,
        paddingVertical: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },

    buttons2: {
        paddingLeft: 20,
        paddingVertical: 20,
        backgroundColor: 'white',
    },

    LogOutButton: {
        marginTop: 90,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 25,
    }
})

export default styles;