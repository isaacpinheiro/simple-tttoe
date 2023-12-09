import { StyleSheet, View, Text, Pressable } from 'react-native';

function Info({navigation}) {

  function pressBack() {
    navigation.navigate('Menu');
  }

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.text1}>
        A simple Tic Tac Toe game developed using React Native for sudy purposes.
      </Text>
      <Text style={styles.text2}>
        Developed by Isaac Pinheiro.
      </Text>
      <View style={{ marginTop: 50 }}>
        <Pressable style={styles.infoButton} onPress={pressBack}>
          <Text style={styles.infoButtonText}>
            Back
          </Text>
        </Pressable>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  text1: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16
  },
  text2: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16
  },
  infoButton: {
    backgroundColor: '#ffff00',
    borderRadius: 10,
    width: 150,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoButtonText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#666666'
  }
});

export default Info;
