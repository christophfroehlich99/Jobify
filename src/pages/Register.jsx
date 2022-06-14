import {useState, useEffect} from "react"
import {Logo} from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true
}

const Register = () => {
  const [values,SetValues] = useState(initialState)

  const handleChange = (e) => {
    SetValues(prevValues => ({...prevValues, name: e.target.value}))

  const onSubmit = (e) => 
    e.preventDefault()
    console.log(e.target)
  }
    return (
      <Wrapper className="full-page">
        <form className='form'>
          <Logo />
          <h3>Login</h3>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input 
              type="text" 
              value={values.name}
              name="name" 
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="btn btn-block">Submit</button>
        </form>
      </Wrapper>
    )
  }
  export default Register