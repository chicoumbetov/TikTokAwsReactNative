import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        //marginTop: -19.7,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'black',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    uiContainer: {
        marginTop: 565,
        height: 100,
        justifyContent: 'flex-end',
        //backgroundColor: 'blue'
    },
    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'orange',
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 8,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
        //backgroundColor: 'black',
        width: 200,
        //transform: [{translateX: 100,}]
    },

    //Right Side container
    rightContainer: {
        alignSelf: 'flex-end',
        marginRight: 7,
        marginLeft: 300,
        height: 250,
        justifyContent: 'space-between',
        //backgroundColor: 'yellow'
    },
    profilePicture: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
    },
    iconContainer: {
        alignItems: 'center',
    },
    statsLabel: { 
        color: '#fff', 
        fontSize: 16,
        fontWeight: '600',
        //marginTop: 5,
        //alignSelf: 'center' 
    },
    songImage: {
        alignSelf: 'center',
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 7,
        borderColor: '#000'
    },
})

export default styles;