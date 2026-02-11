import { Link } from 'react-router-dom'
import Badge from './Badge'

export default function BlogPostCard({ post }) {
    const dateStr = new Date(post.date).toLocaleDateString('zh-TW')

    return (
        <li className="list-none">
            <article className="flex flex-col lg:flex-row gap-0">
                <div className="w-full lg:w-1/3">
                    <img
                        src={post.cover}
                        className="w-full h-full object-cover rounded-xl"
                        alt={post.title}
                    />
                </div>
                <div className="w-full lg:w-2/3 relative">
                    <div className="pt-4 lg:pt-0 lg:pl-6 lg:pr-0">
                        <div className="flex justify-between lg:justify-start items-center gap-3 mb-3">
                            <p className="text-base text-primary-600 mb-0">
                                <small className="text-primary-500">{dateStr}</small>
                            </p>
                            {post.tags.map(tag => (
                                <Badge key={tag}>{tag}</Badge>
                            ))}
                        </div>
                        <h5 className="mb-3 text-primary-700 font-medium">{post.title}</h5>
                        <Link to={`/blog/${post.slug}`} className="absolute inset-0" />
                    </div>
                </div>
            </article>
        </li>
    )
}
