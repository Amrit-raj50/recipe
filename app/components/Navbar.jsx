import Link from 'next/link'
export default function Navbar(){
    return(
        <nav style={{
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'space-around'
        }}>
                <Link href='/'>Home</Link>
                <Link href='/addRec'>add</Link>
        </nav>
    )
}