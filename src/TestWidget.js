import React, { useEffect, useState } from 'react'
import { use } from 'xadmin'
import { Button } from 'antd'

// 注册一个画面组件
const TestButton = props => {
    const { text, fontSize = 14 } = props
    return <button style={{ fontSize }}>{text || 'Hello'}</button>
}

// paramSchema定义了widget的可配置的属性格式，json Schema格式编写
const paramSchema = {
    type: 'object',
    properties: {
        text: {
            title: '文字',
            type: 'string'
        },
        fontSize: {
            title: '文字大小',
            type: 'number'
        }
    }
}

const TestWidget = {
    title: '测试按钮',
    category: '组件', //类别名   
    // category:["页面元素","其他"],
    component: TestButton,
    initLayout: { width: 40, height: 20 },
    paramSchema
}

export default TestWidget
