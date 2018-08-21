/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
AddComponent to show TextInput, "add" button, 
*/
import React, { Component } from 'react';
import {
    View, Image,
    TouchableHighlight,
    TextInput
} from 'react-native';

/**
 *  Đây không hoàn toàn là một Representation Component : Tuy nhiên vì ở đây ta cũng không quan trọng lắm nên vẫn gộp 2 component làm 1 được
 *  Tạo ra một vùng nhập dữ liệu và phím add để thêm 
 *  Dữ liệu được nhập sẽ lưu vào trong state của Component
 * 
 */
export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: ''
        });
    }
    render() {
        return (
            <View style={{
                backgroundColor: 'tomato',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 64
            }}>
                <TextInput style={{
                    height: 40,
                    width: 300,
                    margin: 10,
                    padding: 10,
                    borderColor: 'white',
                    borderWidth: 1,
                    color: 'white'
                }}
                    keyboardType='default'
                    placeholderTextColor='white'
                    placeholder='Enter task name'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ newTaskName: text });
                        }
                    }
                />
                <TouchableHighlight
                    style={{ marginRight: 10 }}
                    underlayColor='blue'
                    onPress={() => {
                        if (!this.state.newTaskName.trim()) {
                            return;
                        }
                        //Call click event => use "Container"
                        // this.props.onClickAdd : là một props 
                        // tuy nhiên ở trong Container : ta định nghĩa cho onClickAdd map tới Dispatch rồi : nghĩa là ta đã gọi tới dispatch và muốn thay đổi
                        this.props.onClickAdd(this.state.newTaskName);
                        /**
                            Mục đích là ấn vào phím để thêm một task mới 
                         */
                    }}
                >
                    <Image
                        style={{ width: 35, height: 35 }}
                        source={require('../images/icons8-plus-50.png')}

                    />
                </TouchableHighlight>

            </View>);
    }
}