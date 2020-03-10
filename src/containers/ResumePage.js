import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
//styles
import StyledResume from '../../public/styles/ResumePageStyle';
//components 
import ProfileInfo from '../components/ProfileInfo';
import ResumeSection from '../components/ResumeSection.js';
import LangStat from '../components/LangStat';
import RepoCard from '../components/RepoCard.js';
//redux
import { connect } from 'react-redux';
import langPercent from '../utils/langPercent';

const Resume = ({ profileData, reposData }) => {
    const [langPercentage, setLangPercentage] = useState([]);
    useEffect(() => {
        setLangPercentage(langPercent(reposData));
    }, [langPercent]);


    return (
        <StyledResume>
            <ResumeSection>
                <ProfileInfo 
                    profileData={profileData}
                />
            </ResumeSection>
            <ResumeSection title="Languages">
                <ul className="langStatWrapper">
                    <LangStat langPercentage={langPercentage} />
                </ul>
            </ResumeSection>
            <ResumeSection title="Popular Repositories">
                {reposData && reposData.map((repo, i) => (
                    <RepoCard 
                        key={repo.id} 
                        repoData={repo} 
                        isLastChild={(i === reposData.length-1)} 
                    />
                ))}
            </ResumeSection>
         
        </StyledResume>
    )
    return <div></div>;
}


ProfileInfo.propTypes = {
    profileData: PropTypes.object,
    reposData: PropTypes.object,
}

const mapStateToProps = (state) => ({
    profileData: state.data.profileData,
    reposData: state.data.reposData,
})


export default connect(mapStateToProps)(Resume);