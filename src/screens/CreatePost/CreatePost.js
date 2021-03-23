import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import styles from './styles';
import { createPost } from '../../graphql/mutations';

import { Storage, API, graphqlOperation, Auth } from 'aws-amplify';

import { useRoute, useNavigation } from '@react-navigation/native';
//import HomeScreen from '../HomeScreen/HomeScreen';

const CreatePost = () => {
    const [description, setDescription] = useState("");
    const [videoKey, setVideoKey] = useState(null);

    const route = useRoute();
    const navigation = useNavigation();

    const uploadToStorage = async (imagePath) => {
        try {
            // upload video to cloud
            const response = await fetch(imagePath);

            const blob = await response.blob();

            const filename = `${uuidv4()}.mp4`;
            const s3Response = await Storage.put(filename, blob);

            console.log(s3Response);

            setVideoKey(s3Response.key)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        uploadToStorage(route.params.videoUri)
    }, [])

    onPublish = async () => {
        console.log(" onPublish of CreatePost ")
        //create post in the database (API)
        if (!videoKey) {
            console.warn("Video is not yet uploaded");
            return;
        }

        try {

            const userInfo = await Auth.currentAuthenticatedUser();

            const newPost = {
                videoUri: videoKey,
                description: description,
                userID: userInfo.attributes.sub,
                songID: 'a1d70586-4d2e-411d-8c5f-2414eb53b676',
            };

            const response = await API.graphql(
                graphqlOperation(
                    createPost,
                    { input: newPost }
                )
            )

            navigation.navigate("Home", {screen: "HomeScreen" })

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.container}>

            <TextInput
                value={description}
                numberOfLines={5}
                style={styles.textInput}
                onChangeText={setDescription}
                placeholder={"Description"}
            />

            <TouchableOpacity onPress={onPublish} >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Publish</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default CreatePost;