/*eslint-disable*/
import './App.css';
import bgimg from './img/main1.jpg' ;
import bglogo from './img/logo1.jpg' ;
import { Button, Navbar, Container, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Bride from './routes/bride.js'

function App() {
  let navigate = useNavigate() ;
  return (
    <div className="App Container">
      <Navbar bg="black" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
          <img src={bglogo} width ="40px"/>비단본가
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}} >홈으로</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/bride')}}>신부한복</Nav.Link>
          <Nav.Link onClick={()=>{navigate('')}}>신랑한복</Nav.Link>
          <Nav.Link onClick={()=>{navigate('')}}>혼주한복</Nav.Link>
          <Nav.Link onClick={()=>{navigate('')}}></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
          <Route path='/' element={
            <div className="imgBox">
              <img src={bgimg}></img>
            </div>
         }/>
          <Route path="/bride" element={<Bride/>} />
      </Routes>
      
      <footer>
        <div className="row mainFooter">
          <span className="col-lg-4 col-md-12">
            <FontAwesomeIcon icon={faPhone} /> 043-234-5165</span>
          <span className="col-lg-4 col-md-12"><FontAwesomeIcon icon={faLocationDot} /> 충청북도 청주시 서원구 성화로 101</span>
          <span className="col-lg-4 col-md-12"><FontAwesomeIcon icon={faLocationDot} /> [지번] 충청북도 청주시 서원구 죽림동 328</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

//github에 자료가 안올라가고 오류남
//local에 자꾸 폴더가 생김