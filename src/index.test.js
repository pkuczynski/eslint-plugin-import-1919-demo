const v5uuid = require('uuid/v5')
const { v5 } = require('uuid')

const index = () => {
    console.log(v5uuid.uuid())
    console.log(v5.uuid())
}

index()
