
import React, { useEffect, useState } from "react";

const CompetitionCardItem = (props) => {
  return (
    <div style={styles.container}>
      <div className="d-flex align-items-center">
        <div>
          <img
            src={props.image}
            alt="competition"
            style={{ width: "100px", height: "100px" }} />
        </div>
        <div className="px-4 flex-grow-1">
          <h4 className="fw-bold text-end">{props.name}</h4>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    marginTop: 0,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    padding: "16px 16px",
    textAlign: 'left'
  },
}

export default CompetitionCardItem;