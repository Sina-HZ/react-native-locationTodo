
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './scenes/Home';
import AddTask from './scenes/addTask';
import TaskProvider from './context/taskProvider';

export const pages = createStackNavigator({
  Home,
  AddTask
},
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  })

  const AppContainer = createAppContainer(pages);


const App = () => {
  return (
    <TaskProvider>
      <AppContainer />
    </TaskProvider>
  );
};


export default App;
