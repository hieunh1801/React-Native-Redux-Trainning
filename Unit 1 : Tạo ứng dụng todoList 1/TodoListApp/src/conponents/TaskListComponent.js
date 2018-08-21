/**
 *  Mục đích là để hiển thị ra các thông tin của task ra 
 *  >> Cần sử dụng mapStateToProps
 */

import { FlatList, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';

// item render được mô tả trong TaskItem nhưng đã connect tới Redux >> do đó ta sử dụng TaskItemContainer (). Mặt khác bản thân TaskItemContainer sau khi connect với TaskListComponent cũng trở thành một component
import TaskItemContainer from '../containers/TaskItemContainer';


export default class TaskListComponent extends Component {


    render() {
    return (
        <FlatList
            sytle={{ flex: 1, backGroundColor: 'gray', justifyContent: 'center', alignItems: 'center', }}
            data={this.props.tasks} // cần có dữ liệu đọc trong store >> cần mapState 
            renderItem={({ item }) => {
                return (
                    <TaskItemContainer taskName={item.taskName} ></TaskItemContainer>
                )
            }}
            keyExtractor={(item) => item.taskId}
        >
        </FlatList>
    );
    }
   
}
