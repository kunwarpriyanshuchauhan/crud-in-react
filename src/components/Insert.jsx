import React, { useState } from 'react';
import axios from 'axios';
function Insert() {
  const [user,setUser]= useState({name:"",email:"",mobile:""})
           const handleSubmit=()=>{
            axios.post("http://localhost:3000/users",user)
           }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Insert Details</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
          required
          style={{ display: 'block', marginBottom: '10px', width: '50%' }}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="email"
          onChange={e => setUser({ ...user, email: e.target.value })}
          required
          style={{ display: 'block', marginBottom: '10px', width: '50%' }}
        />
        <input
          type="tel"
          name="mobile"
          value={user.mobile}
          onChange={e => setUser({ ...user, mobile: e.target.value })}
          placeholder="Phone Number"
          required
          style={{ display: 'block', marginBottom: '10px', width: '50%' }}
        />
        <button type="submit" style={{ padding: '6px 12px' }}>Submit</button>
      </form>
    </div>
  );
}

export default Insert;
