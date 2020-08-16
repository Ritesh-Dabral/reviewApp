import React from 'react'
import { View,Text,Image, StyleSheet } from 'react-native';
import { GlobalStyles,images } from '../styles/global'
import Card from '../shared/Card';

//when surrounded by ract-navigation-stack it passes a prop 'navigation' to all of them
//when receive obj from navigation, can be accessed by .getParam() method and their 'name'
function Review({navigation}) {
    //for accessing images dynamically
    const rating = navigation.getParam('rating');

    return (
        <View style = {GlobalStyles.container}>
            <Card>
                <Text style={{...GlobalStyles.textTitle,fontSize:20}}>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GamerZone Rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})