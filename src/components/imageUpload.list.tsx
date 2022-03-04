import React from 'react'
import { Box } from '@adminjs/design-system'
import {BasePropertyProps } from 'adminjs'

const Edit: React.FC<BasePropertyProps>=(props)=>{
    
    const { record}= props

    const srcImg =  record.params['imageLocation']

 
return(
    <Box>
       {srcImg ? (
           <img src={srcImg} width='100px' />
       ) : 'no image'}
    </Box>
)
}

export default Edit