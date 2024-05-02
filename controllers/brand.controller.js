const brandAdd = (req, res, next) => {
    //
    console.log(req.files);
    let data = req.body;
    if(req.files){
        let images = [];
        req.files.map((o, i) => {
            images.push(o.filename);
        })
        data.images = images;
    }
    res.json({
        result: data,
        status: true,
        msg: "Brand Created"
    })
}

const brandUpdate = (req, res, next) => {

}

const brandList = (req, res, next) => {

}

module.exports = {
    brandAdd,
    brandUpdate,
    brandList
}