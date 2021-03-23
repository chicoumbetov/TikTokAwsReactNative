import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
    },

    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    buttonFlip: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 5,
        marginHorizontal: 10,
    },


    recordBorder: {
        justifyContent: "center",
        alignItems: 'center',
        padding: 26,
        borderColor: "red",
        borderWidth: 5,
        height: 55,
        width: 55,
        borderRadius: 50,
    },
    buttonRecord: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 45,
        width: 45,
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 5
    },
    buttonStop: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        borderRadius: 3,
        backgroundColor: 'red',
        padding: 5
    },
    text: {
        fontSize: 20
    },


    buttonGallery: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: 'yellow',
        padding: 5,
        marginHorizontal: 10,
    },
})

export default styles;