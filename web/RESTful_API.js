// @ts-check

// 프레임워크 없이 간단한 토이프로젝트 웹 서버 만들어보기

/**
 * 블로그 포스팅 서비스
 * 로컬 파일을 데이터베이스로 활용할 예정(JSON)
 * 인증 로직 X
 * RESTful API를 사용
 */

const http = require('http');

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 'my_first_post',
    title: 'My first post',
    content: 'Hello',
  },
  {
    id: 'my_second_post',
    title: '나의 두번째 포스트',
    content: 'Hello',
  },
];

/**
 * Post
 *
 * GET /posts
 * GET /posts:id
 * POST /posts
 */
const server = http.createServer((req, res) => {
  const POST_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/;
  const postIdRegexResult =
    (req.url && POST_ID_REGEX.exec(req.url)) || undefined;

  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; encoding=utf-8');
    res.end(JSON.stringify(result));
  } else if (postIdRegexResult && req.method === 'GET') {
    const postId = postIdRegexResult[1];

    const post = posts.find((_post) => _post.id === postId);

    if (post) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json; encoding=utf-8');
      res.end(JSON.stringify(post));
    } else {
      res.statusCode = 404;
      res.end('Post not found');
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      /**
       * @typedef CreatingPostBody
       * @property {string} title
       * @property {string} content
       */

      /** @type {CreatingPostBody} */
      const body = JSON.parse(data);
      posts.push({
        id: body.title.toLowerCase().replace(/\s/g, '_'),
        title: body.title,
        content: body.content,
      });
    });
    res.statusCode = 200;
    res.end('Creating post');
  } else {
    res.statusCode = 404;
    res.end('Not found.');
  }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}`);
});
