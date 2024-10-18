import "./topbar.css"
import {Link} from "react-router-dom"

export default function topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={"/"} >Главная</Link>
          </li>
          <li className="topListItem"><Link className="link" to={"/"} >О Нас</Link></li>
          <li className="topListItem"><Link className="link" to={"/settings"} >Контакты</Link></li>
          <li className="topListItem"><Link className="link" to={"/write"} >Написать</Link></li>
          <li className="topListItem">
            {user && "Выход"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImg" src="https://avatars.mds.yandex.net/i?id=82c2f7e2a56c19ce86a29325c81c7ff2_l-5289303-images-thumbs&n=13" alt="" />

          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">Выход</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">Регистрация</Link>
            </li>
            </ul>
          )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> 
      </div>
    </div>
  )
}
