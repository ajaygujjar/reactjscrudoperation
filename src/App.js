 
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import StudentTable from './StudentTable'
import './App.css';
import ViewStudent from './ViewStudent';
import EditStudent from './EditStudent';
import CreateStudent from './CreateStudent';
// Import Bootstrap
 
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StudentTable/>}></Route>
      <Route path='/student/view/:studentid' element={<ViewStudent/>}></Route>
      <Route path='/student/edit/:studentid' element={<EditStudent/>}></Route>
      <Route path='/student/create' element={<CreateStudent/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
