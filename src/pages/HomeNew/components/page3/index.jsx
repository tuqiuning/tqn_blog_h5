import React, { Fragment, memo, useEffect } from 'react';
import { ConfigProvider, Timeline,Image } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { title,companyData } from './data'
import { Page3Wrapper } from './style';
import axios from 'axios';
import shangyouLogo from '@/assets/icon/shangyou.png';
import tuoliangfeng from '@/assets/icon/托良峰.png'


export default memo(() => {
  const { language } = useSelector((state) => {
    return state.system
  })
  useEffect(()=>{
    
  },[])

  const toWebsite = (link) => {
    window.open(link)
  }
  const items = [
    {
      dot: 
          <div className='logoBox' onClick={() => toWebsite(companyData[language][0].link)}>
            <div className='logo logo1'></div>
          </div>,
      label: <div className='company'>
          <div>{companyData[language][0].title}</div>
          <span className='duration'>{companyData[language][0].duration}</span>
      </div>,
      children: <div className='workContent'>
        {
          companyData[language][0].dutys.map ((duty, index) => {
            return <div key={index} className='item'>
              {duty}
              </div>
          })
        }
      </div>
    },
    {
      dot: 
          <div className='logoBox' onClick={() => toWebsite(companyData[language][1].link)}>
            <div className='logo logo2'></div>
          </div>,
      label: <div className='company'>
          <div>{companyData[language][1].title}</div>
          <span className='duration'>{companyData[language][1].duration}</span>
      </div>,
      children: <div className='workContent'>
        {
          companyData[language][1].dutys.map ((duty, index) => {
            return <div key={index} className='item'>{duty}</div>
          })
        }
      </div>
    },
    // {
    //   dot: <div className='logoBox' onClick={goShangyou}>
    //   <div className='logo logo2'>

    //   </div>
    // </div>,
    //   label: <div className='company'>
    //       <h4>尚优科技有限公司</h4>
    //       <span className='duration'>2022/09 - 2023/10</span>
    //   </div>,
    //   children: <div className='workContent'>
    //     {
    //       dutys.map ((duty, index) => {
    //         return <div key={index}>{duty}</div>
    //       })
    //     }
    //   </div>
    // }
  ]
  return (
    <Page3Wrapper>
       <div className='title'>{title[language]}</div>
       <div className='content'>
        {
       companyData[language].map((item,index) =>{
        return <Fragment key={item.link}>
          <div className='top'>
            <div className={index === 1 ?'left logo1':'left logo2'} onClick={() => toWebsite(item.link)}>
            
            </div>
            <div className="right">
              <div className="company">{item.title}</div>
              <div className="duration">{item.duration}</div>
            </div>
          </div>
          <div className="workContent">
            {
              item.dutys.map((duty, index) => {
                return <div key={index} className='item'>{index+1 + '. ' + duty}</div>
              })
            }
          </div>
        </Fragment>
       })

        }
       </div>
    </Page3Wrapper>
  )
})