import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native';
import ScenarioButton from './ScenarioButton';

function Scenario({navigation}) {

  const [player, setPlayer] = useState('');
  const [sb1, setSb1] = useState('');
  const [sb2, setSb2] = useState('');
  const [sb3, setSb3] = useState('');
  const [sb4, setSb4] = useState('');
  const [sb5, setSb5] = useState('');
  const [sb6, setSb6] = useState('');
  const [sb7, setSb7] = useState('');
  const [sb8, setSb8] = useState('');
  const [sb9, setSb9] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  function getInitialPlayer() {

    const n = parseInt(Math.random() * 100);

    if (n % 2 == 0) setPlayer('O');
    else setPlayer('X'); 

  }

  function reset() {

    setPlayer('');
    setSb1('');
    setSb2('');
    setSb3('');
    setSb4('');
    setSb5('');
    setSb6('');
    setSb7('');
    setSb8('');
    setSb9('');
    setModalVisible(false);
    setModalMsg('');

  }

  function verifyResult(s1, s2, s3, s4, s5, s6, s7, s8, s9) {
    
    if ((s1 === 'X' && s2 === 'X' && s3 === 'X')
      || (s4 === 'X' && s5 === 'X' && s6 === 'X')
      || (s7 === 'X' && s8 === 'X' && s9 === 'X')
      || (s1 === 'X' && s4 === 'X' && s7 === 'X')
      || (s2 === 'X' && s5 === 'X' && s8 === 'X')
      || (s3 === 'X' && s6 === 'X' && s9 === 'X')
      || (s1 === 'X' && s5 === 'X' && s9 === 'X')
      || (s3 === 'X' && s5 === 'X' && s7 === 'X')) {

        setModalVisible(true);
        setModalMsg('Winner: Player X');

    } else if ((s1 === 'O' && s2 === 'O' && s3 === 'O')
      || (s4 === 'O' && s5 === 'O' && s6 === 'O')
      || (s7 === 'O' && s8 === 'O' && s9 === 'O')
      || (s1 === 'O' && s4 === 'O' && s7 === 'O')
      || (s2 === 'O' && s5 === 'O' && s8 === 'O')
      || (s3 === 'O' && s6 === 'O' && s9 === 'O')
      || (s1 === 'O' && s5 === 'O' && s9 === 'O')
      || (s3 === 'O' && s5 === 'O' && s7 === 'O')) {

        setModalVisible(true);
        setModalMsg('Winner: Player O');

    } else if (s1 !== '' && s2 !== '' && s3 !== ''
      && s4 !== '' && s5 !== '' && s6 !== ''
      && s7 !== '' && s8 !== '' && s9 !== '') {

        setModalVisible(true);
        setModalMsg('Game tied');

    }

  }

  function pressSb1() {

    let newSb = '';

    if (player === 'X') {
      newSb = 'X';
      setPlayer('O');
    } else {
      newSb = 'O';
      setPlayer('X');
    }

    setSb1(newSb);
    verifyResult(newSb, sb2, sb3, sb4, sb5, sb6, sb7, sb8, sb9);

  }

  function pressSb2() {

    let newSb = '';

    if (player === 'X') {
      newSb = 'X';
      setPlayer('O');
    } else {
      newSb = 'O';
      setPlayer('X');
    }

    setSb2(newSb);
    verifyResult(sb1, newSb, sb3, sb4, sb5, sb6, sb7, sb8, sb9);

  }

  function pressSb3() {

    let newSb = '';

    if (player === 'X') {
      newSb = 'X';
      setPlayer('O');
    } else {
      newSb = 'O';
      setPlayer('X');
    }

    setSb3(newSb);
    verifyResult(sb1, sb2, newSb, sb4, sb5, sb6, sb7, sb8, sb9);

  }

  function pressSb4() {

    let newSb = '';

    if (player === 'X') {
      newSb = 'X';
      setPlayer('O');
    } else {
      newSb = 'O';
      setPlayer('X');
    }

    setSb4(newSb);
    verifyResult(sb1, sb2, sb3, newSb, sb5, sb6, sb7, sb8, sb9);

  }

  function pressSb5() {

    let newSb = '';

    if (player === 'X') {
      newSb = 'X';
      setPlayer('O');
    } else {
      newSb = 'O';
      setPlayer('X');
    }

    setSb5(newSb);
    verifyResult(sb1, sb2, sb3, sb4, newSb, sb6, sb7, sb8, sb9);

  }

  function pressSb6() {

    let newSb = '';

    if (player === 'X') {
      newSb = 'X';
      setPlayer('O');
    } else {
      newSb = 'O';
      setPlayer('X');
    }

    setSb6(newSb);
    verifyResult(sb1, sb2, sb3, sb4, sb5, newSb, sb7, sb8, sb9);

  }

  function pressSb7() {

    let newSb = '';

    if (player === 'X') {
      newSb = 'X';
      setPlayer('O');
    } else {
      newSb = 'O';
      setPlayer('X');
    }

    setSb7(newSb);
    verifyResult(sb1, sb2, sb3, sb4, sb5, sb6, newSb, sb8, sb9);

  }

  function pressSb8() {

    let newSb = '';

    if (player === 'X') {
      newSb = 'X';
      setPlayer('O');
    } else {
      newSb = 'O';
      setPlayer('X');
    }

    setSb8(newSb);
    verifyResult(sb1, sb2, sb3, sb4, sb5, sb6, sb7, newSb, sb9);

  }

  function pressSb9() {

    let newSb = '';

    if (player === 'X') {
      newSb = 'X';
      setPlayer('O');
    } else {
      newSb = 'O';
      setPlayer('X');
    }

    setSb9(newSb);
    verifyResult(sb1, sb2, sb3, sb4, sb5, sb6, sb7, sb8, newSb);

  }

  function pressModalClose() {
    setModalVisible(false);
    setModalMsg('');
  }

  function pressModalNewGame() {
    reset();
    getInitialPlayer();
  }

  function pressFinish() {
    reset();
    navigation.navigate('Menu');
  }

  function pressRestart() {
    reset();
    getInitialPlayer();
  }

  useEffect(() => {
    reset();
    getInitialPlayer();
  }, []);

  return (
    <View style={styles.scenarioContainer}>
      <Text style={styles.player}>
        Player: {player}
      </Text>
      <View style={styles.scenarioCenter}>
        <View style={{ marginBottom: 80, flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ margin: 5 }}>
              <ScenarioButton status={sb1} action={pressSb1} />
            </View>
            <View style={{ margin: 5 }}>
              <ScenarioButton status={sb2} action={pressSb2} />
            </View>
            <View style={{ margin: 5 }}>
              <ScenarioButton status={sb3} action={pressSb3} />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ margin: 5 }}>
              <ScenarioButton status={sb4} action={pressSb4} />
            </View>
            <View style={{ margin: 5 }}>
              <ScenarioButton status={sb5} action={pressSb5} />
            </View>
            <View style={{ margin: 5 }}>
              <ScenarioButton status={sb6} action={pressSb6} />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ margin: 5 }}>
              <ScenarioButton status={sb7} action={pressSb7} />
            </View>
            <View style={{ margin: 5 }}>
              <ScenarioButton status={sb8} action={pressSb8} />
            </View>
            <View style={{ margin: 5 }}>
              <ScenarioButton status={sb9} action={pressSb9} />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 3 }}>
            <Pressable style={styles.finishButton} onPress={pressFinish}>
              <Text style={styles.finishButtonText}>
                Finish
              </Text>
            </Pressable>
          </View>
          <View style={{ flex: 3 }}>
            <Pressable style={styles.restartButton} onPress={pressRestart}>
              <Text style={styles.restartButtonText}>
                Restart
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {modalMsg}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Pressable style={styles.modalCloseBtn} onPress={pressModalClose}>
                <Text style={styles.modalCloseText}>Close</Text>
              </Pressable>
              <Pressable style={styles.modalNewGameBtn} onPress={pressModalNewGame}>
                <Text style={styles.modalNewGameTxt}>New Game</Text>
              </Pressable>
            </View>
          </View>
        </View>

      </Modal>
    </View>
  );

}

const styles = StyleSheet.create({
  scenarioContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  player: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  scenarioCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    padding: 20
  },
  finishButton: {
    backgroundColor: '#ff9999',
    borderRadius: 10,
    width: 150,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finishButtonText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#666666'
  },
  restartButton: {
    backgroundColor: '#99ff99',
    borderRadius: 10,
    width: 150,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restartButtonText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#666666'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalCloseBtn: {
    backgroundColor: '#dddddd',
    borderRadius: 10,
    width: 75,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  modalCloseText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#666666'
  },
  modalNewGameBtn: {
    backgroundColor: '#99ff99',
    borderRadius: 10,
    width: 75,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  modalNewGameTxt: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#666666'
  }
});

export default Scenario;
