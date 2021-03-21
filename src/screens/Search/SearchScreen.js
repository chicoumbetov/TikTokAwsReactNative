import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const SearchScreen = () => {
    console.log("SearchScreen");

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View >
                <Text>SearchScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen
