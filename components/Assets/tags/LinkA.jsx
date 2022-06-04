import Link from 'next/link'

const LinkA = (props) => {
    return (
        <Link {...props}>
            <a {...props}>{props.children}</a>
        </Link>
    )
}

export default LinkA;