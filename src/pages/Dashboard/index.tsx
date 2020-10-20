import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useAuth} from '../../hooks/';
const Dashboard: React.FC = () => {
  const {signOut} = useAuth();
  function handleSignOut() {
    // Mudar a informação de que o usuário esta logado
    signOut();
  }
  return (
    <View style={styles.signout}>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  signout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
