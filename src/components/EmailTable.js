import { Table } from "react-bootstrap";
import { useState, useEffect } from 'react';
import UnsubModal from "./UnsubModal";

function EmailTable() {
    const [show, setShow] = useState(false)
    const [uuid, setUUID] = useState('')
    const [records, setRecords] = useState([])

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        fetch(
            `http://localhost:7000/email`,
            {
                method: "GET"
            }
        )
            .then(res => res.json())
            .then(res => {
                setRecords(res)
            })
            .catch(error => console.log(error))
    }, [])

    const handleUnsub = (uuid) => {
        setUUID(uuid)
        handleShow()
    }

    const handleUnsubModalClose = () => {
        setRecords(records.filter( r => r.uuid !== uuid ))
        setUUID("")
        handleClose()
    }

    return (
        <>
            {records.length > 0 &&
                <Table className='emailTable' striped bordered hover>
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th>Unsubscribe</th>
                    </tr>
                    </thead>
                    <tbody>
                    {records.map((record, i) => (
                        <tr key={i}>
                            <td>{record.email}</td>
                            <td><span className='unsubLink' onClick={() => handleUnsub(record.uuid)}>Unsubscribe</span></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            }

            <UnsubModal show={show} handleClose={handleUnsubModalClose} uuid={uuid} />
        </>
    )

}

export default EmailTable;