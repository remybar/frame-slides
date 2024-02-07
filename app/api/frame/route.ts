import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  const idAsNumber = parseInt(id);

  const prevId = idAsNumber === 1 ? 1 : idAsNumber - 1;
  const nextId = idAsNumber === 4 ? 4 : idAsNumber + 1;

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/images/${id}.png" />
    <meta property="fc:frame:button:1" content="Start" />
    <meta property="fc:frame:button:2" content="Previous" />
    <meta property="fc:frame:button:3" content="Next" />
    <meta property="fc:frame:button:4" content="End" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
