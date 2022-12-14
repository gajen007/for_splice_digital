import PrimaryButton from './PrimaryButton';
import OperatorButton from './OperatorButton';
import Screen from './Screen';
function Calculator() {
  return (
    <>
    <Screen/>
  <div className="grid grid-cols-4 gap-4">
  <div><PrimaryButton buttonText="7"/></div>
  <div><PrimaryButton buttonText="8"/></div>
  <div><PrimaryButton buttonText="9"/></div>
  <div><OperatorButton buttonText="/"/></div>
  <div><PrimaryButton buttonText="4"/></div>
  <div><PrimaryButton buttonText="5"/></div>
  <div><PrimaryButton buttonText="6"/></div>
  <div><OperatorButton buttonText="X"/></div>
  <div><PrimaryButton buttonText="1"/></div>
  <div><PrimaryButton buttonText="2"/></div>
  <div><PrimaryButton buttonText="3"/></div>
  <div><OperatorButton buttonText="-"/></div>
  <div><PrimaryButton buttonText="0"/></div>
  <div><PrimaryButton buttonText="."/></div>
  <div><OperatorButton buttonText="="/></div>
  <div><OperatorButton buttonText="+"/></div>  
</div>
</>
);
}

export default Calculator
