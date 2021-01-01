import Link from 'next/link';

// style
const linkStyle = {
    marginRight: 15
};
  
// header function
export default function Header(){
    return(
        <div className="bg-indigo-500 p-10 text-white">
            {/* link to home */}
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>

            {/* link to about */}
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </div>
    );
}