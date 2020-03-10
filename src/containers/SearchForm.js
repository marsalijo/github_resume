import React, { useState } from 'react'
import PropTypes from 'prop-types';
//styles
import StyledSearch from '../../public/styles/SearchFormStyle';
//components
import Form from '../components/Form';
import Button from '../components/Button';
import Input from '../components/Input';
//redux
import { connect } from 'react-redux';
import { getProfile, getRepositories } from '../redux/actions/dataActions';

const Search = (props) => {
    const {profileLoading, reposLoading, error} = props;
    const [username, setUsername] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();        
        props.getProfile(username);
        props.getRepositories(username);
    }

    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    
    return (
        <StyledSearch>
            <h5>Github username</h5>
            <Form onSubmit={handleSubmit}>
                <Input label="username" type="text" id="username" placeholder="John Doe" onChange={handleChange} />
                {(!profileLoading && !reposLoading) ? 
                    <Button variant="primary" type="submit">
                            Generieren
                    </Button>
                    :
                    <Button variant="loading" type="submit">
                            Loading...
                    </Button>
                }
                <br />
                {(error !== null) &&
                    <small>{error.statusText}</small>
                }
            </Form>
        </StyledSearch>
    )
}

Search.propTypes = {
    getProfile: PropTypes.func.isRequired,
    getRepositories: PropTypes.func.isRequired,
    error: PropTypes.object
}

const mapStateToProps = () => ({})

const mapActionsToProps = {
    getProfile,
    getRepositories
}

export default connect(mapStateToProps, mapActionsToProps)(Search)