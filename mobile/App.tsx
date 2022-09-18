import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string;
  stl: object;
}

function Button(props: ButtonProps){
  return (
    <TouchableOpacity>
      <Text style={props.stl}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World from FindDuo Mobile</Text>
      <Button title='Opa' stl={styles.btnTitle}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    marginBottom: 10
  },
  btnTitle: {
    fontSize: 20,
    borderColor: '#111',
    borderRadius: 5,
  }
});
