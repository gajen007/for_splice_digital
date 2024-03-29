import { useDispatch } from 'react-redux'
import { setSelectedOperation } from '../reducers/calcreducer'
function OperatorButton(props) {
  const dispatchClickedButtonValue = useDispatch();
    const ifClicked=()=>{
      dispatchClickedButtonValue(setSelectedOperation(props.buttonText))
    };
    return (<button className="
    bg-orange-500
    hover:bg-orange-700
    text-white
    font-bold
    py-2
    px-4
    rounded" onClick={ifClicked}>{props.buttonText}</button>);
  }
export default OperatorButton