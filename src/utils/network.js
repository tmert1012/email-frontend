const BASE_URL = 'http://localhost:7000/email'

// load all email records
export const getRecords = async () => {
    const response = await fetch(BASE_URL, { method: "GET" })

    if (!response.ok)
        throw new Error(`Unable to load records.`)

    return response.json()
}

// save email
export const save = async (email) => {
    const formData = new FormData()
    formData.append('email', email)

    const response = await fetch(BASE_URL, {
        method: "POST",
        body: formData
    })

    if (!response.ok)
        throw new Error(`Unable to save email.`)

    return response
}

// delete email based on UUID
export const deleteRecord = async (uuid) => {
    const response = await fetch(`${BASE_URL}/${uuid}`, { method: "DELETE" })

    if (!response.ok)
        throw new Error(`Unable to delete email.`)

    return response
}