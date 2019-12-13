import React from 'react'

const Inversion = ({data, index}) => {
    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td>{data.name}</td>
            <td>${data.amount}</td>
            <td>{data.created}</td>
        </tr>
    )
}

export default Inversion
