function OperatorButton(props) {
    const ifClicked=()=>{
        alert(props.buttonText);
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