import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"


export default function Settings() {
  return (
    <div className="settings">
        <div className="settingWrapper">
          <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
          </div>
          <form className="settingForm">
            <label>Profile Picture</label>
            <div className="settingPP">
              <img src="https://avatars.mds.yandex.net/i?id=d9cf95101b005e266451e3918f194440_l-3738903-images-thumbs&n=13" alt="" />
              <label htmlFor="fileInput">
              <i className="settingPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Safak"/>
            <label>Email</label>
            <input type="email" placeholder="safak@.gmail.com"/>
            <label>Password</label>
            <input type="password" />
            <button className="settingSubmit">Upade</button>
          </form>
        </div>
        <Sidebar />
    </div>
  )
}
