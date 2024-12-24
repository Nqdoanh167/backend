/** @format */

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const blogs = [
  // {
  //   title: String,
  //   author_name: String,
  //   summary: String,
  //   content: String,
  //   image: String,
  // },

  {
    title: 'Tiêu đề bài viết 1',
    author_name: 'Tác giả 1',
    summary: 'Tóm tắt bài viết 1',
    content: 'Nội dung bài viết 1',
    image: 'https://demo-digitic.myshopify.com/cdn/shop/articles/blog-5_405x.jpg?v=1654929043',
  },
  {
    title: 'Tiêu đề bài viết 2',
    author_name: 'Tác giả 2',
    summary: 'Tóm tắt bài viết 2',
    content: 'Nội dung bài viết 2',
    image: 'https://demo-digitic.myshopify.com/cdn/shop/articles/blog-4_405x.jpg?v=1654928936',
  },
  {
    title: 'Tiêu đề bài viết 3',
    author_name: 'Tác giả 3',
    summary: 'Tóm tắt bài viết 3',
    content: 'Nội dung bài viết 3',
    image: 'https://demo-digitic.myshopify.com/cdn/shop/articles/blog-3_405x.jpg?v=1654928829',
  },
  {
    title: 'Tiêu đề bài viết 4',
    author_name: 'Tác giả 4',
    summary: 'Tóm tắt bài viết 4',
    content: 'Nội dung bài viết 4',
    image: 'https://demo-digitic.myshopify.com/cdn/shop/articles/blog-2_405x.jpg?v=1654928783',
  },
];

module.exports = fetchBolg = blogs.map((blog) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3NjJkYjRiMjk4YzVmNDM0MDViZmYwZSIsIm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkaDhVOXQ2cFcyMDN2M1AuY1Zja2lYT1hRT2lGdWx5by92UGM3ak5oQ3pOaThDckE4TTlBYWUiLCJ0ZWxlcGhvbmVOdW1iZXIiOiIwOTEyNzQ2MjMwIiwicm9sZSI6ImFkbWluIiwid2lzaExpc3QiOltdLCJkYXRlX2pvaW5lZCI6IjIwMjQtMTItMThUMTQ6MjU6MTUuNjQxWiIsImNyZWF0ZWRBdCI6IjIwMjQtMTItMThUMTQ6MjU6MTUuNjQ0WiIsInVwZGF0ZWRBdCI6IjIwMjQtMTItMThUMTQ6MjU6MTUuNjQ0WiIsIl9fdiI6MH0sImlhdCI6MTczNDUzMzExOSwiZXhwIjoxNzM3MTI1MTE5fQ.MhH_oBnwW68eRCLRZ3x8QwXcpRxxEn1pF9TC64AZxD0',
  );

  const raw = JSON.stringify(blog);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:8000/blog-service/api/blogs', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
});
