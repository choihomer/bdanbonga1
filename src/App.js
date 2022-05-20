/*eslint-disable*/
import './App.css';
import bgimg from './img/main1.jpg' ;
import bglogo from './img/logo1.jpg' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App Container">
      <nav className="navbar navbar-expand-md bg-light">
        <div className="container-fluid">
          <img src={bglogo} width ="40px"/>
          <a className="navbar-brand" href="#">비단본가</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">신부한복</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">신랑한복</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">혼주한복</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">하객한복</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">찾아오시는길</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">관리자</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      <div className="imgBox">
        <img src={bgimg}></img>
      </div>
      <div></div>
      <footer>
        <div className="row mainFooter">
          <span className="col-lg-4 col-md-12">
            <FontAwesomeIcon icon={faPhone} /> 043-234-5165</span>
          <span className="col-lg-4 col-md-12"><FontAwesomeIcon icon={faLocationDot} /> 충청북도 청주시 서원구 성화로 101</span>
          <span className="col-lg-4 col-md-12"><FontAwesomeIcon icon={faLocationDot} /> 충청북도 청주시 서원구 죽림동 328</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
