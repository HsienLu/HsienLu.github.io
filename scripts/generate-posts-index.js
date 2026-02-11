import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.resolve('public/posts');
const outputFile = path.resolve('public/posts-index.json');

function generateIndex() {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

    const posts = files.map(filename => {
        const filepath = path.join(postsDir, filename);
        const content = fs.readFileSync(filepath, 'utf-8');
        const { data } = matter(content);
        const slug = filename.replace(/\.md$/, '');

        return {
            slug,
            title: data.title || slug,
            date: data.date ? new Date(data.date).toISOString() : null,
            tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
            cover: data.cover || '/images/default-cover.png',
            categories: data.categories || '',
        };
    });

    // 以日期降序排列
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf-8');
    console.log(`✅ 已產生 ${posts.length} 篇文章索引 → ${outputFile}`);
}

generateIndex();
