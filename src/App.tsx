import styled from 'styled-components'
import './App.css'
import DataTable from './DataTable';

const AppContainer = styled.div`
  /* Define global app styles here */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

function App() {
  return (
    <div className="App">
      <h1>My SQLite Table Data</h1>
      <AppContainer>
        <DataTable />
      </AppContainer>
    </div>
  );
}

export default App
