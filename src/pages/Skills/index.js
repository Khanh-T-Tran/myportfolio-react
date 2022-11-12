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
                        <Card.Header><Card.Title>My skills</Card.Title></Card.Header>
                        <Card className='front-end'>
                            <Card.Title>Front End</Card.Title>
                            <Card.Body>                          
                                    <Badge bg="secondary">HTML</Badge>
                                    <Badge bg="secondary">CSS</Badge>
                                    <Badge bg="secondary">Bootstrap</Badge>
                                    <Badge bg="secondary">Materialize</Badge>
                                    <Badge bg="secondary">JavaScript</Badge> 
                                    <Badge bg="secondary">ReactJS</Badge>                     
                                    <Badge bg="secondary">jQuery</Badge>                     
                                    <Badge bg="secondary">server-side CSS</Badge>                     
                                    <Badge bg="secondary">Frameworks</Badge>   
                                    <Badge bg="secondary">Responsive Design</Badge>   
                                    <Badge bg="secondary">Version Control/Git</Badge>   
                                    <Badge bg="secondary">Testing/Debugging</Badge>   
                                    <Badge bg="secondary">Browser Developer Tools</Badge>   
                                    <Badge bg="secondary">Web Performance</Badge>   
                                    <Badge bg="secondary">CSS Preprocessing</Badge>   
                                    <Badge bg="secondary">CSS Animation</Badge>   
                                      
                            </Card.Body>
                        </Card>
                        <Card className='back-end'>
                        <Card.Title>Back End</Card.Title>
                            <Card.Body>                            
                                    <Badge bg="secondary">Nodejs</Badge>
                                    <Badge bg="secondary">Express</Badge>
                                    <Badge bg="secondary">MySQL</Badge>
                                    <Badge bg="secondary">MongoDB</Badge>                                   
                                    <Badge bg="secondary">graphQL</Badge>                          
                                    <Badge bg="secondary">REST APIs</Badge>                          
                            </Card.Body>
                        </Card>
                        <Card className='others'>
                        <Card.Title>Others</Card.Title>
                            <Card.Body>                            
                                    <Badge bg="secondary">graphic-design</Badge>
                                    <Badge bg="secondary">problem solving</Badge>
                                    <Badge bg="secondary">training</Badge>
                                    <Badge bg="secondary">instructional design</Badge>                                                           
                            </Card.Body>
                        </Card>
                        <Card.Footer className="text-muted">These are what I offer but not limited to!</Card.Footer>
                    </Card>
                </div>
            </main>
        </>
    )
}

export default skillsPage;