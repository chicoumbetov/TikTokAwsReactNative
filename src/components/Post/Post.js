import React, { useRef, useState } from 'react'
import { View, Image, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {
    //const { post } = props;
    const [ post, setPost ] = useState(props.post);

    const [paused, setPaused] = useState({})

    const onPlayPausePress = () => {
        //console.warn('console.warn(Clicked on video to pause)')
        //setPaused(!paused);
        paused.isPlaying
            ? videoRef.current.pauseAsync()
            : videoRef.current.playAsync()
    }

    const onLikePress = () => {
        //console.warn('like')
        setPost({
            ...post,
            likes: post.likes + 1
        })
    };

    const videoRef = useRef(null);
    return (
        <View style={styles.container}>

            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    ref={videoRef}
                    style={styles.video}
                    source={post.videoUri}
                    //useNativeControls
                    onError={(e) => console.log(e)}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    onPlaybackStatusUpdate={paused => setPaused(() => paused)}
                />
            </TouchableWithoutFeedback>

            <View style={styles.uiContainer}>
                <View style={styles.rightContainer}>

                    <Image style={styles.profilePicture} source={{ uri: post.user.imageUri }} />

                    <TouchableOpacity 
                        style={styles.iconContainer}
                        onPress={onLikePress}
                    >
                        <AntDesign name={"heart"} size={40} style={{ alignSelf: 'center' }} color="white" />
                        <Text style={styles.statsLabel}>{post.likes}</Text>
                    </TouchableOpacity>

                    <View style={styles.iconContainer}>
                        <FontAwesome name={"commenting"} size={39} style={{ alignSelf: 'center' }} color="white" />
                        <Text style={styles.statsLabel}>{post.comments}</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <Fontisto name={"share-a"} size={34} style={{ alignSelf: 'center' }} color="white" />
                        <Text style={styles.statsLabel}>{post.shares}</Text>
                    </View>

                </View>

                <View style={styles.bottomContainer}>
                    <View>
                        <Text style={styles.handle}>@{post.user.username}</Text>
                        <Text style={styles.description}>{post.description}</Text>

                        <View style={styles.songRow}>
                            {/* icons */}
                            <Entypo name={"beamed-note"} style={{ paddingRight: 2 }} color="white" />
                            {/* name */}
                            <Text style={styles.songName}>{post.song}</Text>
                        </View>
                    </View>

                    <Image 
                        style={styles.songImage} 
                        source={{ uri: 'data:image/jpeg;base64,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' }} />
                </View>
            </View>
        </View>
    )
}

export default Post
