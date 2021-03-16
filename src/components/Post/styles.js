import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: -19.7,
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
    }
})

export default styles;