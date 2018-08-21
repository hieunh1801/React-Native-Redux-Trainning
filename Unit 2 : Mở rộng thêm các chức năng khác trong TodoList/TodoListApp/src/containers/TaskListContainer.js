import { connect } from 'react-redux';
import TaskListComponent from '../conponents/TaskListComponent';

const mapStateToProps = (state) => {
    return {
        tasks: !state.taskReducer ? [] : state.taskReducer
    }
}
const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;