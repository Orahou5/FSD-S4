import { useReducer } from "react";
import BaseNumberInput from "./components/BaseNumberInput";

const initialState = {
  decimal: "",
  binary: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DEC_TO_BIN":
      if (action.value.trim() === "") return { ...state, binary: "", decimal: "" };
      if (!/^\d+$/.test(action.value)) return { ...state };
      
      return {
        ...state,
        binary: parseInt(action.value, 10).toString(2),
        decimal: action.value
      }
    case "BIN_TO_DEC":
      if (action.value.trim() === "") return { ...state, binary: "", decimal: "" };
      if (!/^[01]+$/.test(action.value)) return { ...state };

      return {
        ...state,
        decimal: parseInt(action.value, 2).toString(10),
        binary: action.value
      }
    default:
      return { ...state };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>DEC ↔️ BIN</h1>
      <label >Decimal</label>
      <BaseNumberInput onChangeBase={(value) => dispatch({ type: 'DEC_TO_BIN', value: value })} value={state.decimal} />
      <label >Binary</label>
      <BaseNumberInput onChangeBase={(value) => dispatch({ type: 'BIN_TO_DEC', value: value })} value={state.binary} />
    </>
  );
}

export default App;
