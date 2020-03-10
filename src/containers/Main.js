import React from 'react'
import PropTypes from 'prop-types';
//styles
import StyledMain from '../../public/styles/MainStyle';
//components
import SearchForm from '../containers/SearchForm';
import ResumePage from '../containers/ResumePage';
//redux
import { connect } from 'react-redux';

const Main = ({showResume, profileLoading, reposLoading, error}) => {
    return (
        <StyledMain>
            <h1>My Github Resumé</h1>
            <SearchForm 
                showResume={showResume} 
                profileLoading={profileLoading} 
                reposLoading={reposLoading} 
                error = {error}
            />
            {(showResume && !profileLoading && !reposLoading) &&
                <ResumePage />
            }
        </StyledMain>
    )
}

Main.propTypes = {
    profileLoading: PropTypes.bool.isRequired,
    reposLoading: PropTypes.bool.isRequired,
    showResume: PropTypes.bool.isRequired,
    error: PropTypes.object,

}

const mapStateToProps = (state) => ({
    profileLoading: state.data.profileLoading,
    reposLoading: state.data.reposLoading,
    showResume: state.data.showResume,
    error: state.data.error,
})

export default connect(mapStateToProps)(Main)
