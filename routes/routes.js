const router = require('express').Router()
const axios = require('axios')

router.get('/company', (req, res)=> {
    axios.get('https://72ih8opnm2.execute-api.ap-south-1.amazonaws.com/live').then( (response)=>{
    
        const result = response.data

      
        res.status(200).json({msg:result}) 
    })
})

module.exports = router