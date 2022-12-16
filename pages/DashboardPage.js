import IndicaterCard from "../components/IndicaterCard";
import GraphCard from "../components/GraphCard";
import TableCard from "../components/TableCard";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { faCloud,faTemperatureUp,faTemperatureDown,faDroplet } from '@fortawesome/free-solid-svg-icons'

function DashboardPage() {
    return (
        <>
        <Navbar/>
        <div className="flex flex-col md:flex-row">
        <SideBar/>
        <section>
            <div style={{marginTop:"5%"}} id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
                <div className="bg-gray-800 pt-3">
                    <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                        <h1 className="font-bold pl-2">Dashboard</h1>
                    </div>
                </div>
                <div className="flex flex-wrap flex-grow mt-4">
                    <IndicaterCard fontAwesomeIcon={faTemperatureUp} dataName="Max" widgetColorFrom="from-red-200" widgetColorTo="to-red-100" borderColor="border-red-500" iconColor="bg-red-500" dataColor="text-red-600" valueColor="text-red-600" dataValue="6&deg;C"/>
                    <IndicaterCard fontAwesomeIcon={faTemperatureDown} dataName="Min" widgetColorFrom="from-green-200" widgetColorTo="to-green-100" borderColor="border-green-500" iconColor="bg-green-500" dataColor="text-green-600" valueColor="text-green-600" dataValue="-4&deg;C"/>
                    <IndicaterCard fontAwesomeIcon={faDroplet} dataName="Humidity" widgetColorFrom="from-blue-200" widgetColorTo="to-blue-100" borderColor="border-blue-500" iconColor="bg-blue-500" dataColor="text-blue-600" valueColor="text-blue-600" dataValue="79%"/>
                    <IndicaterCard fontAwesomeIcon={faCloud} dataName="Sky" widgetColorFrom="from-yellow-200" widgetColorTo="to-yellow-100" borderColor="border-yellow-500" iconColor="bg-yellow-500" dataColor="text-yellow-600" valueColor="text-yellow-600" dataValue="Cloudy"/>
                </div>
                 <div className="flex flex-row flex-wrap flex-grow mt-2">
                    <TableCard/>
                    
                    <GraphCard/>

                </div>
            </div>
        </section>
        </div>
        </>
        );
  }
export default DashboardPage    