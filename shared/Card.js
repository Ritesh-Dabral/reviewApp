import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

// props.children

//<Card>
//  <Text>yo</Text>
//  <Text>meow</Text>
//</Card>
//so when  using 'Card' component, all those within its tag, are passed to it as 'props'
//hence , props.children


function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width:1, height:1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
});