import IndicaterCard from "../components/IndicaterCard";
import GraphCard from "../components/GraphCard";
import TableCard from "../components/TableCard";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

function CalculatorPage() {
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
                <div className="flex flex-wrap">
                    <IndicaterCard dataName="Total Revenue" dataValue="$ 3249"/>
                    <IndicaterCard dataName="Total Users" dataValue="250"/>
                    <IndicaterCard dataName="New Users" dataValue="2"/>
                    <IndicaterCard dataName="Server Uptime" dataValue="152 Days"/>
                </div>
                 <div className="flex flex-row flex-wrap flex-grow mt-2">
                    <TableCard/>
                    <GraphCard heading="Graph"/>
                </div>
            </div>
        </section>
        </div>
        </>
        );
  }
    export default CalculatorPage    