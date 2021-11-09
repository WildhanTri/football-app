
import React, { useEffect } from "react";
import logoPath from '../assets/horizontal-logo.svg';
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCoffee, faGlobeEurope, faHome, faSearch, faShieldAlt, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";

const AppBreadcrumb = (props) => {

  useEffect(() => {

  }, [])

  return (
    <div style={style.container}>
      <div className="d-flex w-100">
        <div className="pe-4">
          <Button variant="outline-primary">
            <FontAwesomeIcon icon={faHome} />
          </Button>
        </div>
        <div className="flex-grow-1">
          <div className="row">
            <div className="col-3 d-flex align-items-center">
              <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
              <Button className="flex-grow-1 ms-4 px-2" variant="outline-primary">
                <div className="d-flex">
                  <div>
                    <FontAwesomeIcon className="me-2" icon={faGlobeEurope} />
                  </div>
                  <div className="flex-grow-1 ps-4 text-start">
                    <span className="me-2 text-muted">ESP</span>
                    <span className="text-dark">Spain</span>
                  </div>
                </div>
              </Button>
            </div>

            <div className="col-3 d-flex align-items-center">
              <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
              <Button className="flex-grow-1 ms-4 px-2" variant="outline-primary">
                <div className="d-flex">
                  <div>
                    <FontAwesomeIcon className="me-2" icon={faTrophy} />
                  </div>
                  <div className="flex-grow-1 ps-4 text-start">
                    <span className="text-dark">La Liga</span>
                  </div>
                </div>
              </Button>
            </div>

            <div className="col-3 d-flex align-items-center">
              <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
              <Button className="flex-grow-1 ms-4 px-2" variant="outline-primary">
                <div className="d-flex">
                  <div>
                    <FontAwesomeIcon className="me-2" icon={faShieldAlt} />
                  </div>
                  <div className="flex-grow-1 ps-4 text-start">
                    <span className="me-2 text-muted">FCB</span>
                    <span className="text-dark">FC Barcelona</span>
                  </div>
                </div>
              </Button>
            </div>

            <div className="col-3 d-flex align-items-center">
              <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
              <Button className="flex-grow-1 ms-4 px-2" variant="outline-primary">
                <div className="d-flex">
                  <div>
                    <FontAwesomeIcon className="me-2" icon={faUser} />
                  </div>
                  <div className="flex-grow-1 ps-4 text-start">
                    <span className="text-dark">L. Messi</span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const style = {
  container: {
    display: 'flex',
    width: '100%',
    background: '#ffffff',
    padding: '8px 16px',
    boxShadow: '0px 8px 80px rgba(0, 0, 0, 0.06)',
  },
}

export default AppBreadcrumb