import {useEffect, useState} from "react";
import axios from "axios";
import {InputGroup} from "react-bootstrap";
import {Form} from "react-bootstrap";

export const Test = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        const fetchAllBooks = async  () => {
            try {
                const res = await axios.get("http://localhost:8800/books")
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooks();
    }, [])

    return (
        <>
            <InputGroup>
                <InputGroup.Text>Übungstext</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
        </>
    );
}