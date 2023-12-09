import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/Menu';
import Info from './src/Info';
import Scenario from './src/Scenario';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name="Menu" component={Menu} options={{ title: 'Simple Tic Tac Toe' }} />
        <Stack.Screen name="Info" component={Info} options={{ title: 'Simple Tic Tac Toe' }} />
        <Stack.Screen name="Scenario" component={Scenario} options={{ title: 'Simple Tic Tac Toe' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;