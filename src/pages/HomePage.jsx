import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useLocation } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'
import { skills, socialLinks, showcaseProjects } from '../data/siteData'
import SkillCard from '../components/SkillCard'
import ArticleCard from '../components/ArticleCard'
import ProjectShowcase from '../components/ProjectShowcase'

export default function HomePage() {
    const { posts, loading } = usePosts()
    const featuredPosts = posts.slice(0, 5)
    const location = useLocation()

    // 處理跨頁面錨點滾動
    useEffect(() => {
        const scrollTo = location.state?.scrollTo
        if (scrollTo) {
            // 延遲一點讓頁面渲染完成
            const timer = setTimeout(() => {
                const el = document.getElementById(scrollTo)
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                    window.history.replaceState({}, '', `/#${scrollTo}`)
                }
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [location.state])

    return (
        <main>
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row md:gap-8 items-center mb-7 md:mb-0 pt-8 md:pt-0">
                    <div className="w-full md:w-7/12">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/images/heroSection.svg" />
                            <img className="w-1/2 md:w-full block mx-auto my-5 md:mb-0 " src="/images/heroSection-sm.svg" alt="hero banner" />
                        </picture>
                    </div>
                    <div className="w-10/12 md:w-5/12 mx-auto md:mx-0">
                        <div className="flex flex-col justify-center items-center md:items-start h-full">
                            <h1 className="mb-4 text-primary-700 font-semibold text-3xl">Hi！我是 咸儒</h1>
                            <p className="text-center md:text-left text-primary-600 text-lg mb-0">
                                現任的<mark className="mark text-primary-600">網頁工程師</mark>
                            </p>
                            <p className="text-center md:text-left text-primary-600 text-lg">
                                熱衷於研究新的前端技術，帶給使用者最好的網頁體驗
                            </p>
                            <p className="text-center md:text-left text-primary-400 mb-9">
                                WEB DEVELOPMENT / FRONTEND
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map(link => (
                                    <a key={link.name} className="text-primary-600 px-2 text-4xl hover:text-primary-800 no-underline" href={link.url} target="_blank" rel="noopener noreferrer">
                                        <i className={link.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 技能 Section */}
            <section
                className="pt-7 pb-7 md:pb-9"
                style={{
                    backgroundImage: "url('/images/homepage-services-bg.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-4">
                    <h2 className="title-deco py-7 md:py-9 text-center text-primary-700 tracking-wide-custom font-semibold text-2xl">
                        網頁開發技能
                    </h2>
                    <div className="flex flex-wrap mb-7 md:mb-9">
                        {skills.map(skill => (
                            <SkillCard key={skill.name} name={skill.name} image={skill.image} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 精選文章 Section */}
            <section className="max-w-7xl mx-auto px-4 pb-7 md:pb-9">
                <h2 className="title-deco py-7 md:py-9 mt-7 md:mt-9 text-center text-primary-700 tracking-wide-custom font-semibold text-2xl">
                    精選文章
                </h2>

                {!loading && featuredPosts.length > 0 && (
                    <div className="mb-7">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={28}
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                                renderBullet: (index, className) => {
                                    return `<span class="${className}" style="width:12px;height:12px;border-radius:50%;background:#000;"></span>`
                                },
                            }}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                            }}
                            className="pb-9"
                        >
                            {featuredPosts.map(post => (
                                <SwiperSlide key={post.slug}>
                                    <ArticleCard post={post} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                {/* 手機版更多文章按鈕 */}
                <div className="flex md:hidden justify-center mb-7">
                    <a
                        className="inline-flex items-center gap-1 px-4 py-2 text-base font-bold text-primary-50 bg-primary-900 rounded-lg no-underline"
                        href="/blog"
                    >
                        更多文章
                        <span className="material-symbols-outlined align-text-bottom">arrow_forward</span>
                    </a>
                </div>
            </section>

            {/* 作品介紹 Section */}
            <section id="collection">
                <h2 className="title-deco py-7 md:py-9 text-center text-primary-700 tracking-wide-custom font-semibold text-2xl">
                    作品介紹
                </h2>
                {showcaseProjects.map(project => (
                    <ProjectShowcase key={project.id} project={project} />
                ))}
            </section>
        </main>
    )
}
