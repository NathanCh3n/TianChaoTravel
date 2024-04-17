import { PureComponent } from "react";
import {
    View,
    SwiperItem,
    Swiper,
    Image
} from "@tarojs/components"

import Tab from "../../../components/Tab"
import './index.scss'
const FLIGHT_TABS = [
    { 
        label: '单程1', 
        id: 0,
    },
    { 
        label: '多程', 
        id: 1,
    },
    { 
        label: '往返', 
        id: 2,
    },
]
const BANNER_IMGS = [
    "https://nathan-blog-img.oss-cn-nanjing.aliyuncs.com/blog_img/01.png",
    "https://nathan-blog-img.oss-cn-nanjing.aliyuncs.com/blog_img/12.png",
    "https://nathan-blog-img.oss-cn-nanjing.aliyuncs.com/blog_img/13.png"
]
export default class FlightIndex extends PureComponent {
    handleTabClick = (id) => {
        console.log('id', id)
    }
    render() {
        return (
            <View className="flight-container">
                <View className="flight-top">
                    <Tab 
                        tabList={FLIGHT_TABS}
                        onTabClick={this.handleTabClick}
                        className="flight-index-tab"
                    >
                        <SwiperItem>111</SwiperItem>
                        <SwiperItem>222</SwiperItem>
                        <SwiperItem>333</SwiperItem>
                    </Tab>
                </View>
                <Swiper className="advs-banner-bd" autoplay circular interval={3000}>
                    {
                        BANNER_IMGS.map((item, index) => {
                            return (
                                <SwiperItem key={index} className="item">
                                    <Image className="img" src={item}></Image>
                                </SwiperItem>
                            )
                        })

                    }
                </Swiper>
            </View>
        )
    }
}