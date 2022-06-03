import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectPostByUser } from "../posts/postsSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postForUser = useSelector((state) =>
    selectPostByUser(state, Number(userId))
  );

  const postTitles = postForUser.map((post) => (
    <li key={post.userId}>
      <Link to={`/posts/${post.Id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
