const list = {
  "announce": {
    "title": "당첨",
    "message": "당첨을 축하드립니다."
  },
  "postRequest": {
    "title": "포스트 요청",
    "message": "포스트를 등록해 주세요."
  },
  "postModify": {
    "title": "포스트 수정",
    "message": "포스트를 수정해 주세요."
  },
}

for (const [value] of Object.entries(list)) {
  console.log(value);
}