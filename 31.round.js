// 큰 숫자에 소수점 넣어서 반올림

const insight = {
  metrics: {
    costMicros: '13179934757', // 13180으로 변환
    averageCpc: 1098327896.4166667,
    impressions: '15427'
  }
}

let campaign = {
  adCost: 0
}

if (insight) {
  const adCost = insight.metrics.costMicros

  const newAdcost = `${adCost.slice(0,-6)}.${adCost.slice(-6)}`

  campaign.adCost = Math.round(Number(newAdcost))
  console.log(typeof campaign.adCost) // number
}

console.log(campaign) // { adCost: 13180 }