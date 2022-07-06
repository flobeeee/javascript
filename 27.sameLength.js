const data = {
  name: [ '라라', '솔솔' ],
  postId: [ 1, 14129 ],

  bcaCreatives: [
    {
      websiteUrl: 'http://test.co.kr',
      title: '서브웨이',
      description: '첫번째'
    },
    {
      websiteUrl: 'http://test.co.kr',
      title: '포케',
      description: '두번째'
    }
  ]
}

console.log(data['postId'].length === data['name'].length === (data['bcaCreatives'].length)) // false
console.log(data['postId'].length, data['name'].length, (data['bcaCreatives'].length)) // 2, 2, 2

console.log(data['postId'].length === data['name'].length && data['name'].length === (data['bcaCreatives'].length)) // true