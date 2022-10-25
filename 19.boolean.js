const filters = { "isDisplay": false }

Object.entries(filters).forEach(([key, value]) => {
  if (typeof value === 'boolean') {
    if (key === 'isDisplay') {
      console.log(value)
    }
  }

  if (value) {
    console.log(value) // 값이 false인 경우 넘어오지 않음.
  }
})