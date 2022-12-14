import { useState } from 'react';
import { useSelector } from 'react-redux'
import { getValueFromScreen } from '../reducers/calcreducer'
function Screen() {
  const valueFromScreen=useSelector(getValueFromScreen);
    return (
        <input 
        className="border 
                border-black
                text-gray-900
                text-lg
                rounded-lg
                focus:ring-blue-500
                focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500"
        type="text"
        value={valueFromScreen}
        readOnly={true}
        />
  );
  }
    export default Screen
  

