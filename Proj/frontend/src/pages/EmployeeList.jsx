import React from 'react';
import './EmpList.css'; 
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    return (
        <>
        <Header />
            <div style={{fontSize:"30px", marginTop:"25px", marginLeft:"12px", display:"block"}}>
                Employee list
            </div>

            <div style={{display: "flex" , flexDirection:"row", justifyContent:"space-around" , margin:"20px", fontSize:"20px"}}>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              <div>
                Total Count : 4
              </div>
              <div>
                <button style={{  padding:"5px", width:"309px"}} >
                  <Link style={{textDecoration:"none", color:"white"}} to="/createemployee">
                    Create Employee
                  </Link>
                </button>
              </div>
            </div>

            <div style={{display: "flex" , flexDirection:"row", justifyContent:"flex-end" , margin:"20px", fontSize:"20px"}}>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              <div>
                Search
              </div>
              <div >
                <input style={{ padding:"5px", width:"490px"}}  type="text" />
              </div>
            </div>

          
      
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Unique Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Designation</th>
                            <th>Gender</th>
                            <th>Course</th>
                            <th>Create date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                         
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EmployeeList;
