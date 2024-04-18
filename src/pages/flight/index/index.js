import { PureComponent } from "react";
import {
    View,
    SwiperItem,
    Swiper,
    Image
} from "@tarojs/components"
import { adsReq } from "@/common/api";

import Tab from "../../../components/Tab"
import './index.scss'
const FLIGHT_TABS = [
    { 
        label: '单程', 
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
export default class FlightIndex extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            adList: [], // 广告banner
        }
    }
    componentDidMount() {
        this.getAds()
    }
    handleTabClick = (id) => {
        console.log('id', id)
    }
    getAds = async () => {
        adsReq().then(res => {
            const { result } = res
            this.setState({
                adList: result || [],
            })
        })
    }
    render() {
        const { adList } = this.state
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
                        adList.map(item => {
                            return (
                                <SwiperItem key={item.id} className="item">
                                    <Image className="img" src={item.imgUrl}></Image>
                                </SwiperItem>
                            )
                        })

                    }
                </Swiper>
            </View>
        )
    }
}