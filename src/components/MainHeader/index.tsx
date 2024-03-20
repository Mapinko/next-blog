import Link from 'next/link';
// import { ChatboxOutline, AddOutline } from 'react-icons/io';


import classes from './MainHeader.module.css';

function MainHeader() {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                {/* <ChatboxOutline /> */}
                React Poster
            </h1>
            <p>
                <Link href="/create-post" passHref>
                    <a className={classes.button}>
                        {/* <AddOutline size={18} /> */}
                        New Post
                    </a>
                </Link>
            </p>
        </header>
    );
}

export default MainHeader;