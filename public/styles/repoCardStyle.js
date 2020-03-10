import styled from 'styled-components'; 

const StyledRepoCard = styled.div`
    font-size: 20px;
    margin-bottom: 20px;

    .header-holder {
        float: left;
        margin-bottom: 20px;
    }
    h6 {
        color: #EC174D;
        font-size: 24px;
        margin-bottom: 15px;
    }
    .repo-year {
        font-size: 24px;
        float: right;
        color: #939393;
    }
    .repo-rights {
        color: #939393;
    }
    .repo-description {
        display: block;
        clear: both;
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .repo-info {
        display: block;
        clear: both;
    }
    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #ccc;
        margin: 30px 0;
        padding: 0;
    }
    @media (max-width: 1200px) {
        h6 {
            font-size: 16px;
            margin-bottom: 0;
        }
        .repo-rights {
            font-size: 12px;
        }
        .repo-year {
            font-size: 14px;
        }
        hr {
            margin: 25px 0;
        }
    }
    @media (max-width: 640px) {
        h6 {
            font-size: 14px;
        }
        .repo-rights {
            font-size: 10px;
        }
        .repo-year {
            font-size: 12px;
        }
        hr {
            margin: 15px 0;
        }
    }
`;

export default StyledRepoCard;