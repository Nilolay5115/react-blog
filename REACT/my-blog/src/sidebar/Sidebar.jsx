import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img className="sidebarImg" src="https://avatars.mds.yandex.net/get-altay/4335161/2a00000178b1178636aa31cc9f5110d10625/XXL_height" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum hic inventore deserunt nemo.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarItem">Life</li>
                    <li className="sidebarItem">Music</li>
                    <li className="sidebarItem">Style</li>
                    <li className="sidebarItem">Sport</li>
                    <li className="sidebarItem">Tech</li>
                    <li className="sidebarItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarSocialIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarSocialIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarSocialIcon fa-brands fa-square-instagram"></i>
                    <i className="sidebarSocialIcon fa-brands fa-square-pinterest"></i>
                </div>
            </div>
        </div>
    )
}
