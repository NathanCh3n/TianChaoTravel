import { PureComponent } from "react";
import { View, ScrollView } from "@tarojs/components";
import { airportCityListReq } from "@/common/api";
import tools from "@/common/tools";
import { ERR_MES } from "@/common/constant";
// import CityItem from './components/CityItem'

import './airportList.scss'

export default class Main extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      cityListObj: {}, // 处理之后的城市列表
      letterList: [], // 字母列表
      currentLetter: "", // 当前选中的字母
    }
  }
  componentDidMount() {
    this.getCityList()
  }
  getCityList = async () => {
    tools.showLoading()
    airportCityListReq()
      .then( res => {

      })
      .catch(err => {
        tools.showToast(ERR_MES)
      })
  }
  render() {
    const {
      cityListObj,
      letterList,
      currentLetter
    } = this.state;
    return (
      <View className="airport-list-container">
        城市列表
      </View>
    )
  }
}