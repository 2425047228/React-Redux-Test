import React from "react";
import { connect } from 'react-redux'
import {actions} from '@/redux/test.js';

class Test extends React.Component {

    render() {
        let {value, add, sub} = this.props;
        console.log(actions);
        console.log(this.props);
        return (
            <div>
                <p>这是测试页面</p>
                <span onClick={add}>&emsp;+&emsp;</span>
                <span>{value}</span>
                <span onClick={sub}>&emsp;-&emsp;</span>
            </div>
        );
    }
}
//将state映射到组件的props中
const mapStateToProps = state => {
    return {widget: state.widget, isLoading: state.isLoading, value:state.value};
}
//将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add:() => dispatch(actions.add()),
        sub:() => dispatch(actions.sub())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);