import { useDispatch } from 'react-redux'
import { doCalculation } from '../reducers/calcreducer'
function EqualButton(props) {
  const dispatchClickedButtonValue = useDispatch();
    const ifClicked=()=>{
      dispatchClickedButtonValue(doCalculation())
    };
    return (<button className="
    bg-green-500
    hover:bg-green-700
    text-white
    font-bold
    py-2
    px-4
    rounded" onClick={ifClicked}>{props.buttonText}</button>);
  }
export default EqualButton