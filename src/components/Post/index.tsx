// import { Link } from 'react-router-dom';

import classes from './Post.module.css';

interface PostProps {
    id: string;
    author: string;
    body: string;
}

function Post({ id, author, body }: PostProps) {
    return (
        <li className={classes.post}>
            <a href={id}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
            </a>
        </li>
    );
}

export default Post;