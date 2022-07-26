import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Bottom from './bottom';

const CardComponent = ({
    item
}) => {
    
  return (
      <View style={[styles.container, { height: item.subOption ? 450 : 500 }]}>
        {item.subOption ? (
            <Image
                style={[styles.image, { height: item.subOption ? '52%' : '80%' }]}
                source={require('../../../assets/iphonePro.png')}
            />
        ) : (
            <Image
                style={[styles.image, { height: item.subOption ? '60%' : '80%' }]}
                source={require('../../../assets/makemytrip.png')}
            />
        )}
        <View style={styles.textContainer}>
        <View>
            <Text style={styles.headingText}> {item.headingText} </Text>
        </View>
        <View>
            <Text style={styles.boldBlackText}> {item.boldBlackText} </Text>
            <Text style={styles.greenHighlightedText}> {item.greenHighlightedText} </Text>
            {
                item.subOption &&
                <Bottom option1={item.option1} option2={item.option2} option3={item.option3} />
            }
        </View>
        
      </View>
    </View>
  )
};
const deviceWith = Math.round(Dimensions.get('window').width)
const radius = 20
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        borderRadius: radius,
        width: deviceWith - 35,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.50,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        width: deviceWith - 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
    },
    textContainer: {
        padding: 10,
    },
    headingText: {
        color: 'gray',
        fontSize: 12,
        textTransform: 'uppercase',
    },
    boldBlackText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    greenHighlightedText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
});