import {InputGroup} from "react-bootstrap";
import {Form} from "react-bootstrap";

export const Test = () => {

    return (
        <>
            <InputGroup>
                <InputGroup.Text>Übungstext</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
        </>
    );
}