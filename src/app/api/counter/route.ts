import { NextResponse } from 'next/server';
import { ILocalApiResponse } from '@/interfaces';

export async function GET(request: Request): Promise<NextResponse<ILocalApiResponse>> {
  return NextResponse.json({
    method: 'GET',
    state: 'success',
    data: {
      count: 100,
    },
  });
}

export async function POST(request: Request) {
  return NextResponse.json({
    method: 'POST',
    count: 100,
  });
}
