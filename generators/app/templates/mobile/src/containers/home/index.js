import React from 'react';
import {Tabs, Icon} from 'antd-mobile';

const TabPane = Tabs.TabPane;

/**
 * 加载公共组件
 * */

import MainSection from '../../components/MainSection/MainSection';

/**
 * 加载样式或图片文件
 * */
import './sass/home.scss';
import icon from '../../public/antd-icons/share/complaints.svg';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {actions, user, home} = this.props;
        return (
            <MainSection actions={actions} user={user} home={home} className="home-page">
                <div className="wall">
                    <h5>generator-react-menu</h5>
                    <p>基于 React Redux Webpack 的项目脚手架</p>
                </div>
                <Tabs defaultActiveKey="2" className="info">
                    <TabPane tab="命令" key="1">
                        <div class="panel" style={{  height: '5rem', backgroundColor: '#fff' }}>
                            <p>运行命令：</p>
                            <code>node server.js</code>
                            <p>打包命令：</p>
                            <code>
                                npm run build-test <em>// 构建测试环境代码 </em>
                                <br />
                                npm run build-pro <em>// 构建开发环境代码 </em>
                            </code>
                        </div>
                    </TabPane>
                    <TabPane tab="配置" key="2">
                        <div class="panel" style={{  height: '5rem', backgroundColor: '#fff' }}>
                            <p>代理：</p>
                            <code>/server.js </code>
                            <p>日志：</p>
                            <code>src/store/configureStore.js</code>
                        </div>
                    </TabPane>
                </Tabs>

            </MainSection>
        );
    }
}

export default Home;