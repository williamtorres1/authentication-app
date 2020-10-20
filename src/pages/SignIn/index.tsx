import React, {useContext} from 'react';

import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {signIn} from '../../services/auth';
import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {
  const {signed} = useContext(AuthContext);
  console.log(signed);
  async function handleSignIn() {
    const response = await signIn();
    console.log(response);
  }
  return (
    <View style={styles.signin}>
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={{color: 'blue'}}>SignIn</Text>
      </TouchableOpacity>
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
