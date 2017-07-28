import React from 'react';
/**
 * 加载公共组件
 * */
import MainSection from '../../components/MainSection/MainSection';
import BannerStatic from '../../components/BannerStatic/BannerStatic';
import HomeSubTitle from '../../components/HomeSubTitle/HomeSubTitle';


/**
 * 加载样式或图片文件
 * */
import './sass/solution.scss';
import banner from './images/baby/banner.jpg';
import img1 from './images/baby/1.jpg';
import img2 from './images/baby/2.jpg';
import img3 from './images/baby/3.jpg';
import img4 from './images/baby/4.jpg';


class ECommerce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const {actions, home, user } = this.props;
        return (
            <MainSection actions={actions} home={home} user={user} currentNav={[2,6]} className="baby-page">
                <BannerStatic url={banner}/>
                <div className="panel">
                    <HomeSubTitle mainTitle="母婴行业*困境*" subTitle=""/>
                    <div className="layout">
                        <img src={img1} alt=""/>
                    </div>
                </div>
                <div className="panel gray-bg">
                    <HomeSubTitle mainTitle="母婴行业用户画像*分析*" subTitle=""/>
                    <div className="layout">

                        <img src={img2} className="p-tb-50 white-bg" alt=""/>
                    </div>
                </div>
                <div className="panel">
                    <HomeSubTitle mainTitle="母婴行业营销传播*策略*" subTitle=""/>
                    <div className="layout">
                        <img src={img3} alt=""/>
                    </div>
                </div>
                <div className="panel gray-bg">
                    <HomeSubTitle mainTitle="*为什么*选我们" subTitle=""/>
                    <div className="layout">
                        <img src={img4} alt=""/>
                    </div>
                </div>
            </MainSection>
        );
    }
}

export default ECommerce;