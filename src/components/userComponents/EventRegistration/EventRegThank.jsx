import React from 'react'
import './EventReg.css'
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function EventRegThank({error}) { 
    const navigate = useNavigate();

    return (
        <Container className="text-center py-5 d-flex flex-column justify-content-center align-items-center thankContainer">
            {!error ? (
                <>
                    <h1 className="text-dark">Thank you for registering!</h1>
                    <p className="fs-5">You will receive a confirmation mail soon..</p>
                    <Button
                        variant="primary"
                        className="thankButton"
                        onClick={() => navigate('/')}
                    >
                        Go Home
                    </Button>
                </>
            ) : (
                <>
                    <h1 className="text-dark">An error occurred!</h1>
                    <p className="fs-5">{error}</p>
                    <Button
                        variant="danger"
                        className="thankButton"
                        onClick={() => navigate('/')}
                    >
                        Go Home
                    </Button>
                </>
            )}
        </Container>
    ); 
}

export default EventRegThank