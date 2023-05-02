
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Table from './components/Table';
import UserState from './context/users/UserState';


function App() {
 
  return (
    <>
      <UserState>
        <Navbar />
        {/* <Home /> */}
        <Table />
      </UserState>
    </>
  );
}

export default App;

//