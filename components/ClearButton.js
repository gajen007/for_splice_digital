import { useDispatch } from 'react-redux'
import { clearScreen } from '../reducers/calcreducer'
function ClearButton() {
  const dispatchClickedButtonValue = useDispatch();
    const ifClicked=()=>{
      dispatchClickedButtonValue(clearScreen())
    };
    return (<button className="
    bg-red-500
    hover:bg-red-700
    text-white
    font-bold
    py-2
    px-4
    rounded" onClick={ifClicked}>Clear</button>);
  }
export default ClearButton