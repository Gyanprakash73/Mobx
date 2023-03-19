import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

// actions
// reducers
// store
// store new state
// new state access

// store class
// obesrable

import {useIsFocused} from '@react-navigation/native';
import Notes from '../store/Notes';

const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const tempNotes = Notes.notes;
    console.log(tempNotes);
    setNotes(tempNotes);
  }, [isFocused]);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={notes}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 50,
                alignSelf: 'center',
                marginTop: 20,
                elevation: 5,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: (index = notes.length - 1 ? 20 : 0),
              }}>
              <Text>{item.title}</Text>
              <TouchableOpacity
                style={{position: 'absolute', right: 20, top: 10}}
                onPress={() => {
                  Notes.deleteNote(item.id);
                  setNotes(Notes.notes);
                }}>
                <Image
                  source={require('../delete.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          borderRadius: 30,
          backgroundColor: 'purple',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
        onPress={() => {
          navigation.navigate('AddNote');
        }}>
        <Text style={{color: '#fff'}}>Add New</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
