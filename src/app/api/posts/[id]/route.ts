import { NextRequest, NextResponse } from 'next/server';

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

  try {
    return NextResponse.json({
      post: {
        id: data.id,
        date: data.date,
        title: data.title.rendered,
        content: data.content.rendered,
        imageURL: imageData[0].guid.rendered,
      },
    });
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
