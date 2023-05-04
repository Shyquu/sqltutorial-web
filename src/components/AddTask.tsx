import {InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export function AddTask() {

    // https://youtu.be/fPuLnzSjPLE?t=1540

    return (
        <>
            <InputGroup>
                <InputGroup.Text>Übungstext</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
        </>
    );
}