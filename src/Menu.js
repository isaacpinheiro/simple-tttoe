import { StyleSheet, View, Text, Pressable } from 'react-native';

function Menu({navigation}) {

  function pressStart() {
    navigation.navigate('Scenario');
  }

  function pressInfo() {
    navigation.navigate('Info');
  }

  return (
    <View style={styles.menuContainer}>
      <View style={{ marginBottom: 20 }}>
        <Pressable style={styles.menuButton} onPress={pressStart}>
          <Text style={styles.menuButtonText}>Start</Text>
        </Pressable>
      </View>
      <View>
        <Pressable style={styles.menuButton} onPress={pressInfo}>
          <Text style={styles.menuButtonText}>Info</Text>
        </Pressable>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  menuButton: {
    backgroundColor: '#ffff00',
    borderRadius: 10,
    width: 150,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuButtonText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#666666'
  }
});

export default Menu;
