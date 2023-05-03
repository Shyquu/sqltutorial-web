import React, {useState} from 'react';
import {Button, Card, Form, InputGroup} from "react-bootstrap";
import axios from "axios";

function AddLection() {

    // lection_id (AUTO_INCREMENT); lection_name; lection_text; lection_number;

    const [input, setInput] = useState({
        lection_name: "",
        lection_text: "",
        lection_img: "",
        lection_number: null
    });

    const handleChange = (e) => {
        setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("https://localhost:8800/addlesson", input)
        } catch (err) {
            console.log(err)
        }
    }

    console.log(input)

    return (
        <div className={"newlection"}>
            <Card style={{
                width: '50rem',
                margin: '0 auto',
                float: 'none',
                marginTop: '2rem'

            }}>
                <Card.Header>Lektion hinzufügen</Card.Header>
                <Card.Body>
                    <Form style={{
                        padding: '2.5rem',
                    }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Lektionsname</Form.Label>
                            <Form.Control type="text" placeholder="Name" onChange={handleChange}
                                          name="lection_name"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Lektionstext</Form.Label>
                            <Form.Control type="text" as="textarea" onChange={handleChange} name="lection_text"
                                          aria-describedby="basic-addon2" placeholder={"Text"}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Link zum Bild (optional)</Form.Label>
                            <Form.Control type="text" onChange={handleChange} name="lection_img"
                                          aria-describedby="basic-addon2" placeholder={"Link"}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Lektionsnummer</Form.Label>
                            <InputGroup>
                                <Form.Control type="number" onChange={handleChange} name="lection_number"
                                              aria-describedby="basic-addon2" placeholder={"Nummer"}/>
                                <Button onClick={handleClick} variant="outline-secondary"
                                        id="button-addon2">Senden</Button>
                            </InputGroup>
                        </Form.Group>

                    </Form>
                </Card.Body>
            </Card>
            <Card style={{
                width: '50rem',
                margin: '0 auto',
                float: 'none',
                marginTop: '2rem'

            }}>
                <Card.Header><text style={{color: 'red', fontSize: '5'}}>PREVIEW</text> {input.lection_name && input.lection_name}</Card.Header>
                <Card.Body>
                    {input.lection_text && input.lection_text}
                </Card.Body>
                <Card.Footer>Lektionsnummer: {input.lection_number && input.lection_number} (nicht sichtbar)</Card.Footer>
            </Card>
        </div>
    );
}

export default AddLection;