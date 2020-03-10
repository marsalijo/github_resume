import React from 'react'

const Input = (props) => {
    const {label} = props
    return (
        <>
            <input {...props} autoComplete="off" />
            <label htmlFor={label} className="visuallyhidden">{label}</label>
        </>
    )
}

export default Input;
