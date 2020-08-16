import React from 'react'
import { View, Button,TextInput,Text} from 'react-native'
import { GlobalStyles } from '../styles/global'
import { Formik } from 'formik';
import * as yup from 'yup';

//yup is used to add set of rules for form validation
//yup also passes errors to Formik which can be accessed 
//using formik props.error.<name of field>

const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating:yup.string().required()
            .test('isNum1to5','Rating must be a number 1 - 5',(val)=>{
                return parseInt(val)<6 && parseInt(val)>0
            })
            //test here takes 3 parameters, a 'name', 
            //message to show on receiving 'false'
            //actual function containing condition
})

//Formik creates and tracks values of form within it
//initial values: takes an obj, and manages the key-value pairs
//onSubmit: have access to all the values of key-pair values

function ReviewForm({addReview}) {
    return (
        <View style={GlobalStyles.container}>
            <Formik
                initialValues = {
                    {
                        title: '',
                        body: '',
                        rating: ''
                    }
                }
                
                //passes data to yup's reviewschema and matches with
                //title,body,rating
                validationSchema={ReviewSchema}

                onSubmit = {(values,actions)=>{
                    //actions have various methods,one of them is to reset
                    // form
                    actions.resetForm();
                    //send data UP on the tree to Home component
                    addReview(values);
                }}
            >
                {
                    (props)=>(
                        <View>
                            <TextInput
                                style={GlobalStyles.input}
                                placeholder='Review Title'
                                onChangeText = {props.handleChange('title')}
                                value = {props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={GlobalStyles.errorText}>
                                {props.touched.title && props.errors.title}
                            </Text>
                            
                            <TextInput
                                multiline
                                style={GlobalStyles.input}
                                placeholder='Review Body'
                                onChangeText = {props.handleChange('body')}
                                value = {props.values.body}
                                onBlur={props.handleBlur('body')}
                            />
                            <Text style={GlobalStyles.errorText}>
                                {props.touched.body && props.errors.body}
                            </Text>

                            <TextInput
                                style={GlobalStyles.input}
                                placeholder='Rating (1-5)'
                                onChangeText = {props.handleChange('rating')}
                                value = {props.values.rating}
                                keyboardType='numeric'
                                onBlur={props.handleBlur('rating')}
                            />
                            <Text style={GlobalStyles.errorText}>
                                {props.touched.rating && props.errors.rating}
                            </Text>
                            
                            <Button
                                title='submit'
                                color='coral'
                                onPress={props.handleSubmit}
                            />
                        </View>
                    )
                }
            </Formik>
        </View>
    )
}

export default ReviewForm
