import React,{useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet
    , TouchableWithoutFeedback, Keyboard
} from 'react-native'
import { GlobalStyles } from '../styles/global'
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm'
//when surrounded by ract-navigation-stack it passes a prop 'navigation' to all of them
function Home({navigation}) {
    const [modalOpen,setModalOpen] = useState(false);

    const [reviews,setReviews] = useState([
       {title:'One Piece', body:'Lorem Ipsum',rating:5,key:'1'},
       {title:'COD', body:'Lorem Ipsum',rating:3,key:'2'},
       {title:'Need For Speed', body:'Lorem Ipsum',rating:4,key:'3'} 
    ]);
    //handleLink
    const handleLink = (item)=>{
        navigation.navigate('Review',item);
        //now 'Review' is the name of another screen from 'routeStack.js'
        //can use 'navigation.push('Review')' also, works same way
    }

    //addRevies: adds review to our static review
    //passed down as prop to ReviewForm component and changes are reflected
    //back here
    const addReview = (review)=>{
        review.key = Math.random().toString();
        setReviews((currRev)=>[review,...reviews]);
        //close modal after that, method 1
        //setModalOpen(false);
    }

    // Modal are like pop ups and cover the whole screen
    //uses 'visible' prop

    //Modal is covered with TouchableWithoutFeedback, so that when use
    //clicks on empty space, the keyboard should get dismissed
    return (
        <View style = {GlobalStyles.container}>

            <Modal visible={modalOpen} animationType='slide' style={styles.modalContent}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            onPress={()=>setModalOpen(false)}
                            style = {{...styles.modalToggle,marginBottom:0,marginTop:20}}
                        />
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                onPress={()=>setModalOpen(true)}
                style = {styles.modalToggle}
            />
            <FlatList
                data={reviews}
                renderItem = {
                    ({item})=>(
                        <TouchableOpacity onPress={()=>handleLink(item)}>
                            <Card>
                                <Text>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                    )
                }
            
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalContent:{
        flex:1
    }
});
