import React from 'react'
import Dashboard from '../Dashboard'
import '../Style/serviceM.css'
import ModalBtn from './Modal'
import Tables from './Table'

const ServiceManagement = () => {
  return (
    <div className='service-section'>
      <Dashboard/>

      <div className="section">
       <h2>Service Management</h2>

       <div className="crud-section">
<div className="input-field">
<form action="">
    <label htmlFor="">Search: <input type="text"  className='search-bar'/></label>
&nbsp;
<ModalBtn/>

<div className="table-section">
<Tables/>
</div>

  </form>
</div>

</div>

      </div>
    </div>
  )
}

export default ServiceManagement