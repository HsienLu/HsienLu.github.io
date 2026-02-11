import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { menuItems } from '../data/siteData'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/'
        if (path.startsWith('/#')) return location.pathname === '/' && location.hash === path.slice(1)
        return location.pathname.startsWith(path)
    }

    const handleClick = (e, path) => {
        if (path === '/#collection') {
            if (location.pathname === '/') {
                e.preventDefault()
                document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })
            }
        }
        setIsOpen(false)
    }

    return (
        <header className="py-0 md:py-4" style={{ marginBottom: '1px' }}>
            <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between md:py-1">
                <a href="/" className="py-0">
                    <img width="100" src="/images/logo.png" alt="logo" />
                </a>

                {/* 手機漢堡按鈕 */}
                <button
                    className="md:hidden border-0 bg-transparent shadow-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="material-symbols-outlined text-4xl text-primary-900">menu</span>
                </button>

                {/* 導覽選單 */}
                <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent z-50 md:ml-auto`}>
                    <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-7 py-4 md:py-0 list-none m-0 p-0">
                        {menuItems.map((item, i) => {
                            const active = isActive(item.path)
                            const Tag = item.path.startsWith('/#') ? 'a' : NavLink
                            const props = item.path.startsWith('/#')
                                ? { href: item.path }
                                : { to: item.path }

                            return (
                                <li key={i}>
                                    <Tag
                                        {...props}
                                        className={`no-underline text-primary-700 hover:text-primary-900 ${active ? 'font-semibold' : ''}`}
                                        onClick={(e) => handleClick(e, item.path)}
                                    >
                                        <span className={`relative px-2 py-1 ${active ? 'nav-active-corner' : ''}`}>
                                            {item.name}
                                        </span>
                                    </Tag>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
