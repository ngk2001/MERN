import React from 'react'
import details from '../assets/companies.json'

function Companies() {
    return (
        <>
            <div className="container my-4">
                <div className="d-flex flex-wrap justify-content-around">
                    {details.map((d, i) => {
                        return <div className="mb-4" style={{ width: "20rem" }}>
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">{d.company}</h4>
                                    <h6 className="card-subtitle mb-3 text-muted">{d.location}</h6>

                                    

                                    <ul className="list-group list-group-flush">
                                        {d.employees.map((employee,i)=>{
                                        <li className="list-group-item">
                                            <strong>{employee.name}</strong>
                                            <span className="badge bg-info text-dark ms-2">
                                                {employee.role}
                                            </span>

                                            <div className="mt-2">
                                                <span className="badge bg-secondary me-1 mb-1">
                                                    {d.employees[0].skills[0]}
                                                </span>
                                                {/* <span className="badge bg-secondary me-1 mb-1">
                                                    {d.employees[0].skills[1]}
                                                </span>
                                                <span className="badge bg-secondary me-1 mb-1">
                                                    {d.employees[0].skills[2]}
                                                </span> */}
                                            </div>
                                        </li>
                                        {/* <li className="list-group-item">
                                            <strong>{d.employees[1].name}</strong>
                                            <span className="badge bg-info text-dark ms-2">
                                                {d.employees[1].role}
                                            </span>

                                            <div className="mt-2">
                                                <span className="badge bg-secondary me-1 mb-1">
                                                    {d.employees[1].skills[0]}
                                                </span>
                                                <span className="badge bg-secondary me-1 mb-1">
                                                    {d.employees[1].skills[1]}
                                                </span>
                                                <span className="badge bg-secondary me-1 mb-1">
                                                    {d.employees[1].skills[2]}
                                                </span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>{d.employees[2].name}</strong>
                                            <span className="badge bg-info text-dark ms-2"> {d.employees[2].role}</span>

                                            <div className="mt-2">
                                                <span className="badge bg-secondary me-1 mb-1">
                                                    {d.employees[2].skills[0]}
                                                </span>
                                                <span className="badge bg-secondary me-1 mb-1">
                                                    {d.employees[2].skills[1]}
                                                </span>
                                                <span className="badge bg-secondary me-1 mb-1">
                                                    {d.employees[2].skills[2]}
                                                </span>
                                            </div>
                                        </li> */}
                                        })}
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>

        </>

    )
}

export default Companies;
