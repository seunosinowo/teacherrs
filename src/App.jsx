import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import TeacherDetails from './pages/TeacherDetails';
import TeacherDashboard from './pages/TeacherDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import TeacherProfile from './pages/TeacherProfile';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
// import SignIn from './pages/SignIn';
// import Register from './pages/Register';
import Messages from './pages/Messages';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teacher/:id" element={<TeacherDetails />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="/teacher-profile" element={<TeacherProfile />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} /> */}
            <Route path="/messages/:id" element={<Messages />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;