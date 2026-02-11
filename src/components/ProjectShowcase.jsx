import Badge from './Badge'

export default function ProjectShowcase({ project }) {
    const { name, description, tags, link, bgImage, workImage, layout } = project

    return (
        <>
            {/* 桌面版 */}
            <div
                className="relative py-9 hidden md:block"
                style={{
                    backgroundImage: `url('${bgImage}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                {/* 半透明遮罩 — 只在 layout=left 時全覆蓋 */}
                {layout === 'left' && (
                    <div className="absolute inset-0" style={{ backgroundColor: '#0A101380' }} />
                )}

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap">
                        {layout === 'right' ? (
                            <>
                                {/* 圖左文右 */}
                                <div className="w-full md:w-1/2 lg:w-7/12 mb-7 z-10">
                                    {workImage && <img className="w-full h-auto" src={workImage} alt={name} />}
                                </div>
                                <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col justify-center z-10">
                                    <div className="px-7 py-9 bg-white-overlay rounded-3xl">
                                        <h3 className="mb-2 text-primary-50 text-xl font-bold">{name}</h3>
                                        <p className="mb-4 text-base text-primary-50">{description}</p>
                                        <div className="pb-7 mb-7 border-b border-white">
                                            {tags.map((tag, i) => (
                                                <Badge key={i} className={`${i < tags.length - 1 ? 'mb-2 mr-2' : ''} !text-primary-700 !bg-primary-200`}>{tag}</Badge>
                                            ))}
                                        </div>
                                        <div className="flex justify-center">
                                            <a
                                                className="inline-flex items-center gap-2 px-6 py-3 text-lg font-bold text-primary-50 bg-primary-900 rounded-lg no-underline hover:opacity-90"
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                完整介紹
                                                <span className="material-symbols-outlined align-text-bottom">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* 文左 */}
                                <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full" style={{ backgroundColor: '#0A101380' }} />
                                <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col justify-center z-10">
                                    <div className="px-7 py-9 bg-white-overlay rounded-3xl">
                                        <h3 className="mb-2 text-primary-50 text-xl font-bold">{name}</h3>
                                        <p className="mb-4 text-base text-primary-50">{description}</p>
                                        <div className="pb-7 mb-7 border-b border-white">
                                            {tags.map((tag, i) => (
                                                <Badge key={i} className={`${i < tags.length - 1 ? 'mb-2 mr-2' : ''} !text-primary-700 !bg-primary-200`}>{tag}</Badge>
                                            ))}
                                        </div>
                                        <div className="flex justify-center">
                                            <a
                                                className="inline-flex items-center gap-2 px-6 py-3 text-lg font-bold text-primary-50 bg-primary-900 rounded-lg no-underline hover:opacity-90"
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                完整介紹
                                                <span className="material-symbols-outlined align-text-bottom">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 invisible">
                                    <img className="w-full h-auto" src="/images/homepage-work1.png" alt={name} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* 手機版 */}
            <div className="md:hidden">
                {bgImage && layout === 'right' && workImage && (
                    <div
                        className="pt-9"
                        style={{
                            backgroundImage: `url('${bgImage}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="max-w-7xl mx-auto px-4">
                            <img className="w-full h-auto" src={workImage} alt={name} />
                        </div>
                    </div>
                )}
                <div className="pt-4 pb-8 text-center">
                    <h3 className="mb-2 text-xl font-bold">{name}</h3>
                    <p className="mb-3 text-base text-primary-600">{description}</p>
                    <div className="mb-4">
                        {tags.map((tag, i) => (
                            <Badge key={i} className={i < tags.length - 1 ? 'mb-3 mr-2 text-base' : ''}>{tag}</Badge>
                        ))}
                    </div>
                    <a
                        className="inline-flex items-center gap-1 px-3 py-2 text-base font-bold text-primary-50 bg-primary-900 rounded-lg no-underline"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        完整介紹
                        <span className="material-symbols-outlined align-top">arrow_forward</span>
                    </a>
                </div>
            </div>
        </>
    )
}
