import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        
    },
    textInput: {
        height: 150, 
        borderColor: 'gray', 
        borderWidth: 1,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
    },
    button: {
        margin: 10,
        backgroundColor: 'pink',
        padding: 10,
        height: 60,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;