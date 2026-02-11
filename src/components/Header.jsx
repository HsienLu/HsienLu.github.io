import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { menuItems } from '../data/siteData'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const isActive = (path) => {
        // 首頁嚴格比對：只有在 pathname === '/' 且沒有 hash 時高亮
        if (path === '/') return location.pathname === '/' && !location.hash
        // hash 連結：只有在首頁且 hash 完全一致時高亮
        if (path.startsWith('/#')) return location.pathname === '/' && location.hash === path.slice(1)
        // 其他路由：前綴比對
        return location.pathname.startsWith(path)
    }

    const handleClick = (e, path) => {
        if (path === '/#collection') {
            e.preventDefault()
            if (location.pathname === '/') {
                // 已在首頁：直接滾動
                const el = document.getElementById('collection')
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                    window.history.pushState(null, '', '/#collection')
                }
            } else {
                // 不在首頁：用 React Router 導航，帶上 hash
                navigate('/', { state: { scrollTo: 'collection' } })
            }
        }
        setIsOpen(false)
    }

    return (
        <header className="py-0 md:py-4" style={{ marginBottom: '1px' }}>
            <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between md:py-1 relative">
                <a href="/" className="py-0">
                    <img width="100" src="/images/logo.png" alt="logo" />
                </a>

                {/* 手機漢堡按鈕 */}
                <button
                    className="md:hidden border-0 bg-transparent shadow-none cursor-pointer p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="material-symbols-outlined text-4xl text-primary-900">
                        {isOpen ? 'close' : 'menu'}
                    </span>
                </button>

                {/* 導覽選單 */}
                <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent z-50 md:ml-auto shadow-md md:shadow-none`}>
                    <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-7 py-4 md:py-0 list-none m-0 p-0">
                        {menuItems.map((item, i) => {
                            const active = isActive(item.path)
                            const isHashLink = item.path.startsWith('/#')

                            return (
                                <li key={i}>
                                    {isHashLink ? (
                                        <a
                                            href={item.path}
                                            className={`no-underline text-primary-700 hover:text-primary-900 ${active ? 'font-semibold' : ''}`}
                                            onClick={(e) => handleClick(e, item.path)}
                                        >
                                            <span className={`relative px-2 py-1 ${active ? 'nav-active-corner' : ''}`}>
                                                {item.name}
                                            </span>
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`no-underline text-primary-700 hover:text-primary-900 ${active ? 'font-semibold' : ''}`}
                                            onClick={(e) => handleClick(e, item.path)}
                                        >
                                            <span className={`relative px-2 py-1 ${active ? 'nav-active-corner' : ''}`}>
                                                {item.name}
                                            </span>
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
