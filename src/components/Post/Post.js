import React, {useRef, useState} from 'react'
import { View, Button } from 'react-native'
import { Video } from 'expo-av';
import styles from './styles';
//import kz from '../../assets/video/kz.mp4'

const Post = () => {
    const videoRef = useRef(null);
    const [status, setStatus] = useState({});
    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                style={styles.video}
                source={require('../../assets/video/kz.mp4')}
                useNativeControls
                //onError={(e)=> console.log(e)}
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

            
            <View style={{marginTop: 20}}>
                <Button
                    title={status.isPlaying 
                        ? 'Pause' 
                        : 'Play'
                    }
                    onPress={() =>
                        status.isPlaying 
                            ? videoRef.current.pauseAsync() 
                            : videoRef.current.playAsync()
                    }
                />
            </View>
            

        </View>
    )
}

export default Post
