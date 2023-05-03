import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import axios from "axios";

export function LectionBox() {

    const [lections, setLections] = useState([]);

    useEffect(()=> {
        const fetchAllLections = async  () => {
            try {
                const res = await axios.get("http://localhost:8800/lections")
                setLections(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllLections();
    }, [])


    // https://youtu.be/fPuLnzSjPLE?t=1567

    return (
        <>
            {/* In der Query URL die Lektionsnummer übergeben und danach abgleichen welche Lektionsabschnitte mit der korrespondierenden Lektionsnummer ausgegeben 
            werden soll und als Header die Lektionsnummer benutzen */}
            {lections.map((lection)=> (
            <Form>
                <Form.Label htmlFor={"lection"+lection.lection_id}>{lection.name}</Form.Label>
                <Form.Text>{lection.text}</Form.Text>
            </Form>
            ))}
        </>
    );
}