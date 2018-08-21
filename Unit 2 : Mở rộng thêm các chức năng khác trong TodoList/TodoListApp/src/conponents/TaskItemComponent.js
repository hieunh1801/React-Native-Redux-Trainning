import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

/**
 *  Đây là một Representation Component : không quan tâm tới redux ở đây
 * Tuy nhiên vì nó muốn sử dụng State trong store nên sẽ phải có một Container riêng của mình 
 *  Chỉ quan tâm tới style , vị trí, kích thước và không có hành động gì
 *  Mỗi item của List đều có thể ấn được 
 */
export default class TaskItemComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        // Khi có một việc gì đó muốn thực hiện ở đây thì tạo một container và định nghĩa nó như một props  
                    }
                    }
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text>
                        {this.props.taskName}
                    </Text>
                </TouchableOpacity>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginHorizontal: 15, 
        height: 150, 
        elevation: 2, 
        backgroundColor: 'white', 
        marginBottom: 2, 
        marginTop: 10,
        
        

    }
})  