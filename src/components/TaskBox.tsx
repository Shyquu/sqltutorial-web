import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button} from "react-bootstrap";

interface PropsTitle {
    title: string;
    task: string;
}

interface Props {
    task: string;
}

export function TaskBoxTitle({title, task}: PropsTitle) {
    return (
        <>
            <h2>{title}</h2>
            <text>{task}</text>
            <InputGroup>
                <Form.Control as="textarea" aria-label="With textarea" placeholder={"Anfrage"}/>
                <Button variant="outline-secondary">Senden</Button>
            </InputGroup>
        </>
    );
}

export function TaskBox({task}: Props) {
    return (
        <>
            <text>{task}</text>
            <InputGroup>
                <Form.Control as="textarea" aria-label="With textarea" placeholder={"Anfrage"}/>
                <Button variant="outline-secondary">Senden</Button>
            </InputGroup>
        </>
    );
}