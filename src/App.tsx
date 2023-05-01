import {TaskBox} from "./components/TaskBox";
import NavbarDark from "./components/NavbarDark";
import Accordion from 'react-bootstrap/Accordion';
import {useEffect, useState} from "react";

function App() {

    return <div>
        <NavbarDark></NavbarDark>
        <Accordion defaultActiveKey={"0"}>
            <Accordion.Item eventkey={"0"}>
                <Accordion.Header>Aufgabe 1</Accordion.Header>
                <Accordion.Body>
                    <TaskBox task={"Gib alle Daten der Tabelle 'cia' aus."}/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={"1"}>
                <Accordion.Header>Aufgabe 2</Accordion.Header>
                <Accordion.Body>
                    <TaskBox task={"Gib die Namen aller Länder aus."}/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={"2"}>
                <Accordion.Header>Aufgabe 3</Accordion.Header>
                <Accordion.Body>
                    <TaskBox task={"Gib alle Länder an, die mehr als 100 Millionen (1E08) Einwohner haben."}/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={"3"}>
                <Accordion.Header>Aufgabe 4</Accordion.Header>
                <Accordion.Body>
                    <TaskBox task={"Gib die Länder an, die ein Bruttosozialprodukt (BIP) zwischen 1 und 100 Milliarden haben und in Asien liegen."}/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={"4"}>
                <Accordion.Header>Aufgabe 5</Accordion.Header>
                <Accordion.Body>
                    <TaskBox task={"Gib die Einwohnerzahlen für Frankreich, Deutschland und Polen aus."}/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={"5"}>
                <Accordion.Header>Aufgabe 6</Accordion.Header>
                <Accordion.Body>
                    <TaskBox task={"Zeige Name und Einwohnerzahl in Millionen für die Länder Südamerikas."}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>

}

export default App