import { createSlice } from '@reduxjs/toolkit'

export const updateScreen = createSlice({
  name: 'forValueOnScreen',
  initialState: { textOnScreen: "", selectedOpearation: "", firstOperand:"", secondOperand:""},
  reducers: {
    updateValueOnScreen: (state, action) => {
        state.textOnScreen = state.textOnScreen+""+action.payload; //always happens
        if (state.selectedOpearation==="") {
          state.firstOperand=state.firstOperand+""+action.payload;
        }
        else{
          state.secondOperand=state.secondOperand+""+action.payload;
        }
    },
    setSelectedOperation: (state, action) => {
      if (state.firstOperand==="") { //No operators allowed before press any number
        alert("Please press any number first..!");
      }
      else{
        if (state.selectedOpearation!=="") {
          switch (state.selectedOpearation) {
            case "+": alert("Already selected opearation is Addition!"); break;
            case "-": alert("Already selected opearation is Subtraction!"); break;
            case "/": alert("Already selected opearation is Division!"); break;
            case "X": alert("Already selected opearation is Multiplication!"); break;
          }
        }
        else{
          state.textOnScreen = state.textOnScreen+""+action.payload;
          state.selectedOpearation = action.payload;
        }
      }
  },
  doCalculation: (state) => {
    if (state.firstOperand!==""&&state.secondOperand!=="") {
      switch (state.selectedOpearation) {
        case "+": state.textOnScreen=Number(state.firstOperand)+Number(state.secondOperand); break;
        case "-": state.textOnScreen=Number(state.firstOperand)-Number(state.secondOperand); break;
        case "/": state.textOnScreen=Number(state.firstOperand)/Number(state.secondOperand); break;
        case "X": state.textOnScreen=Number(state.firstOperand)*Number(state.secondOperand); break;
      }
      state.selectedOpearation="";
      state.firstOperand=state.textOnScreen;
      state.secondOperand="";
    }
    else{
      alert("Please follow the logical way of calculation !");
    }
  },
  clearScreen: (state) =>{
    state.textOnScreen="";
    state.selectedOpearation="";
    state.firstOperand="";
    state.secondOperand="";
  }
  }
})

export const getValueFromScreen = state => state.forValueOnScreen.textOnScreen
export const getSelectedOperation = state => state.forValueOnScreen.selectedOpearation
export const { updateValueOnScreen } = updateScreen.actions
export const { setSelectedOperation } = updateScreen.actions
export const { doCalculation } = updateScreen.actions
export const { clearScreen } = updateScreen.actions
export default updateScreen.reducer