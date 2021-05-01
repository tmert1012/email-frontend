import { Table } from "react-bootstrap";
import { useState } from 'react';
import UnsubModal from "./UnsubModal";

function EmailTable() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Table className='emailTable' striped bordered hover>
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Unsubscribe</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>asdf@email.com</td>
                    <td><span className='unsubLink' onClick={handleShow}>Unsubscribe</span></td>
                </tr>
                </tbody>
            </Table>

            <UnsubModal show={show} handleClose={handleClose} />
        </>
    )

}

export default EmailTable;