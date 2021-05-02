import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputForm from "./components/InputForm"
import EmailTable from "./components/EmailTable"
import { useState } from 'react'

function App() {
    const [refresh, setRefresh] = useState(false)

    const refreshCallback = () => {
        setRefresh(!refresh)
    }

    return (
        <div className="App">
            <h2>Manage your email subscription</h2>
            <InputForm refreshCallback={refreshCallback} />
            <EmailTable refresh={refresh} />
        </div>
    )
}

export default App
