import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from '../actions/actionsType';

// tasks = [] : chú ý : tham số truyền vào reducer(state hiện tại, action)
const taskReducer = (tasks = [], action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            // thêm vào một task mới : nghĩa là state đã được bổ sung thêm
            return [
                ...tasks,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    complete: false,
                }
            ]
        case TOGGLE_ONE_TASK:
            // thay đổi thuộc tính của một state đã có 
            return tasks.map(task =>
                (task.taskId === action.taskId)
                    ? { ...task, completed: !task.completed }
                    : task
            )

            // Xóa bỏ một state trong store 
        default:
            return tasks;
    }
}
export default taskReducer;