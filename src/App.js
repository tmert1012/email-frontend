import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from "./components/InputForm";
import EmailTable from "./components/EmailTable";

function App() {
  return (
    <div className="App">
        <h2>Manage your email subscription</h2>
        <InputForm />
        <EmailTable />
    </div>
  );
}

export default App;
