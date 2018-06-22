import React,{Component} from 'react'
import {Button,NavBar,WingBlank,WhiteSpace,List,InputItem,Radio} from 'antd-mobile'

import Logo from '../../components/logo/logo'

const ListItem = List.Item

export default class Register extends Component{

    state={
        username:'',
        password:''
    }
    handleChange=(name,value)=>{
        this.setState({
            [name]:value
        })
    }
    goRegister=()=>{
        this.props.history.replace('/register')
    }
    login=()=>{
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <NavBar>登&nbsp;&nbsp;陸</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder='請輸入用戶名' onChange={(value)=>{this.handleChange('username',value)}}>用戶名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='請輸入密碼' onChange={(value)=>{this.handleChange('password',value)}}>密&nbsp;&nbsp; 碼：</InputItem>
                        <WhiteSpace/>
                    </List>
                    <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;陸</Button>
                    <WhiteSpace/>
                    <Button onClick={this.goRegister}>注&nbsp;&nbsp;冊</Button>
                    <WhiteSpace/>
                </WingBlank>
            </div>
        )
    }
}