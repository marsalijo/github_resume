import styled from 'styled-components'; 

const StyledProfile = styled.section`
    h4 {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    .user-bio {
        color: #939393;
        font-size: 30px;
    }
    a {
        margin: 28px 0 45px;
        display: block;
    }
    @media (max-width: 1200px) {
        .user-bio {
            font-size: 16px;
        }
        a {
            margin: 15px 0;
            font-size: 14px;
        }
    }
    @media (max-width: 640px) {
        .user-bio {
            font-size: 12px;
        }
        a {
            margin: 15px 0;
            font-size: 12px;
        }
    }
`;

export default StyledProfile;