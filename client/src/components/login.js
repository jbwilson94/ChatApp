import React from 'react'

export default function login() {
  return (
    <div className='form-page'>
        <form className='form-container'>
            <h1>Login</h1>
            <label for="id">Enter ID</label>
            <input type="text" name="id"></input>
            <button>Login</button>
            <button>Generate ID</button>
        </form>
    </div>
  )
}
