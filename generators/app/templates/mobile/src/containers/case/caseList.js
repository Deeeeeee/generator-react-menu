import React from 'react';
import {Link} from 'react-router';
import config from '../../config'
import {strEllipsis} from '../../utils'
/**
 * 加载公共组件
 * */
import MainSection from '../../components/MainSection/MainSection';
import HomeSubTitle from '../../components/HomeSubTitle/HomeSubTitle';

/**
 * 加载样式或图片文件
 * */
import './sass/caseList.scss'

class CaseList extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            industry: 1,
        };
    }

    componentDidMount() {
        const {actions} = this.props;

        actions.getCaseList({industry: 1});
    }

    handleChangeCase(index) {
        const {actions} = this.props;
        actions.getCaseList({industry: index});
        this.setState({
            industry: index
        })

    }

    render() {
        const {actions, home, user} = this.props;
        return (
            <MainSection actions={actions} home={home} user={user}  currentNav={[3,-1]} className="case-page">
                <HomeSubTitle mainTitle="精选*案例*" subTitle="10年沉淀 6年社会化媒体营销实战 40万成功传播案例 帮助客户拥抱变化"/>
                <div className="case-nav layout">
                    {
                        config.INDUSTRY_DIC.map((item, index)=> {
                            return (
                                index !== 0 ? (
                                    <span key={index} className={index == this.state.industry ? 'active' : ''}
                                          onClick={this.handleChangeCase.bind(this, index)}>{ item }</span>
                                ) : ''
                            )
                        })
                    }
                </div>
                <div className="case-list layout">
                    {
                        home.caseList && home.caseList.map((item, index)=> {
                            if (index === 0) {
                                return (
                                    <div key={index} className="top-case">
                                        <div className="img-wrap">
                                            <img src={config.IMG_URL + item.coverBigImgPath}/>
                                            <div className="shadow">
                                                <Link to={'caseList/' + item.id}>查看详情</Link>
                                            </div>
                                        </div>
                                        <div className="text-wrap">
                                            <h5>{item.title}</h5>
                                            <div className="item">
                                                <p>
                                                    <em>传播策略分析：</em><span>{ strEllipsis(item.spreedAnalyse, 60) }</span>
                                                </p>
                                                <p>
                                                    <em>推广方式：</em><span>{ strEllipsis(item.spreedType, 60) }</span>
                                                </p>
                                                <p>
                                                    <em>案例概述：</em><span>{ strEllipsis(item.description, 60) }</span>
                                                </p>
                                            </div>
                                            <div className="info">
                                                <em>{item.createTime}</em>
                                                <span>{config.PLATFORM_DIC[item.platform]}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className="base-case">
                                        <div className="img-wrap">
                                            <img src={config.IMG_URL + item.coverImgPath}/>
                                            <div className="shadow">
                                                <Link to={'caseList/' + item.id}>查看详情</Link>
                                            </div>
                                        </div>
                                        <div className="text-wrap">
                                            <h5>{item.title}</h5>
                                            <div className="info">
                                                <em>{item.createTime}</em>
                                                <span>{config.PLATFORM_DIC[item.platform]}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </MainSection>
        );
    }
}

export default CaseList;