const ageGroup = {
                    groupA: {
                      min: 18,
                      max: 24,
                      count: 0,
                      adPerformance: 0,
                    },
                    groupB: {
                      min: 25,
                      max: 44,
                      count: 0,
                      adPerformance: 0,
                    },
                    groupC: {
                      min: 45,
                      max: null,
                      count: 0,
                      adPerformance: 0,
                    },
                  }
                  
await Promise.all(
  Object.keys(ageGroup).map(async (aGroup, index) => {
                      console.log(ageGroup[aGroup].min) // 18, 25, 45
                    })
                  )
