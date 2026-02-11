import { socialLinks } from '../data/siteData'

export default function Footer() {
    return (
        <footer
            className="py-7"
            style={{
                backgroundImage: "url('/images/footer-bg-lg.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-7 justify-between items-center my-0 md:my-7">
                    {/* 左側資訊 */}
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <img className="mb-4" style={{ width: '120px' }} src="/images/logo.png" alt="logo" />
                        <p className="mb-4 text-lg text-primary-700">歡迎指教，或是互相交流！</p>
                        <a
                            className="text-primary-500 text-lg no-underline hover:text-primary-700"
                            href="mailto:sjps946403@gmail.com"
                        >
                            sjps946403@gmail.com
                        </a>
                    </div>

                    {/* 右側按鈕 */}
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <a
                            className="flex items-center gap-3 w-full px-4 mb-4 py-3 text-start font-bold text-primary-50 bg-primary-900 rounded-lg no-underline text-lg hover:opacity-90"
                            href="https://www.cakeresume.com/7cc5eb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-14 h-14" viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16 13H39V43H16L16 13ZM13 13C13 11.3431 14.3431 10 16 10H39C40.6569 10 42 11.3431 42 13V43C42 44.6569 40.6569 46 39 46H16C14.3431 46 13 44.6569 13 43V13ZM22 20C22 20.8284 21.3284 21.5 20.5 21.5C19.6716 21.5 19 20.8284 19 20C19 19.1716 19.6716 18.5 20.5 18.5C21.3284 18.5 22 19.1716 22 20ZM22 27C22 27.8284 21.3284 28.5 20.5 28.5C19.6716 28.5 19 27.8284 19 27C19 26.1716 19.6716 25.5 20.5 25.5C21.3284 25.5 22 26.1716 22 27ZM20.5 35.5C21.3284 35.5 22 34.8284 22 34C22 33.1716 21.3284 32.5 20.5 32.5C19.6716 32.5 19 33.1716 19 34C19 34.8284 19.6716 35.5 20.5 35.5ZM24 20C24 19.1716 24.6716 18.5 25.5 18.5H33.5C34.3284 18.5 35 19.1716 35 20C35 20.8284 34.3284 21.5 33.5 21.5H25.5C24.6716 21.5 24 20.8284 24 20ZM25.5 25.5C24.6716 25.5 24 26.1716 24 27C24 27.8284 24.6716 28.5 25.5 28.5H33.5C34.3284 28.5 35 27.8284 35 27C35 26.1716 34.3284 25.5 33.5 25.5H25.5ZM24 34C24 33.1716 24.6716 32.5 25.5 32.5H33.5C34.3284 32.5 35 33.1716 35 34C35 34.8284 34.3284 35.5 33.5 35.5H25.5C24.6716 35.5 24 34.8284 24 34Z" fill="currentColor" />
                            </svg>
                            個人介紹
                        </a>
                        <a
                            className="flex items-center w-full px-4 mb-4 py-3 text-start text-primary-700 bg-primary-50 rounded-lg no-underline text-lg hover:opacity-90"
                            href="https://github.com/HsienLu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-github align-middle px-2 text-4xl"></i>
                            Github
                        </a>
                        <a
                            className="flex items-center w-full px-4 py-3 text-start text-primary-700 bg-primary-50 rounded-lg no-underline text-lg hover:opacity-90"
                            href="https://discordapp.com/users/384353452035145729"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-discord align-middle px-2 text-4xl"></i>
                            Discord
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
