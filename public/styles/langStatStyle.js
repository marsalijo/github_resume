import styled from 'styled-components'; 

const StyledLangStat = styled.li`
    width: 23%;
    margin-right: 2%;
    margin-bottom: 25px;
    .lang-name {
        color: #EC174D;
        font-size: 20px;
        margin-right: 5px;
    }
    .lang-percent {
        color: #939393;
        font-size: 20px;
    }
    .progress-root{
        height: 5px;
        background-color: #F5F7FA;
        position: relative;
        border-radius: 50px;
        overflow: hidden;
        margin-top: 10px;
    }
    .progress-bar {
        transform: translateX(-${props => props.langPercentage ? 100 - props.langPercentage : 0}%);
        border-radius: 50px;
        background-color: #D8D8D8;
        transition: transform .4s linear;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        position: absolute;
        transform-origin: left;
    }
    @media (max-width: 1200px) {
        margin-bottom: 15px;
        width: 30%;
        margin-right: 5%;


        .lang-name {
            font-size: 13px;
            margin-right: 4px;
        }
        .lang-percent {
            font-size: 13px;
        }
    }
    @media (max-width: 640px) {
        margin-bottom: 10px;
        width: 40%;

        .lang-name {
            font-size: 11px;
            margin-right: 2px;
        }
        .lang-percent {
            font-size: 11px;
        }
    }
`;

export default StyledLangStat;