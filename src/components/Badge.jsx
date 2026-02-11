export default function Badge({ children, className = '' }) {
    return (
        <span className={`inline-block px-3 py-1 text-base leading-normal font-normal text-primary-700 bg-primary-200 rounded-2xl ${className}`}>
            {children}
        </span>
    )
}
