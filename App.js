import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/Home.js'
import MapScreen from './screens/Map.js'
import ConfirmScreen from './screens/Confirm.js';
import TravelScreen from './screens/Travel.js';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Map: {screen: MapScreen},
  Confirm: {screen: ConfirmScreen},
  Travel: {screen: TravelScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
