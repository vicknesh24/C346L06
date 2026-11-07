import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Question from './components/Question';

const MyApp = () => {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <Text></Text>
            <Text></Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>🚗 Car Logo Quiz 🚗</Text>

            <Text></Text>

            {/* Question 1 */}
            <Question 
                question="What car logo is this?"
                imageUri="https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png"
                onValueChange={(value) => setAns1(value)}
            />

            {/* Question 2 - Direct PNG link for BMW */}
            <Question 
                question="What car logo is this?"
                imageUri="https://image.pngaaa.com/85/473085-middle.png"
                onValueChange={(value) => setAns2(value)}
            />

            {/* Question 3 - Direct PNG link for Mercedes */}
            <Question 
                question="What car logo is this?"
                imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpeweWgGRkwTwOwbN1HlpQSb56mtZ5DrwyTZjWzb1yw&s=10"
                onValueChange={(value) => setAns3(value)}
            />

            <Text></Text>

            {/* Submit Answers Button with if-else logic */}
            <TouchableOpacity onPress={() => {
                let score = 0;
                
                if (ans1 === 'Toyota') {
                    score = score + 1;
                } else {
                }

                if (ans2 === 'BMW') {
                    score = score + 1;
                } else {
                }

                if (ans3 === 'Mercedes-Benz') {
                    score = score + 1;
                } else {
                }

                Alert.alert('Quiz Results', 'You have ' + score + ' correct answers!');
            }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', padding: 10, backgroundColor: 'lightgreen' }}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>

            <Text></Text>
            <Text></Text>
        </ScrollView>
    );
};

export default MyApp;