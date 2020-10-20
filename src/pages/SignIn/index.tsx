import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {
  const {signed, signIn} = useContext(AuthContext);
  console.log(signed);
  function handleSignIn() {
    // Mudar a informação de que o usuário esta logado
    signIn();
  }
  return (
    <View style={styles.signin}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  signin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
