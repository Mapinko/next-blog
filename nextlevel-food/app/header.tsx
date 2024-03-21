import Image from 'next/image';

const Header = ()   => {
    return (
        <header>
            <Image src="/logo.png" alt="A server surrounded by magic sparkles." width={500} height={500}/>
            <h1>Next Level Food</h1>
        </header>
    )
}

export default Header