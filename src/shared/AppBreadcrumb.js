
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGlobeEurope, faHome, faShieldAlt, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";

const AppBreadcrumb = (props) => {

  useEffect(() => {

  }, [])

  return (
    <div style={style.container}>
      <div className="d-flex w-100">
        <div className="pe-4">
          <button className="btn btn-outline-primary">
            <FontAwesomeIcon icon={faHome} />
          </button>
        </div>
        <div className="flex-grow-1">
          <div className="row">
            <div className="col-3 d-flex align-items-center">
              <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
              <button className="btn btn-outline-primary dropdown-toggle flex-grow-1 ms-4 px-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-inline-flex">
                  <div>
                    <FontAwesomeIcon className="me-2" icon={faGlobeEurope} />
                  </div>
                  <div className="flex-grow-1 ps-4 text-start">
                    <span className="me-2 text-muted">ESP</span>
                    <span className="text-dark">Spain</span>
                  </div>
                </div>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <input class="form-control" id="filterTable" type="text" placeholder="Cari Disini.." />
                <div>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </div>
              </ul>
            </div>

            <div className="col-3 d-flex align-items-center">
              <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
              <button className="btn btn-outline-primary dropdown-toggle flex-grow-1 ms-4 px-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-inline-flex">
                  <div>
                    <FontAwesomeIcon className="me-2" icon={faTrophy} />
                  </div>
                  <div className="flex-grow-1 ps-4 text-start">
                    <span className="text-dark">La Liga</span>
                  </div>
                </div>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <input class="form-control" id="filterTable" type="text" placeholder="Cari Disini.." />
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div className="col-3 d-flex align-items-center">
              <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
              <button className="btn btn-outline-primary dropdown-toggle flex-grow-1 ms-4 px-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-inline-flex">
                  <div>
                    <FontAwesomeIcon className="me-2" icon={faShieldAlt} />
                  </div>
                  <div className="flex-grow-1 ps-4 text-start">
                    <span className="me-2 text-muted">FCB</span>
                    <span className="text-dark">FC Barcelona</span>
                  </div>
                </div>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <input class="form-control" id="filterTable" type="text" placeholder="Cari Disini.." />
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div className="col-3 d-flex align-items-center">
              <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
              <button className="btn btn-outline-primary dropdown-toggle flex-grow-1 ms-4 px-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-inline-flex">
                  <div>
                    <FontAwesomeIcon className="me-2" icon={faUser} />
                  </div>
                  <div className="flex-grow-1 ps-4 text-start">
                    <span className="text-dark">L. Messi</span>
                  </div>
                </div>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <input class="form-control" id="filterTable" type="text" placeholder="Cari Disini.." />
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
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