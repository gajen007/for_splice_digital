import { useDispatch } from 'react-redux'
import { updateValueOnScreen } from '../reducers/calcreducer'
function PrimaryButton(props) {
    const dispatchClickedButtonValue = useDispatch();
    const ifClicked=()=>{
      dispatchClickedButtonValue(updateValueOnScreen(props.buttonText))
    };
    return (<button className="
    bg-blue-500
    hover:bg-blue-700
    text-white
    font-bold
    py-2
    px-4
    rounded" onClick={ifClicked}>{props.buttonText}</button>);
  }
export default PrimaryButton