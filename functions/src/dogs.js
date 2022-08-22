export function getDogs(req,res){
    res.send([{name: 'ryder', age: 4, breed: 'Dumbass', gender: 'mn'},
    {name: 'Duke', age: 2, breed: 'rotweiler', gender 'm'}
])
}

export function testApi(req,res){
    res.send({success: true, message: 'API is working!'})
}