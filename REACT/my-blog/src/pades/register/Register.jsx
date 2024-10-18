import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <form className="registerForm">
            <label>Email</label>
            <input type="text" placeholder="email"/>
            <label>Password</label>
            <input type="password" placeholder="Password"/>
        <button className="registerBtn">Register</button>
        </form>
        <button className="registerLoginBtn">Login</button>
    </div>
  )
}
