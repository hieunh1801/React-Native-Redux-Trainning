import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from './actionsType';
let taskId = 0;

/**
 *  Action : là một đối tượng mô tả ý định mà ta sẽ thực hiện
 *  Với ý định ADD_NEW_TASK : ta muốn thêm một task : tuy nhiên có những trường thông tin khác ta muốn thêm nhưng không cố định : VD taskName ...
 *  >> do đó ta sử dụng một hàm để tạo ra Action và trả về là một đối tượng Action
 */


export const addNewTask = (inputTaskName) => {
    // Action mô tả ý định ta muốn thêm một task mới 
    // Thông tin bao gồm như dưới 
    return {
        type: ADD_NEW_TASK, // ý định : Thêm một task mới
        taskId: taskId++, // thông tin là taskId
        taskName: inputTaskName, // thông tin : tên của task
    }
}

export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK, // chạm vào một task và thay đổi trạng thái của nó 
        taskId: taskId, // ở đây ta cần thông tin là id của task đó 
    }
}