import styled from 'styled-components'; 

const StyledButton = styled.button`

    padding: 10px 82px;
    min-width: 40px;
    border-radius: 50px;
    box-sizing: content-box;
    font-weight: 500;
    font-size: 20px;
    border: none;
    box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);
    transition: all .1s ease-in;
    cursor: pointer;
    
    &.primary-btn {
        background-color: #EC174D;
        color: #fff;
    }

    &.primary-btn:hover {
        background-color: rgba(236, 23, 77, 0.80);
        box-shadow: none;
    }

    &.loading-btn {
        background-color: rgba(236, 23, 77, 0.80);
        box-shadow: none;
        color: #fff;
    }
    
    @media (max-width: 1200px) {
        padding: 0px 30px;
        font-size: 20px;
    }
    @media (max-width: 640px) {
        font-size: 15px;
        padding: 10px 45px;
        width: 100%;
    }

`;

export default StyledButton;