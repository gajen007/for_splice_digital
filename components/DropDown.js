function DropDown(props) {
    return (<div className={`dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 ${props.visibility}`}>
    <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-user fa-fw"></i> Profile</a>
    <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-cog fa-fw"></i> Settings</a>
    <div className="border border-gray-800"></div>
    <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</a>
</div>
);
  }
export default DropDown