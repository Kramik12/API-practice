let successResponse = (result, msg) => {
    return {
        msg: msg,
        status: true,
        results: result
    }
}

let errorResponse = (msg) => {
    return {
        msg: JSON.stringify(msg),
        status: false,
        result: null
    }
}

module.exports = {successResponse, errorResponse}