import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Genki</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam ex in totam ratione corporis ullam consequatur ipsam ab assumenda quas, fugit laboriosam adipisci inventore error voluptate eveniet minima id labore ut natus similique non, repellendus impedit? Eos voluptates fugiat libero minima nostrum asperiores ab et culpa, eaque laborum nulla, eum nobis dignissimos cum reiciendis rem, consequuntur obcaecati sint! Eum fugiat ipsum doloremque dolorem blanditiis sed, doloribus veritatis nobis sint nulla odio deleniti odit, exercitationem maxime in impedit fugit totam delectus rerum beatae incidunt modi aspernatur? Quia consectetur cupiditate tempore eos, laboriosam voluptates nesciunt, unde ut suscipit, saepe totam magni.</p>
            </div>
        </div>
    )
}
