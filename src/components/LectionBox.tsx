import Form from "react-bootstrap/Form";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card} from "react-bootstrap";

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
                <div key={lection.lection_id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>{lection.lection_name}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {lection.lection_text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </>
    );
}