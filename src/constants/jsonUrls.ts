const jsonBaseURL = 'https://jsonplaceholder.typicode.com'

const posts = '/posts'

const postsUrls = {
    base: posts,
    byId: (id: number) => `${posts}/${id}`
}

export {
    jsonBaseURL,
    postsUrls,
}