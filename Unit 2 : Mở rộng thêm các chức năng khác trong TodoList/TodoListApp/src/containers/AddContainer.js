import AddComponent from '../conponents/AddComponent';
import { addNewTask } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        // Trong addComponent ta không muốn dùng lấy dữ liệu ra để hiển thị nên không cần viết gì cả
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onClickAdd : trở thành một props của AddComponent
        // gọi tới dispatch và truyền vào tham số là một actionCreator là addNewTask(inputTaskName)
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName));
        }
    };
}

const AddContainer = connect(mapStateToProps, mapDispatchToProps)(AddComponent);
export default AddContainer;