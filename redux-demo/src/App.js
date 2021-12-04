import './App.css';
import {increment, decrement} from "./action";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((reduxState) => {
        return reduxState.count.value;
    });
    const handelIncrement = (event) => {
        dispatch(increment());
    }
    const handelDecrement = (event) => {
        dispatch(decrement());
    }
    return (
        <div className="App">
            <div className="container">
                <button onClick={handelDecrement}>-</button>
                <h3>{count}</h3>
                <button onClick={handelIncrement}>+</button>
            </div>
        </div>
    );
}

export default App;
