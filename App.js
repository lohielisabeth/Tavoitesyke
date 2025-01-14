import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState({ lower: 0, upper: 0 });
  const calculate = () => {
    const ageNumber = parseFloat(age);
    const lowerLimit = Math.round(220 - ageNumber) * 0.65;
    const upperLimit = Math.round (220 - ageNumber) * 0.85;
    setLimits({ lower: lowerLimit, upper: upperLimit });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType="numeric"
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>
      {limits.lower} - {limits.upper}
      </Text>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '20',
    justifyContent: 'center',
  },
  field: {
    margin: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor:'cyan', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
