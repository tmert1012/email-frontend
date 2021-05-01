import { Form, Button } from 'react-bootstrap'

function InputForm() {

    return (
        <Form>
            <Form.Group className='inputForm'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We're gonna sell this bad boy to everybody, cause that's how we do.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}

export default InputForm