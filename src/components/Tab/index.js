import { View } from '@tarojs/components'
import { PureComponent } from 'react'

import './index.scss'
// tabList = [
//     {
//         label: String,
//         id: Number
//     }
// ]
export default class Tab extends PureComponent {
  render() {
    const { 
        className, 
        tabList
    } = this.props
    return (
        <View className={`tab-container ${className}`}>
            <View className='tab-bar'>
                {
                    tabList?.map(item => {
                        return (
                            <View 
                                key={item.tab} 
                                className={`tab-item`}>
                                {item.label}
                            </View>
                        ) 
                    })
                }
            </View>
        </View>
    )
  }
}
