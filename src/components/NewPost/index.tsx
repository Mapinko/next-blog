import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';
import Modal from '../Modal';
import classes from './NewPost.module.css';

function NewPost() {
    const router = useRouter();
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const postData = { body, author };

        await fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        router.push('/');
    };

    const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(event.target.value);
    };

    const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAuthor(event.target.value);
    };

    return (
        <Modal>
            <form onSubmit={handleSubmit} className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea
                        id="body"
                        name="body"
                        required
                        rows={3}
                        value={body}
                        onChange={handleBodyChange}
                    />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input
                        type="text"
                        id="name"
                        name="author"
                        required
                        value={author}
                        onChange={handleAuthorChange}
                    />
                </p>
                <p className={classes.actions}>
                    <Link href="..">
                        <a>Cancel</a>
                    </Link>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;