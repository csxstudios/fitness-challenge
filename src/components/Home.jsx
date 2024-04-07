// import logo from '../logo.svg';
import '../App.css';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { FitnessCreateForm, FitnessList } from './';

const Home = () => {
    return (
        <div className="App">
            <div className="bg-dark">
                <Container className="py-5">
                    <Row>
                        <Col md={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Header><strong>Track Fitness</strong></Card.Header>
                                <Card.Body>
                                    <FitnessCreateForm />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8} className="mb-3">
                            <Card style={{ width: '100%' }}>
                                <Card.Header><strong>Fitness Entries</strong></Card.Header>
                                <Card.Body>
                                    <FitnessList /> 
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;
