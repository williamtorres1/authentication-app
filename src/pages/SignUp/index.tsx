import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';

const SignUp: React.FC = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize="words"
          autoCompleteType="name"
          returnKeyType="next"
          placeholder="Nome Completo"
          placeholderTextColor="#E1E1E1"
          onSubmitEditing={() => {}}
        />

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="E-mail"
          placeholderTextColor="#E1E1E1"
          onSubmitEditing={() => {}}
        />

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          returnKeyType="go"
          placeholder="Senha"
          placeholderTextColor="#E1E1E1"
          onSubmitEditing={() => {}}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 25,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff',
    borderRadius: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    borderRadius: 18,
    marginBottom: 20,
  },
  buttonText: {
    color: '#7159C1',
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default SignUp;
