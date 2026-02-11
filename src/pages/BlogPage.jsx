import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'
import Sidebar from '../components/Sidebar'
import BlogPostCard from '../components/BlogPostCard'

const PER_PAGE = 6

export default function BlogPage() {
    const { posts, loading, getTags, getPostsByTag } = usePosts()
    const [searchParams] = useSearchParams()
    const currentTag = searchParams.get('tag') || ''
    const [currentPage, setCurrentPage] = useState(1)

    const filteredPosts = currentTag ? getPostsByTag(currentTag) : posts
    const totalPages = Math.ceil(filteredPosts.length / PER_PAGE)
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * PER_PAGE,
        currentPage * PER_PAGE
    )

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (loading) {
        return (
            <main className="max-w-7xl mx-auto px-4 py-20 text-center text-primary-500">
                載入中...
            </main>
        )
    }

    return (
        <main>
            <section className="max-w-7xl mx-auto px-4 pb-7 md:pb-9">
                <div className="py-7 lg:py-9 lg:mt-9">
                    <h2 className="title-deco mb-3 lg:mb-4 text-center text-primary-700 tracking-wide-custom font-semibold text-2xl">
                        部落格
                    </h2>
                    <p className="mb-0 text-center text-primary-500">不定期分享技術文章</p>
                </div>

                <div className="flex flex-col-reverse lg:flex-row lg:mb-9">
                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 relative">
                        <Sidebar tags={getTags()} currentTag={currentTag} />
                    </div>

                    {/* 文章列表 */}
                    <ul className="flex flex-col gap-7 lg:gap-9 w-full lg:w-3/4 mt-9 lg:mt-0 mb-0 pt-9 lg:pt-0 lg:pl-4 p-0">
                        {paginatedPosts.map(post => (
                            <BlogPostCard key={post.slug} post={post} />
                        ))}
                    </ul>
                </div>

                {/* 分頁 */}
                {totalPages > 1 && (
                    <nav className="mb-7 md:mb-9" aria-label="Page navigation">
                        <ul className="flex justify-center gap-3 list-none p-0">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <li key={page}>
                                    <button
                                        onClick={() => handlePageChange(page)}
                                        className={`px-3 py-1 rounded border text-base cursor-pointer ${page === currentPage
                                                ? 'page-active border-primary-900'
                                                : 'bg-white text-primary-700 border-primary-300 hover:bg-primary-100'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </section>
        </main>
    )
}
