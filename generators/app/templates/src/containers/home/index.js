import React from 'react';
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
        this.state = {
        };
    }

    render() {
        const {actions, home } = this.props;
        return (
            <MainSection actions={actions} home={home} className="home-page">
                    <div className="wall">
                        <div className="layout">
                            <h5>generator-react-menu</h5>
                            <p>基于 React Redux Webpack 的项目脚手架</p>
                        </div>
                    </div>
                    <div className="info layout">
                        <div className="panel">
                            <h5>info1</h5>
                            <code>
                                // 代码1
                            </code>
                        </div>
                        <div className="panel">
                            <h5>info2</h5>
                            <code>
                                // 代码2
                            </code>
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