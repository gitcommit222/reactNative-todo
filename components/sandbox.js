import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Sandbox = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.boxOne}>One</Text>
        <Text style={styles.boxTwo}>Two</Text>
        <Text style={styles.boxThree}>Three</Text>
        <Text style={styles.boxFour}>Four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        backgroundColor: 'coral',
        padding: 10
    },
    boxTwo: {
        backgroundColor: 'lightblue',
        padding: 10
    },
    boxThree: {
        backgroundColor: 'gold',
        padding: 10
    },
    boxFour: {
        backgroundColor: 'violet',
        padding: 10
    }
});

export default Sandbox
