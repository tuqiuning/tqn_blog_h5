import React, { memo } from 'react';
import { Image } from 'antd';
import { Page4DetailWrapper } from './style';

export default memo((props) => {
  return (
    <Page4DetailWrapper>
      
      <div className='text'>
        <div className='title'>
           {props.name}
        </div>
        <p className='overview'>
          {props.overview}
        </p>
        <div className='img'>
        {
          props.img.map(item => {
            return <Image
            key={item}
            width={'9rem'}
            height={'9rem'}
            style={{objectFit:'cover'}}
            src={item}
          />
          })
        }
      </div>
        <div className='participation'>
            {
            props.content && props.content.map((item,index) =>{
              return <p key={item}>{index+1 + '.' + item}</p>
            })
            }
        </div>
        <div className='skills'>
          {
            props.skills.map(item =>{
              return <span key={item} className='skill' style={{color:'rgb(130 255 177)'}}>{'#'+ item}</span>
            })
          }
        </div>
      </div>
    </Page4DetailWrapper>
  )
})