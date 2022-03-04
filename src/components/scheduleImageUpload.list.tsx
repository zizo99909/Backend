import React from 'react'
import { Box } from '@adminjs/design-system'
import {BasePropertyProps } from 'adminjs'

const Edit: React.FC<BasePropertyProps>=(props)=>{
    console.log('entetered edit')
    const { record}= props

    const srcImg =  record.params['scheduleImageLocation']

 
return(
    <Box>
       {srcImg ? (
           <img src={srcImg} width='100px' />
       ) : 'no image'}
    </Box>
)
}

export default Edit