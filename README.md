# Cài đặt
react-native install redux
react-native install react-redux
#Tổng quan
    - Redux : là công cụ hỗ trợ để quản lý các state trong project. Thông thường các state sẽ được lưu trữ ở topLevel trong DOM nhưng không bao giờ là đủ cả. Do đó cần một công cụ để quản lý hiệu quả, giúp xử lý các khó khăn 
1. Store : 
    - Là nơi lưu trữ tất cả state của App. Store là duy  (giống với kho lưu trữ tiền của ngân hàng)
    - State (tiền) sẽ được lưu trữ vào bảo quản an toàn trong Store

>>> Nguyên tắc 1: Tất cả state của App được lưu trữ trong 1 đối tượng duy nhất và nó được quản lý bởi Store.
    Nghĩa là : từ việc thêm state, lấy state, thay đổi state đều phải thông qua store

    - Khi thực sự muốn cập nhật state của store phải trải qua các quy trình để thay đổi/ cập nhật state của ứng dụng 
2. Action 
>>> Nguyên tắc 2: State chỉ có thể đọc (ReadOnly). Cách duy nhất để có thể thay đổi state là phát ra một action : là một đối tượng mô tả những gì sẽ xảy ra. 

    - Vậy action là : một đối tượng để mô tả việc mà chúng ta sẽ thực hiện đối với State. Chú ý : chỉ là mô tả về hành động (giống với việc có ý định tới ngân hàng nhưng mà chúng ta vẫn chưa làm gì ở đây cả chỉ là ý tưởng mà chúng ta sẽ định thực hiện)
    - VD : Chẳng hạn ta có một ý định là rút tiền với lượng tiền là 10000$ được mô tả như sau
        { 
            type: "WITHDRAW_MONEY", // yêu cầu duy nhất khi tạo ra action là type
            amount: "$10,000", // ý định là rút ra một lượng tiền là 10000$
        }
3. Dispatch : Vậy làm sao để thay đổi và cập nhật state ?    
    - Đơn giản là gửi đi một action bằng lệnh dispatch (gửi đi)
4. Reducer giữ vai trò gì ? 
    - Như đã biết Store là nơi lưu trữ State của cả ứng dụng (kho chứa tiền)
    - Action (ý tưởng) : là một đối tượng được sử dụng để mô tả xem ta sẽ làm gì (ý định là đi rút tiền)
    - Dispatch giống với việc ta đi bộ từ nhà tới ngân hàng >> đến với ý định là rút tiền . Nhưng không phải vào thẳng Store (kho tiền) để lấy tiền. Vậy phải làm sao ???

    - Ta sẽ sử dụng Reducer(đóng vai trò như người thu ngân) : ta nói cho reducer ý định của mình và reducer sẽ thực hiện việc rút tiền, thay đổi số tiền của mình, nếu hết thì hỏi lại ... Tóm lại là Reducer sẽ là thằng nhận ý tưởng (action) và sẽ xử lý việc đó.

    - Dispatch(gửi đi) : là việc mà ta nói cho Reducer về ý định của mình Action

    - Luồng đi sẽ như sau : Action -> Dispach -> Reducer -> Store 

    - Chú ý : Reducer nhận action rồi thay đổi store : nghĩa là nó trả về một state mới
>>> Nguyên lý 3: Để mô tả việc state trong tree thay đổi như thế nào bởi các action, bạn phải viết hàm reducer dưới dạng pure thuần khiết

# Ví dụ minh họa step-by-step
    Bước 1: Loại bỏ các state trong các component và lưu trữ nó vào trong store

    Bước 2: Tạo ra một store nơi sẽ lưu trữ State bằng việc
        import { createStore } from "redux"; //an import from the redux library
        const store = createStore(reducer);  // tham số duy nhất cần để ý là Reducer
    - Reducer (nhân viên) : khi tạo ra Store thì cần phải thuê nhân viên >> là việc tất yếu
    - Reducer và Store : luôn luôn đồng bộ với nhau. >> do đó tham số duy nhất khi tạo store là đi thuê nhân viên (reducer)

    Bước 3: Reducer trong redux nhận state, và action (giống việc bạn có 2000$ trong kho (state), giờ muốn rút ra 10000$ (action) => do đó phải nói cho reducer biết state hiện tại và action).
    Vậy tham số truyền vào reducer khi nào ? Chính là khi mà ta gọi cái hàm createStore(reducer) >>> nó tự làm cho mình rồi

    function createStore(reducer) {// trích từ nguồn của của Redux
    var state;

    function dispatch(action) {
        state = reducer(state, action) => Chính là nó

    }
    
    Bước 4: Tạo ra Reducer (vì ta đã tạo đâu)
    - Ta luôn có một tham số gọi là tham số mặc định. Chẳng hạn khi bạn tạo tài khoản ở ngân hàng kèm theo gửi 500$ . Nếu không thì bạn chả liên quan gì tới store đó cả. Đó gọi là initialState.

    >> Hoàn thành việc tạo ra một store

    Bước 5: Sau khi tạo xong Store() >> ta sẽ có 3 hàm để sử dụng
    1. getState() : trả về đối tượng lưu trữ toàn bộ state của chúng ta
    >> Vậy đây kết thúc một ứng dụng siêu nhỏ. Chưa có gì cả
# Ví dụ (Tiếp)
    - Chúng ta muốn state được quản lý bởi store và store là nơi duy nhất lưu trữ state mà chúng ta tin tưởng. Do đó không thể sử dụng hàm setState như bình thường được vì setState là đổi state của Component đó chứ không phải của store.
    - Quay trở lại ban đầu khi đến store ta phải dispatch (gửi) một action cho reducer xử lý
    reducer(action, state) => trả về một state mới và được lưu trữ lại trong store
    - Câu hỏi : làm sao để tạo ra các action ?
        + Chẳng hạn hôm qua bạn rút 8000$
        + Hôm nay muốn rút 10000$ >> cùng là một action nhưng số tiền thay đổi
        + Do đó action không thể cố định mà phải tạo ra action nhưng bằng cách nào ? Đơn giản là tạo ra một đối tượng mà yêu cầu duy nhất là nó phải có một trường dữ liệu đặc biệt là type: mô tả hành động mà ta muốn làm.

    - Một action cơ bản và thông dụng nhất mà mọi người thường như sau :
    {
        type: "rutTien", // chứa tên của hành động mà ta muốn thực hiện
        payload: {
            // tất cả trường thông tin khác được đặt trong đây
            amount: "2000$" ,
        }
    }

    - Reducer sẽ nhận action và xử lý reducer(state, action);
    và đây là một reducer hoàn chỉnh 

    function reducer (state, action) {

	switch (action.type) {
		 case "gửi tiền":
			//do something
			break;
		case "rút tiền":
			 //do something
			break;
		default: // chẳng làm gì cả, chỉ đơn giản là xem còn bao tiền
			return state;
			 }
    } 

    Bước 6: Tạo action bằng create action
    Bước 7: Để cập nhật và thay đổi state trong store gọi hàm store.dispatch(action))
        Reducer nhận được yêu cầu và xử lý yêu cầu
# Hướng dẫn học redux qua ví dụ
1. Chú ý 
    - Action
        + Cấu trúc của Action là như thế nào
        + Làm sao để tạo ra một action
    - Reducer
    - Container
    - Store
    - Dispatch
2. Luồng đi của hàm khi gọi

3. Chi tiết

4. Các vấn đề khi làm việc với redux
    - Làm sao để đọc state trong Store
    - Làm sao để thay đổi/ cập nhật state trong store

# Redux Saga : nâng cao


