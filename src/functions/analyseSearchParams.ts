
export 	const analyseSearchParams = (
    searchParams: Record<string, string>,
    key: string
  ) => {
    if (searchParams[key] !== '' && searchParams[key] !== undefined) {
      // console.log(key, 'is undefined--?', searchParams[key]);
  
      if (key === 'category') return 'category/' + searchParams[key]
      return searchParams[key]
    }
    switch (key) {
      case 'category':
        return ''
      case 'limit':
        return 10
      case 'skip':
        return 0
      default:
        break
    }
  }