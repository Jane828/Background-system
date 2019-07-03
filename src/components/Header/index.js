import React, { Component } from 'react';
import {Row,Col} from 'antd';
import axios from './../../axios'
import Utils from './../../utils/utils'
import './index.less'

class Header extends Component {
    
    state = { 
        userName: '',
        systime: '',
        cityInfo: '',
        dayPictureUrl: '',
     };

    componentWillMount() {
        this.setState({
            userName: 'Jane_Serry',
        })
        setInterval(() => {
            // 每隔一秒获取new Date().getTime()的时间戳，通过定时器每秒执行一次formateDate()，并把对应时间戳传递进去
            let systime = Utils.formateDate(new Date().getTime())
            this.setState({
                systime: systime
            })
        }, 1000);
        this.getWeatherAPIData();
    }

    getWeatherAPIData = () => {
        let city = '深圳'
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',
        }).then((res)=>{
            console.log('res:', res)
            if(res.status === 'success'){
                let city = res.results[0].currentCity;
                let data = res.results[0].weather_data[0];
                let cityInfo = data.weather +' '+ data.temperature +' '+ city;
                this.setState({
                    cityInfo: cityInfo,
                    dayPictureUrl: data.dayPictureUrl
                })
            }
        })
    }

    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span='24'>
                        <span>欢迎, {this.state.userName}</span>
                        <a href='#'>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span='4' className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col span='20' className='weather'>
                        <span className='date'>{this.state.systime}</span>
                        <span className='weather-img'>
                            <img src={this.state.dayPictureUrl} alt=''></img>
                        </span>
                        <span className='weather-detail'>
                            {this.state.cityInfo}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;