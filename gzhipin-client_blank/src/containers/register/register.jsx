import React,{Component} from 'react'
import {Button,NavBar,WingBlank,WhiteSpace,List,InputItem,Radio} from 'antd-mobile'

import Logo from '../../components/logo/logo'

const ListItem = List.Item

export default class Register extends Component{
    state={
        username:'',
        password:'',
        password2:'',
        type:'laoban'
    }
    HandleChange=(name,value)=>{
        this.setState({
            [name]:value
        })
    }
    goLogin=()=>{
        this.props.history.replace('/login')
    }
    register=()=>{
        console.log(this.state)
    }
    render(){
        const {type} = this.state
        return(
            <div>
                <NavBar>用戶註冊</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder='請輸入用戶名' onChange={(value)=>{this.HandleChange('username',value)}}>用戶名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='請輸入密碼' onChange={(value)=>{this.HandleChange('password',value)}}>密&nbsp;&nbsp; 碼：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='請確認密碼' onChange={(value)=>{this.HandleChange('password2',value)}}>確認密碼：</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>請選擇:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio onChange={()=>{this.HandleChange('type','laoban')}} checked={type==='laoban'}>老闆</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio onChange={()=>{this.HandleChange('type','dashen')}} checked={type==='dashen'}>大神</Radio>
                        </ListItem>
                        <WhiteSpace/>
                    </List>
                    <Button type='primary' onClick={this.register}>登&nbsp;&nbsp;陸</Button>
                    <Button onClick={this.goLogin}>已有賬戶</Button>
                    <WhiteSpace/>
                </WingBlank>
            </div>
        )
    }
}