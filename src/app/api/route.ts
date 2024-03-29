export async function GET() {

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    const path = headers.get('category')
    console.log('category-->', path)
    const apiKey = process.env.DATA_API_KEY
    if (apiKey) {
        headers.append('API-Key', apiKey)
    }
    const res = await fetch(`https://dummyjson.com/products/category/${path}?limit=10`, {
      headers: headers,
    })
    const data = await res.json()
   
    return Response.json({ data })
  }