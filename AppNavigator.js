import {createStackNavigator} from 'react-navigation';
import Home from './views/Home';
import Tweets from './views/Tweets';

const AppNavigator = createStackNavigator({
        Home: {screen: Home},
        Tweets: {screen: Tweets}
    },
    {headerMode: 'none'}
);

export default AppNavigator;
