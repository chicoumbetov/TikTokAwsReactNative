import React, { useRef, useState, useEffect } from 'react'
import { View, Image, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import {Storage} from 'aws-amplify';

import { Video } from 'expo-av';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {
    console.log("Post")

    //const { post } = props;
    const [post, setPost] = useState(props.post);
    const [isLiked, setIsLiked] = useState(false)
    const [videoUri, setVideoUri] = useState('');

    const [paused, setPaused] = useState({})

    const onPlayPausePress = () => {
        //console.warn('console.warn(Clicked on video to pause)')
        //setPaused(!paused);
        paused.isPlaying
            ? videoRef.current.pauseAsync()
            : videoRef.current.playAsync()
    }

    const onLikePress = () => {

        const likesToAdd = isLiked ? -1 : 1

        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked)
    };

    const getVideoUri = async () => {
        if (post.videoUri.startsWith('http')) {
            setVideoUri(post.videoUri);
            return post.videoUri;
        }
        setVideoUri(await Storage.get(post.videoUri));
    };

    useEffect(() => {
        getVideoUri();
    }, []);

    const videoRef = useRef(null);
    //console.log(post.user)
    return (
        <View style={styles.container}>

            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    ref={videoRef}
                    style={styles.video}
                    source={{uri: videoUri}}
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
                        <AntDesign name={"heart"} size={40} style={{ alignSelf: 'center' }} color={isLiked ? "red" : "white"} />
                        {/* <Text style={styles.statsLabel}>{post.likes}</Text> */}
                    </TouchableOpacity>

                    <View style={styles.iconContainer}>
                        <FontAwesome name={"commenting"} size={39} style={{ alignSelf: 'center' }} color="white" />
                        {/*<Text style={styles.statsLabel}>{post.comments}</Text>*/}
                    </View>

                    <View style={styles.iconContainer}>
                        <Fontisto name={"share-a"} size={34} style={{ alignSelf: 'center' }} color="white" />
                        {/* <Text style={styles.statsLabel}>{post.shares}</Text> */}
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
                            <Text style={styles.songName}>{post.song.name}</Text>
                        </View>
                    </View>

                    <Image
                        style={styles.songImage}
                        source={{ uri: post.song.imageUri }} />
                </View>
            </View>
        </View>
    )
}

export default Post
