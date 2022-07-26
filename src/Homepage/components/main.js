import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native'
import React from 'react';
import CardComponent from './card';
import DATA from '../../../assets/data';

const Main = () => {
  return (
    <View style={{paddingTop: 40, paddingBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>
                    Welcome back,
                </Text>
                <Text style={styles.boldBlackText}>
                    Rahul Kumar
                </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
                <Image 
                    style={{ width: 20, height: 20, borderRadius: 15}}
                    source={require('../../../assets/tIcon.png')}
                />
            </View>
        </View>
        <FlatList 
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={CardComponent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
            return (
                <View
                    style={{
                        padding: 10
                    }} />
            );
        }}
      />
      {/* <Text style={{color: 'black', justifyContent: 'center', alignItems: 'center'}}>Hola! Everyone</Text> */}
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    mainContainer: {
        padding: 35,
        marginBottom: 25
    },
    textContainer: {
        paddingVertical: 20,
    },
    boldBlackText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    headingText: {
        color: 'gray',
        fontSize: 15,
        textTransform: 'uppercase',
    },
})