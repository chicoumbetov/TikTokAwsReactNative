import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
    
    return (
        <View>
            <Text>
                Home screen
                  🎳 <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </Text>
        </View>
    )
}

export default Home
