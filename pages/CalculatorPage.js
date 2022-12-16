import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import PrimaryButton from '../components/PrimaryButton';
import OperatorButton from '../components/OperatorButton';
import EqualButton from '../components/EqualButton';
import Screen from '../components/Screen';
import ClearButton from '../components/ClearButton';
import { Provider } from 'react-redux'
import store from '../store/store'
function CalculatorPage() {
    return (
<Provider store={store}>
<Navbar/>
        <div className="flex flex-col md:flex-row">
        <SideBar/>
        <section>
    <div style={{marginTop:"17.5%",marginLeft:"12.5%"}} id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
    <div className="grid grid-cols-4 gap-4">
    <div><ClearButton/></div>
    <div className="col-span-3"><Screen/></div>
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
    <div><EqualButton buttonText="="/></div>
    <div><OperatorButton buttonText="+"/></div>  
    </div>      
    </div>
    </section>
        </div>
</Provider>
        );
  }
    export default CalculatorPage       