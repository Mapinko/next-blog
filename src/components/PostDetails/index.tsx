import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Modal from '../../components/Modal';
import classes from './PostDetails.module.css';

interface Post {
    author: string;
    body: string;
}

function PostDetails() {
    const router = useRouter();
    const { postId } = router.query;
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        async function fetchPost() {
            const response = await fetch('http://localhost:8080/posts/' + postId);
            const resData = await response.json();
            setPost(resData.post);
        }

        fetchPost();
    }, [postId]);

    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <a href=".." className={classes.btn}>
                            Okay
                        </a>
                    </p>
                </main>
            </Modal>
        );
    }

    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.author}</p>
                <p className={classes.text}>{post.body}</p>
            </main>
        </Modal>
    );
}

export default PostDetails;