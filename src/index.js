import App from "./App";
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import Store from "./store/Store";
ReactDOM.render(<Provider store={Store}><App/></Provider>,document.getElementById("root"))
