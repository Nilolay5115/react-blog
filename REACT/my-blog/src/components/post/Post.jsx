import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://vizpin.com/wp-content/uploads/blog-1000.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laboriosam recusandae dignissimos autem. Hic, nisi inventore molestias consectetur officia, aspernatur assumenda beatae suscipit deleniti eligendi enim nostrum? Necessitatibus, hic totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laboriosam recusandae dignissimos autem. Hic, nisi inventore molestias consectetur officia, aspernatur assumenda beatae suscipit deleniti eligendi enim nostrum? Necessitatibus, hic totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laboriosam recusandae dignissimos autem. Hic, nisi inventore molestias consectetur officia, aspernatur assumenda beatae suscipit deleniti eligendi enim nostrum? Necessitatibus, hic totam.</p>
            </div>
        </div>
    )
}
