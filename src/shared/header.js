
import React, { useEffect, useState } from "react";
import logoPath from '../assets/horizontal-logo.svg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { CHANGE_SEARCH_INPUT } from "../stores/actions";

const Header = (props) => {

  useEffect(() => {

  }, [])

  const dispatch = useDispatch()
  const changeSearchInput = (value) => {
    dispatch({
      type: CHANGE_SEARCH_INPUT,
      payload: value
    })
  }

  const inputOnchangeHandler = (event) => {
    switch (event.target.id) {
      case "searchInput":
        changeSearchInput(event.target.value)
        break
      default:
        break
    }
  }

  return (
    <div style={style.container}>
      <div className="flex-grow-1">
        <div style={style.logoWrapper}>
          <Link to="/home">
            <img src={logoPath} alt={"logo"} />
          </Link>
        </div>
      </div>

      <div >
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={newFields => {
            inputOnchangeHandler(newFields)
          }} />
          <button class="btn btn-primary" type="button" id="button-addon2">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  )
}

const style = {
  container: {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    background: '#ffffff',
    padding: '8px 16px',
    boxShadow: '0px 8px 80px rgba(0, 0, 0, 0.06)',
    zIndex: '4'
  },
}

export default Header