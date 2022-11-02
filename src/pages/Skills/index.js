import './skills.css';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const skillsPage = () => {
    return (
        <>
            <main>
                <div className='hero-image'>
                    <a className='cube' id='mongo' target="_blank" rel="noreferrer" href='https://www.mongodb.com/'><p></p></a>
                    <a className='cube' id='express' target="_blank" rel="noreferrer" href='https://expressjs.com/'><p></p></a>
                    <a className='cube' id='react' target="_blank" rel="noreferrer" href='https://reactjs.org/'><p></p></a>
                    <a className='cube' id='nodejs' target="_blank" rel="noreferrer" href='https://nodejs.org/en/'><p></p></a>

                    <Card className="text-center">
                        <Card.Header>My skills</Card.Header>
                        <Card.Body>
                            <h5>
                                <Badge bg="secondary">HTML</Badge>
                                <Badge bg="secondary">CSS</Badge>
                                <Badge bg="secondary">JavaScript</Badge>
                                <Badge bg="secondary">Git</Badge>
                                <Badge bg="secondary">Restful APIs</Badge>
                                <Badge bg="secondary">GitHub</Badge>
                                <Badge bg="secondary">Nodejs</Badge>
                                <Badge bg="secondary">OOP</Badge>
                                <Badge bg="secondary">Express</Badge>
                                <Badge bg="secondary">SQL</Badge>
                                <Badge bg="secondary">MongoDB</Badge>
                                <Badge bg="secondary">React</Badge>
                                <Badge bg="secondary">JWT</Badge>
                                <Badge bg="secondary">Bootstrap</Badge>
                                <Badge bg="secondary">Mui</Badge>
                                <Badge bg="secondary">MySQL</Badge>
                            </h5>
                        </Card.Body>
                        <Card.Footer className="text-muted">These are what I have but not limited to!</Card.Footer>
                    </Card>
                </div>
            </main>
        </>
    )
}

export default skillsPage;