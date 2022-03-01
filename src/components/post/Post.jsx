import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
            className="postImg" 
            src={`${process.env.PUBLIC_URL}/image/IMG_7176.jpg`} 
            alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum aliquid eveniet sint veritatis incidunt architecto, perspiciatis adipisci consequuntur alias. Recusandae eos ab ex ut expedita, perspiciatis eaque. Cumque, saepe aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, aliquam labore. Officiis facilis magnam ducimus beatae facere ut, velit natus fugiat distinctio corrupti. Aspernatur omnis quia magni nemo? Consequuntur, odit.
            </p>
        </div>
    )
}
