import React from 'react'
import './CreateEmp.css'
import Header from '../components/Header'

const CreateEmployee = () => {
    return (
        <div style={{color:"white"}}>
        <Header />
            <div style={{fontSize:"30px", marginTop:"25px", marginLeft:"12px", color: "rgb(201, 67, 134) ", fontWeight:"bold"}}>
                Create Employee
            </div>

            <div className="forms">
                <form>
                    <div>
                        <label htmlFor='uname'>Name</label>
                        <input style={{marginBottom:"20px", width:"400px"}} type='text' id="uname" name="uname" />
                    </div>
                    
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input style={{marginBottom:"20px", width:"400px"}}  type='email' id="email" name="email" />
                    </div>

                    <div>
                        <label htmlFor='mbno'>Mobile No</label>
                        <input style={{marginLeft:"60px", marginBottom:"20px", width:"400px"}} type='number' id="mbno" name="mbno" /> 
                    </div>

                    <div>
                    <label htmlFor='designation'>Designation</label>
                        <select style={{marginLeft:"48px", padding:"10px", marginBottom:"20px", width:"425px"}} name='designation'>
                            <option name="hr">HR</option>
                            <option name="manager">Manager</option>
                            <option name="sale">Sale</option>
                        </select>
                    </div>

                    <div className="radio-group">
                        <label htmlFor='gender'>Gender</label>
                        <input style={{marginLeft:"96px",  marginBottom:"20px"}} type='radio' name="gender" value="male"  />
                        <label style={{marginLeft:"15px",color:"white", fontSize:"16px"}} htmlFor='male'>Male</label> 
                        <input style={{marginLeft:"100px"}} type='radio' name="gender" value="female"  />
                        <label style={{marginLeft:"15px",color:"white", fontSize:"16px"}} htmlFor='female'>Female</label>
                    </div>

                    <div className="checkbox-group">
                        <label htmlFor='course'>Course</label>
                        
                        <input style={{marginLeft:"100px",  marginBottom:"20px"}} type='checkbox' name="course" value="bca"  />
                        <label style={{marginLeft:"15px",color:"white", fontSize:"16px"}} htmlFor='bca'>BCA</label>
                        
                        <input style={{marginLeft:"100px"}} type='checkbox' name="course" value="mca"  />
                        <label style={{marginLeft:"15px",color:"white", fontSize:"16px"}} htmlFor='mca'>MCA</label>
                        
                        <input style={{marginLeft:"100px"}} type='checkbox' name="course" value="bsc"  />
                        <label style={{marginLeft:"15px",color:"white", fontSize:"16px"}} htmlFor='bsc'>BSC</label>
                    </div>

                    <div>
                        <label htmlFor='img'>Img Upload</label>
                        <input style={{marginLeft:"30px", color:"white"}} type='file' name="img" />
                    </div>

                    <input className="csubmit" type='submit'  name="submit" value="Submit" />
                    
                </form>
            </div>
            
        </div>
    )
}

export default CreateEmployee