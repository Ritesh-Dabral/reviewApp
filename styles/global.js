import {StyleSheet} from 'react-native'

export const GlobalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:40,
    },
    textTitle:{
        fontFamily : 'nunito-bold',
        fontSize: 25
    },
    paragraph:{
        marginVertical:20
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        fontFamily: 'nunito-regular',
        marginVertical:10
    },
    errorText:{
        color:'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'  
    }
})

export const images = {
    ratings: {
        '1':require('../assets/rating-1.png'),
        '2':require('../assets/rating-2.png'),
        '3':require('../assets/rating-3.png'),
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png'),
    }
}