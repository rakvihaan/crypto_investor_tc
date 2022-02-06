import React from 'react';

const SelectButton = ({children,selected,onClick}) => {
  return <div className="btn btn-outline daySelectBtn" 
  			style={{
				  backgroundColor:selected ? "#431f5f" : "transparent",
				  color:selected ? "white" : "#431f5f",
				  fontWeight:selected ? "500" : "400",
				  minWidth:"100px",
				  
			  }} 
			onClick={onClick}>
				{children}
		</div>;
};

export default SelectButton;
