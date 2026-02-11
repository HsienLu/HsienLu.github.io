import { Link } from 'react-router-dom'
import Badge from './Badge'

export default function ArticleCard({ post }) {
    const dateStr = new Date(post.date).toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })

    return (
        <div className="relative">
            <div className="border-0">
                <img
                    src={post.cover}
                    style={{ height: '300px', objectFit: 'cover' }}
                    className="w-full rounded-xl"
                    alt={post.title}
                />
                <div className="py-4">
                    <h5 className="mb-3 text-primary-700 font-medium">{post.title}</h5>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 overflow-x-hidden">
                            {post.tags.slice(0, 2).map(tag => (
                                <Badge key={tag}>{tag}</Badge>
                            ))}
                        </div>
                        <p className="text-base text-primary-600 mb-0">
                            <small className="text-primary-500">{dateStr}</small>
                        </p>
                    </div>
                </div>
            </div>
            <Link to={`/blog/${post.slug}`} className="absolute inset-0" />
        </div>
    )
}
