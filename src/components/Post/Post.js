import React, { useRef, useState } from 'react'
import { View, Button, TouchableWithoutFeedback } from 'react-native'
import { Video } from 'expo-av';
import styles from './styles';

const Post = () => {

    const [paused, setPaused] = useState({})

    const onPlayPausePress = () => {
        console.warn('console.warn(Clicked on video to pause)')
        //setPaused(!paused);
        paused.isPlaying
            ? videoRef.current.pauseAsync()
            : videoRef.current.playAsync()
    }
    const videoRef = useRef(null);
    return (
        <>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View style={styles.container}>
                    <Video
                        ref={videoRef}
                        style={styles.video}
                        source={require('../../assets/video/kz.mp4')}
                        //useNativeControls
                        onError={(e) => console.log(e)}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        onPlaybackStatusUpdate={paused => setPaused(() => paused)}
                    />
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default Post
