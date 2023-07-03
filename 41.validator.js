const required = (req, requiredDatas) => {
    for (const requiredData of requiredDatas) {
        const data = req[requiredData]
        console.log(data)
        if (!data) {
            return { msg : `${requiredData}는 필수값입니다.`}
        } else{
            return 200
        }

    }
}

console.log(required({
    "storeI": 40
}, ['storeId']))