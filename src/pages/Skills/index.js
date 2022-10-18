import './skills.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const skillsPage = () => {

    return (
        <>
            <main>
                <div className='hero-image'>
                    <div className='cube' id='mongo'></div>
                    <div className='cube' id='express'></div>
                    <div className='cube' id='react'></div>
                    <div className='cube' id='nodejs'></div>

                    <Card className="text-center">
                        <Card.Header>My skills</Card.Header>
                        <Card.Body>                           
                            <Button variant="secondary">HTML</Button>
                            <Button variant="secondary">CSS</Button>
                            <Button variant="secondary">JavaScript</Button>
                            <Button variant="secondary">Git</Button>
                            <Button variant="secondary">Restful APIs</Button>
                            <Button variant="secondary">GitHub</Button>
                            <Button variant="secondary">Nodejs</Button>
                            <Button variant="secondary">OOP</Button>
                            <Button variant="secondary">Express</Button>
                            <Button variant="secondary">SQL</Button>
                            <Button variant="secondary">MongoDB</Button>
                            <Button variant="secondary">React</Button>
                            <Button variant="secondary">JWT</Button>
                            <Button variant="secondary">Bootstrap</Button>
                            <Button variant="secondary">Mui</Button>
                            
                        </Card.Body>
                        <Card.Footer className="text-muted">Click each one to see some of my code</Card.Footer>
                    </Card>
                </div>

            </main>
        </>
    )
}

export default skillsPage;