// 객체 값으로 키 가져오기

const sendType = {
    alimtalk: 'at',
    friendtalk: 'ft',
    sms: 'sms',
    mms: 'mms',
  }

const biz_send_type = Object.keys(sendType).find(key => sendType[key] === 'at')

console.log(biz_send_type) //alimtalk