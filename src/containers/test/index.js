import React from "react";

export default class Test extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <p>这是测试页面</p>
                <p>this is test page</p>
            </div>
        );
    }
}