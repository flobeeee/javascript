deviceOs = 'aos'
serviceId = 1
startDate = '20231114'
endDate = '20231115'
const filter = {
    deviceOs, serviceId, startDate, endDate
}
//  {"deviceOs":"aos","serviceId":"1","startDate":"20231114","endDate":"20231120"}
const queryArr = []
let filterQuery = 'WHERE '

const queryFormat = {
    deviceOs: 'device_os = ? OR ',
    serviceId: 'll.location_service_id = ? OR ',
    keyword: 'qu.rep_user_Id = ? OR qu.mobile = ? OR qu.user_name = ? OR qu.email = ? OR ',
    startDate: `ll.created_date_time between CONVERT_TZ(?, 'UTC','Asia/Seoul') AND CONVERT_TZ(?, 'UTC','Asia/Seoul') OR `,
}

for (const key in filter) {
    if (filter[key] != 'null') {
        if (key == 'keyword') {
            queryArr.push(filter[key])
            queryArr.push(filter[key])
            queryArr.push(filter[key])
            queryArr.push(filter[key])
            filterQuery += queryFormat[key]
        } else if (key == 'startDate' || key ==  'endDate') {
            if (filter[startDate] != 'null' && filter[endDate] != 'null') {
                if (key == 'startDate') {
                    filterQuery += queryFormat[key]
                    queryArr.push(filter[key])
                    queryArr.push(filter[endDate])
                }
            }
        } else {
            queryArr.push(filter[key])
            filterQuery += queryFormat[key]

        }
    }
}

console.log(filterQuery.slice(0, -3))
console.log('123123-=1231231'.replace(/[^\d]/g, ''))