import React from 'react'
//styles
import StyledResumeSection from '../../public/styles/ResumeSectionStyle';

const ResumeSection = (props) => {
    return (
        <StyledResumeSection>
            {(props.title) &&
                <h5>{props.title}</h5>
            }
            {props.children}
        </StyledResumeSection>
    )
}

export default ResumeSection;