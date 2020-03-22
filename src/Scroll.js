import React from 'react' ;

const Scroll = (props) => {
    return(
        <div style = {{overflowY:'scroll', border:'3px solid', height:'459px', background:'black'}}>
            {props.children}
        </div>
    ); 
};

export default Scroll ;
