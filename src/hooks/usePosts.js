import { useState, useEffect } from 'react'

let cachedPosts = null

export function usePosts() {
    const [posts, setPosts] = useState(cachedPosts || [])
    const [loading, setLoading] = useState(!cachedPosts)

    useEffect(() => {
        if (cachedPosts) return

        fetch('/posts-index.json')
            .then(res => res.json())
            .then(data => {
                cachedPosts = data
                setPosts(data)
                setLoading(false)
            })
            .catch(err => {
                console.error('無法載入文章索引:', err)
                setLoading(false)
            })
    }, [])

    const getTags = () => {
        const tagSet = new Set()
        posts.forEach(p => p.tags.forEach(t => tagSet.add(t)))
        return Array.from(tagSet).sort()
    }

    const getPostsByTag = (tag) => {
        if (!tag) return posts
        return posts.filter(p => p.tags.includes(tag))
    }

    const getPostBySlug = (slug) => {
        return posts.find(p => p.slug === slug)
    }

    const getRelatedPosts = (slug, limit = 3) => {
        const current = getPostBySlug(slug)
        if (!current) return []
        return posts
            .filter(p => p.slug !== slug && p.tags.some(t => current.tags.includes(t)))
            .slice(0, limit)
    }

    return { posts, loading, getTags, getPostsByTag, getPostBySlug, getRelatedPosts }
}
