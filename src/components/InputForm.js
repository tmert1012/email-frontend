import { Form, Button } from 'react-bootstrap'
import { useState } from "react"

function InputForm({refreshCallback}) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [valid, setValid] = useState(true)

    const onChange = (event) => {
        setEmail(event.target.value)
        setValid(email !== '' && re.test(email))
        setMessage('')
    }

    const submit = () => {
        const formData = new FormData()
        formData.append('email', email)

        fetch(
            `http://localhost:7000/email`,
            {
                method: "POST",
                body: formData
            }
            )
                .then(res => {
                    setMessage(`Email ${email} added!`)
                    setEmail('')
                    refreshCallback()
                })
                .catch(error => setMessage(error))
    }

    return (
        <Form>
            <Form.Group className='inputForm'>
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={onChange} value={email} type="email" placeholder="Enter email" isInvalid={!valid} isValid={email !== '' && valid} />
                <Form.Control.Feedback type="invalid">
                    Invalid Format
                </Form.Control.Feedback>
            </Form.Group>

            <Button onClick={submit} variant="primary" disabled={email === '' || !valid}>
                Submit
            </Button>
            <br />
            { message && <div className='message'>{message}</div> }
        </Form>
    )

}

export default InputForm