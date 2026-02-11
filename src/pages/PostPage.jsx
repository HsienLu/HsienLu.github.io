import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { usePosts } from '../hooks/usePosts'
import ArticleCard from '../components/ArticleCard'
import Badge from '../components/Badge'

export default function PostPage() {
    const { slug } = useParams()
    const { getPostBySlug, getRelatedPosts } = usePosts()
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(true)

    const post = getPostBySlug(slug)
    const relatedPosts = getRelatedPosts(slug, 3)

    useEffect(() => {
        setLoading(true)
        fetch(`/posts/${slug}.md`)
            .then(res => res.text())
            .then(text => {
                // 移除 frontmatter
                const cleaned = text.replace(/^---[\s\S]*?---/, '').trim()
                setContent(cleaned)
                setLoading(false)
                window.scrollTo({ top: 0 })
            })
            .catch(err => {
                console.error('無法載入文章:', err)
                setContent('# 文章載入失敗')
                setLoading(false)
            })
    }, [slug])

    if (loading || !post) {
        return (
            <main className="max-w-7xl mx-auto px-4 py-20 text-center text-primary-500">
                載入中...
            </main>
        )
    }

    const dateStr = new Date(post.date).toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })

    return (
        <main>
            <section className="max-w-7xl mx-auto px-4 pb-7 pt-0 lg:pt-9 lg:pb-7 lg:mt-9">
                <div className="flex flex-col-reverse lg:flex-row justify-between pb-0 md:pb-7">
                    {/* Sidebar 區域 — 可從此連回 Blog */}
                    <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                        <aside className="bg-primary-100 px-3 py-4 lg:p-7 lg:sticky lg:top-4">
                            <Link to="/blog" className="text-primary-600 no-underline hover:text-primary-800 text-lg">
                                ← 返回部落格
                            </Link>
                        </aside>
                    </div>

                    {/* 文章內容 */}
                    <article className="article-container w-full lg:w-2/3 mt-9 lg:mt-0 pt-9 lg:pt-0 text-primary-700">
                        {/* Breadcrumb */}
                        <nav className="mb-3 lg:mb-7" aria-label="breadcrumb">
                            <ol className="flex items-center gap-2 list-none p-0 m-0">
                                {post.tags.length > 0 && (
                                    <li className="text-primary-500">
                                        <Link
                                            to={`/blog?tag=${encodeURIComponent(post.tags[0])}`}
                                            className="text-primary-500 no-underline hover:text-primary-700"
                                        >
                                            {post.tags[0]}
                                        </Link>
                                    </li>
                                )}
                                <li className="text-primary-400 breadcrumb-divider">/</li>
                                <li className="text-primary-500">{dateStr} 發佈</li>
                            </ol>
                        </nav>

                        <h1 className="mb-3 lg:mb-4 text-3xl text-center">{post.title}</h1>

                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                            {content}
                        </ReactMarkdown>
                    </article>
                </div>
            </section>

            {/* 相關文章 */}
            {relatedPosts.length > 0 && (
                <section className="max-w-7xl mx-auto px-6 lg:px-4 pt-7 pb-7 lg:pb-9 lg:mt-7 mb-7 lg:mb-9 border-t border-primary-400">
                    <h3 className="mb-7 text-center lg:text-left text-primary-700 text-xl font-bold">
                        相關文章
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {relatedPosts.map(rp => (
                            <ArticleCard key={rp.slug} post={rp} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    )
}
