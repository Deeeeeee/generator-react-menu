import React from 'react';
/**
 * 加载公共组件
 * */
import MainSection from '../../components/MainSection/MainSection';


/**
 * 加载样式或图片文件
 * */
import './sass/solution.scss';


class ECommerce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const {actions, user, home } = this.props;
        return (
            <MainSection actions={actions} home={home}  className="game-page">
                
            </MainSection>
        );
    }
}

export default ECommerce;