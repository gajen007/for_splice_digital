function GraphCard(props) {
    return (<div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
            <h2 className="font-bold uppercase text-gray-600">{props.heading}</h2>
        </div>
        <div className="p-5 text-center"></div>
    </div>
    </div>
    );
  }
export default GraphCard