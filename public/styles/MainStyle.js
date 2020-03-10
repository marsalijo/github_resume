import styled from 'styled-components'; 

const StyledMain = styled.main`
    padding: 88px;
    h1 {
        font-size: 50px;
        color: #424242;
        font-weight: 700;
        text-align: center;
    }
    @media (max-width: 1200px) {
        padding: 50px;
        h1 {
            font-size: 40px;
        }
    }
    @media (max-width: 640px) {
        padding: 40px 20px;
        h1 {
            font-size: 20px;
        }
    }
`;

export default StyledMain;