import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://avatars.mds.yandex.net/i?id=fb83089abc92d01f424be7f868886cd317ffd4c4-9857494-images-thumbs&n=13" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="fa-solid fa-circle-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
