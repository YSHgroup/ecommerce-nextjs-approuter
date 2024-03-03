
export const createQueryString =
  (searchParams: any, name: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    if (name === 'category') params.delete('skip')
    params.set(name, value)
    return params.toString()
  }