import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import delivery from '../../../assets/delivery.png';
import gift from '../../../assets/gift.png';
import charger from '../../../assets/charger.png';

const Bottom = ({option1, option2, option3}) => {
    
  return (
    <View style={styles.optionsContainer}>
        <View style={styles.option}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/delivery.png')}
                    style={styles.image}
                />
            </View>
            <Text style={{color:'black', fontSize: 7}}>{option1}</Text>
        </View>
        <View style={styles.option}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/charger.png')}
                    style={styles.image}
                />
            </View>
            <Text style={{ color: 'black', fontSize: 7 }}>{option2}</Text>
        </View>
        <View style={styles.option}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/gift.png')}
                    style={styles.image}
                />
            </View>
            <Text style={{ color: 'black', fontSize: 7 }}>{option3}</Text>
        </View>
    </View>
  )
};

export default Bottom

const styles = StyleSheet.create({
    optionsContainer: {
        paddingTop: 15,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'space-between',
    },
    option: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: 'lightgrey',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    image: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
})