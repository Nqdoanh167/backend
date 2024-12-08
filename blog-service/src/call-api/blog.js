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
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3NDFlYTg0NzdmYjRiYzg0NWE0YzJiYyIsImVtYWlsIjoibnFkY250dDIwMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkYkh5SGNwV3pkVHU5Mm8yUmNFN09OdWlxR01SRW9iY3BJdEZZUWFqbFh0SmpHU0I3TXNCcDYiLCJyb2xlIjoiYWRtaW4iLCJkYXRlX2pvaW5lZCI6IjIwMjQtMTEtMjNUMTQ6NDU6MjQuNjg0WiIsImNyZWF0ZWRBdCI6IjIwMjQtMTEtMjNUMTQ6NDU6MjQuNjg3WiIsInVwZGF0ZWRBdCI6IjIwMjQtMTEtMjNUMTQ6NDU6MjQuNjg3WiIsIl9fdiI6MH0sImlhdCI6MTczMjc1NjE3MiwiZXhwIjoxNzM1MzQ4MTcyfQ.5PZ2_GNY4G8CGm0aLkbo20_ROYu-MtMwqAw1fJnbi_8',
  );

  const raw = JSON.stringify(blog);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:8000/blog-service/api', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
});
