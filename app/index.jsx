import React from 'react'
import { render } from 'react-dom'
import './static/css/common.less'

// 创建 Redux 的 store 对象
class Hello extends React.Component{
    render(){
        return(
            <div>hello world <span>xueyb</span></div>
        )
    }
}
render(
    <Hello/>,
    document.getElementById('root')
)
