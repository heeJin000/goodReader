import axios from 'axios';
import React, {Component} from 'react';

const ApiCall = () => {
    
      const response = axios.get('https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbtogether0002243001&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101');
      console.log(response.data)    
  }


export default ApiCall;