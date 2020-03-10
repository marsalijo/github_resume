import React from 'react'
//styles
import StyledButton from '../../public/styles/ButtonStyle';

const Button = (props) => {
    let buttonClass = (variant = props.variant) => {
        switch(variant){
            case 'primary':
                return 'primary-btn';
            case 'loading':
                return 'loading-btn';
            default:
                return;
        }
    }

    return (
        <StyledButton className={buttonClass()} type={props.type}>
            {props.children}
        </StyledButton>
    )
}

export default Button;
