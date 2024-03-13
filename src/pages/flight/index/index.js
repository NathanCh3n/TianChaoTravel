import { PureComponent } from "react";
import {
    View,
} from "@tarojs/components"

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
        id: 3,
    },
]
export default class FlightIndex extends PureComponent {
    render() {
        return (
            <View className="flight-container">
                <View className="flight-top">
                    <Tab 
                        className="flight-tab"
                        tabList={FLIGHT_TABS}
                    />
                </View>
            </View>
        )
    }
}