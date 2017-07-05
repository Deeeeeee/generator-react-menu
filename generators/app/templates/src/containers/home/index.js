import React from 'react';
/**
 * 加载公共组件
 * */

import MainSection from '../../components/MainSection/MainSection';

/**
 * 加载样式或图片文件
 * */

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {actions, home } = this.props;
        return (
            <MainSection actions={actions} home={home}  currentNav={[0,-1]} className="home-page">
                
                <h3 className="layout" style={{'height':'800px','lineHeight':'800px'}}>React + Redux + Antd + Webpack</h3>
            </MainSection>
        );
    }
}

export default Home;