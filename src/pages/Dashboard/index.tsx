import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import AuthContext from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const {signOut} = useContext(AuthContext);
  function handleSignOut() {
    // Mudar a informação de que o usuário esta logado
    signOut();
  }
  return (
    <View style={styles.signin}>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  signin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
