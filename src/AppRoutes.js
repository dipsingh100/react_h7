import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import Contact from './components/Contact';
import StudentInfo from './components/StudentInfo'
import Error from './components/Error';
import Edit from './components/Edit';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/students' element={<Students />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/new_student' element={<StudentInfo />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
