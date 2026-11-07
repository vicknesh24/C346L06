import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View, Text, Image } from 'react-native';

const Question = ({ question, imageUri, onValueChange }) => {
  return (
    <View>
      <Image 
        source={{ uri: imageUri }} 
        style={{ width: 400, height: 200, resizeMode: 'contain' }} 
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{question}</Text>
      <Picker
        style={{ backgroundColor: '#d3d3d3' }}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select an answer" value="" />
        <Picker.Item label="Toyota" value="Toyota" />
        <Picker.Item label="BMW" value="BMW" />
        <Picker.Item label="Mercedes-Benz" value="Mercedes-Benz" />
      </Picker>
      <Text></Text>
      <Text></Text>
    </View>
  );
};

export default Question;