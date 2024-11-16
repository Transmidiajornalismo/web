import { NextResponse } from 'next/server';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export async function GET() {
  try {
    const response = await fetch(
      `http://34.18.51.177/?rest_route=/wp/v2/posts`,
    );
    const data = await response.json();

    const posts = [];
    for (const post of data) {
      const authorUrl = post['_links']['author'][0].href;
      const authorResponse = await fetch(authorUrl);
      const authorData = await authorResponse.json();

      const imageUrl = post['_links']['wp:attachment'][0].href;
      const imageResponse = await fetch(imageUrl);
      const imageData = await imageResponse.json();

      const categoryClass = post['class_list'].find((item: string) =>
        item.startsWith('category-'),
      );
      const category = categoryClass?.split('-')[1];

      posts.push({
        id: post.id,
        date: formatDate(post.date),
        title: post.title.rendered,
        category,
        author: authorData.name,
        imageURL: imageData[0].guid.rendered,
      });
    }
    posts.pop();

    return NextResponse.json(posts);
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
