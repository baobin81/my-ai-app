import { get } from 'http'
import { NextResponse } from 'next/server'
 
export async function GET() {
   
  const result  = await fetch('http://apitest.dianzhijia.com/api/open/article?page=1', {
    headers: {
      'Content-Type': 'application/vnd.dpexpo.v1+json',
    },
    method:'get',
  })

  let res = await result.json()
  return NextResponse.json({res})
}