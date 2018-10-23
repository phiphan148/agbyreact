import {createStackNavigator} from 'react-navigation';
import Home from './views/Home';

const AppNavigator = createStackNavigator({
        Home: {screen: Home}
    },
    {headerMode: 'none'}
);

export default AppNavigator;
