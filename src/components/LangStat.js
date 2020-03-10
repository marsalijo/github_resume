import React from 'react'
//styles
import StyledLangStat from '../../public/styles/langStatStyle';

const LangStat = ({langPercentage}) => {    
    let langStateMarkup = langPercentage.map((lang, i) => {
        return(
            <StyledLangStat key={i} langPercentage={lang[1]}>
                <div>
                    <span className="lang-name">{lang[0]}</span>
                    <span className="lang-percent">{lang[1]}%</span>
                </div>
                <div className="progress-root">
                    <div className="progress-bar">
                    </div>
                </div>
            </StyledLangStat>
        )
    })
    return (
        <>
            {langStateMarkup}
        </>
    )
}

export default LangStat;
