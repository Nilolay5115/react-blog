import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <form className="loginForm">
            <label>Email</label>
            <input type="text" placeholder="email"/>
            <label>Password</label>
            <input type="password" placeholder="Password"/>
        <button className="loginBtn">Login</button>
        </form>
        <button className="registerBtn">Register</button>
    </div>
  )
}
