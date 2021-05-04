import { Table } from "react-bootstrap"
import { useState, useEffect } from 'react'
import UnsubModal from "./UnsubModal"
import { getRecords } from "../utils/network"

function EmailTable({refresh}) {
    const [show, setShow] = useState(false)
    const [uuid, setUUID] = useState('')
    const [records, setRecords] = useState([])
    const [message, setMessage] = useState("")

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleGetRecords = () => {
        getRecords()
            .then(res => setRecords(res))
            .catch(error => setMessage(error.message))
    }

    useEffect(() => {
        handleGetRecords()
    }, [refresh])

    const handleUnsub = (uuid) => {
        setUUID(uuid)
        handleShow()
    }

    const handleUnsubModalClose = () => {
        setUUID("")
        handleClose()
        handleGetRecords()
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
            { message && message }

            <UnsubModal show={show} handleClose={handleUnsubModalClose} uuid={uuid} />
        </>
    )

}

export default EmailTable