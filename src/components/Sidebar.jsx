import { Link, useSearchParams } from 'react-router-dom'

export default function Sidebar({ tags, currentTag }) {
    const [searchParams] = useSearchParams()

    return (
        <aside className="bg-primary-100 px-3 py-4 lg:p-7 overflow-x-auto lg:overflow-visible lg:sticky lg:top-4">
            <ul className="flex lg:flex-col justify-center lg:justify-start gap-7 m-0 p-0 list-none">
                <li className="shrink-0">
                    <Link
                        to="/blog"
                        className={`pb-1 text-lg no-underline ${!currentTag ? 'blog-menu--active text-primary-800' : 'text-primary-600 hover:text-primary-500'}`}
                    >
                        全部文章
                    </Link>
                </li>
                {tags.map(tag => (
                    <li key={tag} className="shrink-0">
                        <Link
                            to={`/blog?tag=${encodeURIComponent(tag)}`}
                            className={`pb-1 text-lg no-underline ${currentTag === tag ? 'blog-menu--active text-primary-800' : 'text-primary-600 hover:text-primary-500'}`}
                        >
                            {tag}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
