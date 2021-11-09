
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Tables = (props) => {
    return (
        <div style={styles.container}>
            <table className="table table-condensed table-soccerpedia">
                <thead className="table-head">
                    <tr>
                        <th>No</th>
                        <th>Player Name</th>
                        <th>Position</th>
                        <th>Age</th>
                        <th>Nationality</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    <tr>
                        <td>1</td>
                        <td>Lorem Ipsum</td>
                        <td>Defender</td>
                        <td>29</td>
                        <td>Switzerland</td>
                        <td className="text-end">
                            <Button variant="primary">
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem Ipsum</td>
                        <td>Defender</td>
                        <td>29</td>
                        <td>Switzerland</td>
                        <td className="text-end">
                            <Button variant="primary">
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem Ipsum</td>
                        <td>Defender</td>
                        <td>29</td>
                        <td>Switzerland</td>
                        <td className="text-end">
                            <Button variant="primary">
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem Ipsum</td>
                        <td>Defender</td>
                        <td>29</td>
                        <td>Switzerland</td>
                        <td className="text-end">
                            <Button variant="primary">
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem Ipsum</td>
                        <td>Defender</td>
                        <td>29</td>
                        <td>Switzerland</td>
                        <td className="text-end">
                            <Button variant="primary">
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const styles = {
    container: {
        marginTop: 0,
        marginBottom: 12,
        backgroundColor: '#FFFFFF',
        padding: "16px 16px",
        textAlign: 'left'
    },
}

export default Tables;