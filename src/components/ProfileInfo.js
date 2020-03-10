import React from 'react'
//styles
import StyledProfile from '../../public/styles/ProfileInfoStyle';
//util
import createdAtYear from '../utils/createdAtYear';

const UserProfile = ({profileData}) => {
    const {login: username, bio, blog, created_at, location, followers, public_repos} = profileData;
    const createdAt = createdAtYear(created_at) 
    return (
        <StyledProfile>
            <h4>{username}</h4>
            <p className="user-bio">{bio}</p>
            <a href={blog} target="_blank" alt="blog URL">{blog}</a>
            <p>
                {
                    `On GitHub since ${createdAt},
                    ${username} is a developer `
                }
                {
                    (location) ? 
                        `based in ${location} `
                        :
                        ''
                }
                {
                    `with ${public_repos} public repositories `
                }
                and {followers} followers.
            </p>
        </StyledProfile>
    )
}

export default UserProfile
