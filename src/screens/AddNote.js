import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Notes, {notesStore} from '../store/Notes';

const AddNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="Enter Title"
        style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 50,
          paddingLeft: 20,
        }}
        value={title}
        onChangeText={txt => setTitle(txt)}
      />
      <TextInput
        placeholder="Enter Description"
        style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 50,
          paddingLeft: 20,
        }}
        value={desc}
        onChangeText={txt => setDesc(txt)}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'purple',
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          Notes.addNote({title, desc});
          navigation.goBack();
        }}>
        <Text style={{color: '#fff'}}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNote;
