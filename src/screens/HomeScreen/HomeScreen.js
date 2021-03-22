import React, { useEffect, useState } from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import Post from '../../components/Post/Post';
import styles from './styles';

import { API, graphqlOperation } from 'aws-amplify'

//import posts from '../../../data/posts';
import { listPosts } from '../../graphql/queries';

const HomeScreen = () => {
    console.log("Home")
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            //fetch all the posts
            try {
                const response = await API.graphql(graphqlOperation(listPosts))
                //console.log(response.data.listPosts.items)
                setPost(response.data.listPosts.items);
            } catch (error) {
                console.error(error)
            }
        }

        fetchPost();
    }, [])
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={post}
                renderItem={({item}) => <Post post={item} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlignment={'end'}
                decelerationRate={"fast"}
            />
        </View>
    )
}

export default HomeScreen;