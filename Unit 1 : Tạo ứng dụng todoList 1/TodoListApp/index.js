/** @format */

import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { name as appName } from './app.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './src/reducers';
import TaskManagerComponent from './src/conponents/TaskManagerComponent';

let store = createStore(Reducers); // tham số thứ 2 là state mặc định : không có nên không truyền gì
// const App = () => {
//     <Provider store={store}>

//         <Text>Hello</Text>
//     </Provider>
// }
export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <TaskManagerComponent />
            </Provider>
        );
    }
}
AppRegistry.registerComponent(appName, () => App);

