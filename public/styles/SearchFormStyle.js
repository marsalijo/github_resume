import styled from 'styled-components'; 

const StyledSearch = styled.section`
    background-color: #fff;
    width: 76vw;
    margin: 65px auto 0;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.28);
    padding: 60px 90px 70px;
    z-index: 2;
    position: relative;
    h5 {
        font-size: 28px;
        color: #424242;
        font-weight: 700;
    }
    form {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
    }
    input {
        font: inherit;
        border: 0;
        height: 30px;
        border-bottom: 1px solid #D8D8D8;
        display: block;
        padding: 6px 0;
        transition: border-bottom .2s ease-in;
        font-size: 20px;
        flex-grow: 1;
        font-weight: 300;
        margin-right: 10px;
    }
    input:focus {
        border-bottom: 1px solid #424242;
    }
    small {
        width: 100%;
        color: #EC174D;
        font-size: 12px;
        line-height: 2;
    }
    @media (max-width: 1200px) {
        width: 100%;
        padding: 45px;

        input {
            font-size: 20px;
            padding: 5px;
            margin-right: 5px;
        }
        small {
            line-height: 3;
        }
    }
    @media (max-width: 640px) {
        margin: 25px auto 0;
        padding: 20px 25px;
        h5 {
            font-size: 18px;
            text-align: center;
        }
        form {
            margin-top: 40px;
        }
        input {
            font-size: 15px;
            padding: 2px;
            margin-right: 0;
            margin-bottom: 20px;
        }
        small {
            text-align: center;
            line-height: 3;
        }
    }

`;

export default StyledSearch;