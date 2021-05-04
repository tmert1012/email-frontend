import {Button, Modal} from "react-bootstrap"
import {useState} from "react"
import {deleteRecord} from "../utils/network"

function UnsubModal({ show, handleClose, uuid }) {
    const [message, setMessage] = useState("")

    const submit = () => {
        deleteRecord(uuid)
            .then(res =>
                setMessage(`Email unsubscribed!`)
            )
            .catch(error => setMessage(error.message))
    }

    const reset = () => {
        setMessage('')
        handleClose()
    }

    return (
        <Modal className='unsubModal' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Unsub?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you wish to unsubscribe?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={reset}>
                    Close
                </Button>
                <Button variant="primary" onClick={submit} disabled={message}>
                    Unsubscribe
                </Button>
                <br />
                { message && <span>{message}</span> }
            </Modal.Footer>
        </Modal>
    )

}

export default UnsubModal