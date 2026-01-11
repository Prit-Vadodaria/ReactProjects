import React from 'react'

export default function Alert(props) {
    const Capitalise = (word) =>
    {
        const str= word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
            {props.alert &&
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show m-3`} role="alert">
                {Capitalise(props.alert.type)} : {props.alert.msg}
            </div> }  
        </>
    )
}
