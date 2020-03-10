import React from 'react'
import StyledRepoCard from '../../public/styles/RepoCardStyle';
//util
import createdAtYear from '../utils/createdAtYear';

const RepoCard = ({repoData, isLastChild}) => {
    const { name, created_at, pushed_at, language, owner: {login}, description, stargazers_count, forks_count, html_url, fork } = repoData;
    return (
        <StyledRepoCard>
            <div className="header-holder">
                <h6>{name}</h6>
                <span className="repo-rights">
                    {(language !== null) && language}
                    {(language !== null && !fork) && ` - `}
                    {(!fork) && 'Creator & Owner'}
                </span>
            </div>
            <span className="repo-year">{createdAtYear(created_at)} – {createdAtYear(pushed_at)}</span>
            {description &&
                <p className="repo-description">
                   {description}
                </p>
            }

            <p className="repo-info">
                This repository has {stargazers_count} stars 
                and {forks_count} forks. 
                If you would like more information about this repository and my contributed code, 
                please visit 
                <a href={html_url} alt="repo url">{` ${name} `}</a>
                on GitHub.
            </p>

            {!isLastChild && <hr/>}


        </StyledRepoCard>
    )
}

export default RepoCard;
