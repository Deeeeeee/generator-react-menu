import React from 'react';
import {Tabs, Badge} from 'antd-mobile';

const TabPane = Tabs.TabPane;

/**
 * 加载公共组件
 * */

import MainSection from '../../components/MainSection/MainSection';

/**
 * 加载样式或图片文件
 * */
import './sass/home.scss';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {actions, user, home} = this.props;
        return (
            <MainSection actions={actions} user={user} home={home} className="home-page">
                <Tabs defaultActiveKey="2" >
                    <TabPane tab={<Badge text={'3'}>First Tab</Badge>} key="1">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                            Content of First Tab
                        </div>
                    </TabPane>
                    <TabPane tab={<Badge text={'今日(20)'}>Second Tab</Badge>} key="2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                            Content of Second Tab
                        </div>
                    </TabPane>
                    <TabPane tab={<Badge dot>Third Tab</Badge>} key="3">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                            Content of Third Tab
                        </div>
                    </TabPane>
                </Tabs>

                <div className="wall">
                    <h5>generator-react-menu</h5>
                    <p>基于 React Redux Webpack 的项目脚手架</p>
                </div>
                <div className="info layout">
                    <div className="panel">
                        <h5>命令</h5>
                        <p>运行命令：</p>
                        <code>node server.js</code>
                        <p>打包命令：</p>
                        <code>
                            npm run build-test <em>// 构建测试环境代码 </em>
                            <br />
                            npm run build-pro <em>// 构建开发环境代码 </em>
                        </code>
                    </div>
                    <div className="panel">
                        <h5>配置</h5>
                        <p>代理：</p>
                        <code>/server.js </code>
                        <p>日志：</p>
                        <code>src/store/configureStore.js</code>
                    </div>
                    <div className="panel">
                        <h5>info3</h5>
                        <code>
                            // 代码3
                        </code>
                    </div>
                </div>
            </MainSection>
        );
    }
}

export default Home;