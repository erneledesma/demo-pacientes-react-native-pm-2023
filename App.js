import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cita from './components/Cita';


export default function App() {

  //definir el state de citas
  const [citas, setCitas] = useState([
    { id: "1", paciente: 'Hook', propietario: 'Juan', sintomas: 'No come' },
    { id: "2", paciente: 'Redux', propietario: 'Itzel', sintomas: 'No duerme' },
    { id: "3", paciente: 'Native', propietario: 'Eduardo', sintomas: 'No canta'}
  ]);

  return (
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
            <FlatList
              data={citas}
              renderItem={ ({ item }) => <Cita item={item} /> }
              keyExtractor={ cita => cita.id }
        />
      </View> 
  );
}


const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  titulo: {
    color: '#FFF',
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});




