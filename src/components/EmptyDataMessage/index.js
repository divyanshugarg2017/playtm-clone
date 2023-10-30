import React from 'react';
import { Container, Col, Alert } from 'react-bootstrap';

function EmptyDataMessage({message='',subMessage,className}) {
    return (
        <Container fluid className={`d-flex align-items-center justify-content-center ${className}`}>
            <Col xs={12} sm={6} className="text-center">
                <Alert variant={"info"}>
                    <p dangerouslySetInnerHTML={{ __html: message }}></p>
                    {
                        subMessage && <p>{subMessage}</p>
                    }
                </Alert>
            </Col>
        </Container>
    );
}

export default EmptyDataMessage;
