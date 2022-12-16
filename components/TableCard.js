function TableCard(){

return(<div className="w-full md:w-1/2 xl:w-1/3 p-6">
<div className="bg-white border-transparent rounded-lg shadow-xl">
    <div className="bg-gradient-to-b from-gray-300 to-gray-100 titlecase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
        <h2 className="font-bold titlecase text-gray-600">Nearby Cities</h2>
    </div>
    <div className="p-5">

        <table className="w-full p-5 text-gray-700">
            
            <thead>
            <tr>
                <th className="text-left text-blue-900">City</th>
                <th className="text-left text-blue-900">Max &deg;</th>
                <th className="text-left text-blue-900">Min &deg;</th>
            </tr>
            </thead>

            <tbody>
            <tr><td>Markham</td><td>4&deg;</td><td>-6&deg;</td></tr>
            <tr><td>Pickering</td><td>5&deg;</td><td>-3&deg;</td></tr>
            <tr><td>Downtown</td><td>7&deg;</td><td>-2&deg;</td></tr>
            <tr><td>North York</td><td>4&deg;</td><td>-5&deg;</td></tr>
            </tbody>
        </table>

        <p className="py-2"><a target="_blank" href="https://weather.com/weather/today/">See More Cities...</a></p>

    </div>
</div>

</div>)

}

export default TableCard