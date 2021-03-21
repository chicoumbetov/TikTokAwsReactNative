import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import Post from '../../components/Post/Post';
import styles from './styles';

import posts from '../../../data/posts';

const HomeScreen = () => {
    console.log("Home")
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={posts}
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