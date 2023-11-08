import './App.css';
import {Card, Col, Container, Row} from "react-bootstrap";
import Avatar from "./components/Avatar";
import Info from "./components/Info";
import Skills from "./components/Skills";

const skills = [
    'HTML+CSS,\u{1f917},alert-primary',
    'JavaScript,\u{1f4aa},alert-secondary',
    'Web Design,\u{1f4aa},alert-success',
    'Git and GitHub,\u{1f44d},alert-danger',
    'React,\u{1f4aa},alert-warning',
    'Python,\u{1f917},alert-info'
]


function App() {
    return (
        <div className="App">
            <Container>
                <Row className={"pt-3"}>
                    <Card style={{width: '18rem'}}>
                        <Avatar/>
                        <Card.Body>
                            <Card.Title>Igor Znamenskii</Card.Title>
                            <Card.Text>
                                <Info/>
                            </Card.Text>
                            <Card.Text className={".skills"}>
                                <Col>
                                    {skills.map((skill) => (
                                        <Skills skill={skill}/>
                                    ))}
                                </Col>
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Row>
            </Container>
        </div>
    );
}

export default App;
