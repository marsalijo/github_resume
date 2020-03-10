import styled from 'styled-components'; 

const StyledResume = styled.section`
    background-color: #fff;
    width: 63vw;
    margin: auto;
    box-shadow: 0 0 2px 2px #00000029;
    padding: 75px 90px;
    position: relative;
    top: -20px;
    z-index: 1;

    a {
        font-size: 20px;
        -webkit-text-decoration: none;
        text-decoration: none;
    }
    
    p {
        margin: 10px 0;
    }

    .langStatWrapper{
        display: flex;
        flex-wrap: wrap;
    }
    @media (max-width: 1200px) {
        width: 90%;
        padding: 40px 25px;
        a {
            font-size: 14px;
        }
    }
    @media (max-width: 640px) {
        padding: 45px 40px;
        a {
            font-size: 18px;
        }
    }
`;

export default StyledResume;