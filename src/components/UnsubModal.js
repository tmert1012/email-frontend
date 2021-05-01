import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

function UnsubModal({ show, handleClose, uuid }) {
    const [message, setMessage] = useState("")

    const submit = () => {
        fetch(
            `http://localhost:7000/email/${uuid}`,
            {
                method: "DELETE"
            }
        )
            //.then(res => res.json())
            .then(res => {
                setMessage(`Email unsubscribed!`)
            })
            .catch(error => console.log(error))
    }

    return (
        <Modal className='unsubModal' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Unsub?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you wish to unsubscribe?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
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

export default UnsubModal;