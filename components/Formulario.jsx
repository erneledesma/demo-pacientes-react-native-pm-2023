import { Text, TextInput, View, StyleSheet } from 'react-native';

const Formulario = () => {
    return (
        <>
        <View style={styles.formulario}>
            <Text style={styles.label}>Formulario aqui</Text>
            <TextInput
                style={styles.input}
                />
        </View>
        </>
     );
}
 
const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderStyle: 'solid',
        borderWidth: 1
    }
})
export default Formulario;
