import { NextRequest, NextResponse } from 'next/server';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const response = await fetch(
    `http://34.18.51.177/?rest_route=/wp/v2/posts/${id}`,
  );
  const data = await response.json();

  const imageUrl = data['_links']['wp:attachment'][0].href;
  const imageResponse = await fetch(imageUrl);
  const imageData = await imageResponse.json();

  const authorUrl = data['_links']['author'][0].href;
  const authorResponse = await fetch(authorUrl);
  const authorData = await authorResponse.json();

  const categoryClass = data['class_list'].find((item: string) =>
    item.startsWith('category-'),
  );
  const category = categoryClass?.split('-')[1];

  try {
    return NextResponse.json({
      post: {
        id: data.id,
        date: formatDate(data.date),
        title: data.title.rendered,
        content: data.content.rendered,
        imageURL: imageData[0].guid.rendered,
        author: authorData.name,
        category,
      },
    });
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
