import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Drawer } from 'antd'
import { MenuOutlined, CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Container } from './styled';
import languageCode from '@/utils/language';
import store from '@/store';
import { changeLanguage, changeActiveNavIndex } from '@/store/features/system';
import EnglishIcon from '@/assets/icon/enSvg.jsx';
import ChinessIcon from '@/assets/icon/zhSvg.jsx';
import { changeNavColor } from '../../../../store/features/system';

export default memo(({ activeNavIndex }) => {
    const { language, navColor } = useSelector((state) => {
        return state.system
    })
    const dispatch = useDispatch();

    store.getState().system.language;
    const tabs = [
        languageCode.HOME,
        languageCode.ABOUT,
        languageCode.CONTACT,
        // languageCode.WORK,
        // languageCode.FRONT,
        // languageCode.END,
        languageCode.LANG,
    ]
    const [isOpen, setIsOpen] = useState(false); //是否打开菜单弹窗
    const [showSearchBox, setShowSearchBox] = useState(false); //是否显示搜索框
    const [searchValue, setSearchValue] = useState(''); //搜索
    const navigate = useNavigate();
    useEffect(() => {
        // 监听屏幕宽度
        window.addEventListener('resize', function () {
            setExcessPhone(innerWidth >= 750)

        })
        // 点击其它区域，关闭tabs弹窗
        // document.addEventListener('click', ()=>{
        //         setIsOpen(false)
        // }); 
        // const modalEl = document.getElementsByClassName('mask');
        // modalEl[0].addEventListener('click',(e)=>{
        //     setIsOpen(false)
        //     document.body.style.overflow = 'auto'
        // })
    }, [])
    const showModal = () => {
        setIsOpen(!isOpen)
        // document.body.style.overflow = `${isOpen ? 'auto':'hidden'}`
    }
    // 切换tab
    const changeTab = (e,path, index) => {
        // e.stopPropagation();
        if (!path) {
            dispatch(changeLanguage(language === 'zh-CN' ? 'en-US' : 'zh-CN'));
            sessionStorage.setItem('language', language === 'zh-CN' ? 'en-US' : 'zh-CN')
            return;
        }
        if (index === 0) {
            dispatch(changeNavColor('#ffffff'))
            sessionStorage.setItem('navColor', '#ffffff');
        } else {
            dispatch(changeNavColor('#000000'))
            sessionStorage.setItem('navColor', '#000000');
        }
        navigate(path)
        // 将当前激活的Nav保存到sessionStroage,解决刷新后Nav的激活回到首页的问题
        sessionStorage.setItem('activeNavIndex', index);
        dispatch(changeActiveNavIndex(index));
        setIsOpen(false)
    }
    const goSearch = () => {
        if (searchValue === '') {
            return
        }
        const apiURL = `https://cn.bing.com/search?q=涂邱宁 ${searchValue}`
        window.open(apiURL)

    }
    // 打开搜索框
    const openSearch = () => {
        setShowSearchBox(true)
        NavTranslate('-2.25rem')
    }
    // 关闭搜索框
    const closeSearch = () => {
        setShowSearchBox(false)
        NavTranslate('0px')
    }
    const NavTranslate = (val) => {
        const rotateBox = document.getElementsByClassName('rotateBox');
        rotateBox[0].style.transform = `translate(0,${val})`
        rotateBox[0].style.transition = 'transform 0.5s ease-out'
    }
    // 切换语言
    const changeLang = () => {
        dispatch(changeLanguage(language === 'zh-CN' ? 'en-US' : 'zh-CN'));
        sessionStorage.setItem('language', language === 'zh-CN' ? 'en-US' : 'zh-CN')
    }
    return (
        <Container $showSearchBox={showSearchBox} $navTextColor={navColor}>
            <div onClick={showModal} className='icon'>
                {
                    isOpen ? <CloseOutlined /> : <MenuOutlined />
                }
            </div>
            {
                isOpen && <ul className='nav-modal'>
                    {tabs.map((item, index) => {
                        return <li
                            key={index}
                            style={{ marginBottom: '1rem', cursor: 'pointer', color: `${activeNavIndex === index ? '#1677ff' : '#000'}` }}
                            onClick={($event) => { changeTab($event,item.path, index) }}
                        >
                            {item.name[language]}
                        </li>
                    })}
                </ul>
            }


        </Container>
    )

})
