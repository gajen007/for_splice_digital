import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function IndicaterCard(props) {
    return (
        <div className="w-full md:w-1/4 xl:w-1/8 p-12">
        <div className={`bg-gradient-to-b ${props.widgetColorFrom} ${props.widgetColorTo} border-b-4 ${props.borderColor} rounded-lg shadow-xl p-5`}>
            <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                    <div className={`rounded-full p-5 ${props.iconColor}`}><FontAwesomeIcon icon={props.fontAwesomeIcon} /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                    <h2 className={`font-bold text-sm titlecase ${props.dataColor}`}>{props.dataName}</h2>
                    <p className={`font-bold text-sm`}>{props.dataValue} <span className={`${props.valueColor}`}><i className="fas fa-exchange-alt"></i></span></p>
                </div>
            </div>
        </div>
    </div>
);
  }
export default IndicaterCard