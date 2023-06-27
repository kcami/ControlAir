import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddDevices = () => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [brand, setBrand] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleAddDevice = () => {
    // Logic to add device goes here
    console.log('Adding device...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Device Name</Text>
      <TextInput
        style={styles.input}
        value={deviceName}
        onChangeText={setDeviceName}
      />
      <Text style={styles.label}>Device Type</Text>
      <TextInput
        style={styles.input}
        value={deviceType}
        onChangeText={setDeviceType}
      />
      <Text style={styles.label}>Brand</Text>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
      />
      <Text style={styles.label}>Add to:</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleOption,
            selectedRoom === 'bedroom' && styles.toggleOptionSelected,
          ]}
          onPress={() => setSelectedRoom('bedroom')}
        >
          <MaterialIcons
            name={selectedRoom === 'bedroom' ? 'check-circle' : 'radio-button-unchecked'}
            size={24}
          />
          <Text>Bedroom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleOption,
            selectedRoom === 'bathroom' && styles.toggleOptionSelected,
          ]}
          onPress={() => setSelectedRoom('bathroom')}
        >
          <MaterialIcons
            name={selectedRoom === 'bathroom' ? 'check-circle' : 'radio-button-unchecked'}
            size={24}
          />
          <Text>Bathroom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleOption,
            selectedRoom === 'livingroom' && styles.toggleOptionSelected,
          ]}
          onPress={() => setSelectedRoom('livingroom')}
        >
          <MaterialIcons
            name={selectedRoom === 'livingroom' ? 'check-circle' : 'radio-button-unchecked'}
            size={24}
          />
          <Text>Living Room</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddDevice}>
        <Text style={styles.addButtonLabel}>Add Device</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  toggleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  toggleOptionSelected: {
    backgroundColor: '#E6F4FF',
    borderRadius: 4,
  },
  addButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddDevices;
