const { limpiador}=require('../resources/utils')

const getIndex=(req, res)=>{
    res.render('index');
}
const getPost=(req, res)=>{
    let obj=limpiador(req.body)
    res.render('show',{locals: obj});
}

module.exports = {getIndex, getPost}