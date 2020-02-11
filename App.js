import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreens from './src/screens/CreateScreens';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreens,
    Edit:EditScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);
const App = createAppContainer(navigator);

export default () => {
  return <Provider>
            <App />
        </Provider>
};