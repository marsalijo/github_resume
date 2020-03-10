import styled from 'styled-components'; 

const StyledResumeSection = styled.section`
    margin: 10px 0 60px;
    h4 {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    h5 {
        color: #424242;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 40px;
    }
    @media (max-width: 1200px) {
        margin: 20px 0 30px;
        h4 {
            font-size: 24px;
        }
        h5 {
            font-size: 18px;
            margin-bottom: 24px;
        }
    }
    @media (max-width: 640px) {
        margin: 10px 0 20px;
        h4 {
            font-size: 18px;
        }
        h5 {
            font-size: 16px;
            margin-bottom: 20px;
        }
    }
`;

export default StyledResumeSection;