import { StyleSheet, View, Text, Pressable } from 'react-native';

function ScenarioButton(props) {
  return (
    <View>
      <View style={{ display: (props.status === '' ? 'flex' : 'none') }}>
        <Pressable style={styles.button} onPress={props.action}></Pressable>
      </View>
      <View style={[styles.xView, { display: (props.status === 'X' ? 'flex' : 'none') }]}>
        <Text style={styles.xText}>X</Text>
      </View>
      <View style={[styles.oView, { display: (props.status === 'O' ? 'flex' : 'none') }]}>
        <Text style={styles.oText}>O</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffff00',
    width: 100,
    height: 100,
    borderRadius: 10
  },
  xView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#666666'
  },
  xText: {
    fontWeight: 'bold',
    fontSize: 70,
    color: '#33aa33'
  },
  oView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#666666'
  },
  oText: {
    fontWeight: 'bold',
    fontSize: 70,
    color: '#aa3333'
  }
});

export default ScenarioButton;
