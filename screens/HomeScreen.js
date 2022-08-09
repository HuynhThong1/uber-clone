import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
// const uberLogo = require('../assets/uber.png');
import uberLogo from '../assets/uber.png';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={uberLogo}
                />
                <NavOptions />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
        textAlign: "center"
    },
})
