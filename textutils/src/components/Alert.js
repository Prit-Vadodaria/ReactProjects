import React from 'react'

export default function Alert(props) {
    const Capitalise = (word) =>
    {
        const str= word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
            <div className='container my-2' style={{height:'50px' , 'box-sizing': 'border-box'}}>
                {props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show m-3`} role="alert">
                    {Capitalise(props.alert.type)} : {props.alert.msg}
                </div> }
            </div>
              
        </>
    )
}
