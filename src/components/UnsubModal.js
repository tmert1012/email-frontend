import {Button, Modal} from "react-bootstrap";

function UnsubModal({ show, handleClose, uuid }) {

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
                <Button variant="primary" onClick={handleClose}>
                    Unsubscribe
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default UnsubModal;