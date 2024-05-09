import React from 'react'
import './EmpEdit.css'
import Header from '../components/Header'

const EmployeeEdit = () => {
    return (
        <>
        <Header />
            <div style={{fontSize:"30px", marginTop:"25px", marginLeft:"12px"}}>
                Employee Edit
            </div>

            <div className="form">
                <form>
                    <div>
                        <label htmlFor='uname'>Name</label>
                        <input type='text' id="uname" name="uname" />
                    </div>
                    
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id="email" name="email" />
                    </div>

                    <div>
                        <label htmlFor='mbno'>Mobile No</label>
                        <input style={{marginLeft:"60px"}} type='number' id="mbno" name="mbno" /> 
                    </div>

                    <div>
                    <label htmlFor='designation'>Designation</label>
                        <select style={{marginLeft:"48px", padding:"10px"}} name='designation'>
                            <option name="hr">HR</option>
                            <option name="manager">Manager</option>
                            <option name="sale">Sale</option>
                        </select>
                    </div>

                    <div className="radio-group">
                        <label htmlFor='gender'>Gender</label>
                        <input style={{marginLeft:"-180px"}} type='radio' name="gender" value="male"  />
                        <label style={{marginLeft:"-240px"}} htmlFor='male'>Male</label> 
                        <input style={{marginLeft:"-110px"}} type='radio' name="gender" value="female"  />
                        <label style={{marginLeft:"-240px"}} htmlFor='female'>Female</label>
                    </div>

                    <div className="checkbox-group">
                        <label htmlFor='course'>Course</label>
                        
                        <input style={{marginLeft:"-180px"}} type='checkbox' name="course" value="bca"  />
                        <label style={{marginLeft:"-240px"}} htmlFor='bca'>BCA</label>
                        
                        <input style={{marginLeft:"-110px"}} type='checkbox' name="course" value="mca"  />
                        <label style={{marginLeft:"-240px"}} htmlFor='mca'>MCA</label>
                        
                        <input style={{marginLeft:"-110px"}} type='checkbox' name="course" value="bsc"  />
                        <label style={{marginLeft:"-240px"}} htmlFor='bsc'>BSC</label>
                    </div>

                    <div>
                        <label htmlFor='img'>Img Upload</label>
                        <input style={{marginLeft:"30px"}} type='file' name="img" />
                    </div>

                    <input className="submit" type='submit'  name="update" value="Update" />
                    
                </form>
            </div>
            
        </>
    )
}

export default EmployeeEdit;