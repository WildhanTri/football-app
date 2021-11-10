
import React, { useEffect, useState } from "react";

const AreaCardItem = (props) => {
  return (
    <div style={styles.container}>
      <div className="d-flex">
        <div className="px-4 flex-grow-1">
          <h4 className="fw-bold">{props.name}</h4>
          <h6>{props.parentArea}</h6>
        </div>
        <div className="d-flex align-items-center">
          <h2 className="fw-bold text-muted">{props.code}</h2>
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

export default AreaCardItem;