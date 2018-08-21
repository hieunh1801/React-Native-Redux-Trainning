
import { toggleTask } from '../actions';

import TaskItemComponent from '../conponents/TaskItemComponent';

import { connect } from 'react-redux';

// Ta chưa muốn taskItem làm gì cả nên không làm gì ở đây
const TaskItemContainer = connect()(TaskItemComponent);
export default TaskItemContainer;