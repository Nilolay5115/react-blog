import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://avatars.mds.yandex.net/i?id=1d1351eca6ac04e41abf73b485b8638df65a34f9-7762005-images-thumbs&n=13" alt="" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostData">1 hour ago</span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, odit, veniam rerum necessitatibus odio iure cumque dicta aliquid libero ipsum, esse blanditiis corporis? Eveniet itaque accusamus iure voluptatem quia libero!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, odit, veniam rerum necessitatibus odio iure cumque dicta aliquid libero ipsum, esse blanditiis corporis? Eveniet itaque accusamus iure voluptatem quia libero!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, odit, veniam rerum necessitatibus odio iure cumque dicta aliquid libero ipsum, esse blanditiis corporis? Eveniet itaque accusamus iure voluptatem quia libero!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, odit, veniam rerum necessitatibus odio iure cumque dicta aliquid libero ipsum, esse blanditiis corporis? Eveniet itaque accusamus iure voluptatem quia libero!</p>
            </div>
        </div>
    )
}
