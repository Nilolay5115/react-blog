import "./topbar.css"

export default function topbar() {
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
          <li className="topListItem">Главная</li>
          <li className="topListItem">О Нас</li>
          <li className="topListItem">Контакты</li>
          <li className="topListItem">Написать</li>
          <li className="topListItem">Выход</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://avatars.mds.yandex.net/i?id=82c2f7e2a56c19ce86a29325c81c7ff2_l-5289303-images-thumbs&n=13" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> 
      </div>
    </div>
  )
}
