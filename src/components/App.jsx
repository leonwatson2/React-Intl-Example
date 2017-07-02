import React, { Component } from 'react';
import { IntlProvider, 
        FormattedPlural, 
        FormattedMessage,
        FormattedNumber } from 'react-intl'
import {fr as French } from '../lang'

const styles = {
  display:'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center',
  fontSize:'2em',
  height:'98%'
}

export default class App extends Component{ 

  constructor(props) {
    super(props);
  
    this.state = {
      value:3, 
      lang:French
      };
    this.changeNumber = this.changeNumber.bind(this)
    this.changeLang = this.changeLang.bind(this)
  }
  changeNumber(e){
    console.log(e.target.value);
    this.setState({value:e.target.value})
  }
  changeLang(lang = null){
    if(lang == "fr"){
          this.setState({lang:French})
          console.log(lang);
    }else{
      this.setState({lang:null})
    }
  }
  render(){
    const { value, lang } = this.state
    return (
      <IntlProvider locale="en" messages={lang}>
          <div style={ styles }>
              <div style={ { maxWidth:'80vw', minWidth:'200px' } }>
              <h3> 
                <FormattedMessage
                  id="App__Place" 
                  defaultMessage="What place are you in?" />
              </h3>
                <input type="text" value={value} onChange={this.changeNumber}/>
                <FormattedNumber value={value}/> 
                {
                  lang != French ?
                <FormattedPlural 
                  value={value} 
                  one="st"
                  two="nd"
                  few="rd"
                  other="th" 
                  style='ordinal'
                />:
                <FormattedPlural 
                  value={value} 
                  one="er"
                  other="ème" 
                  style='ordinal'
                />
              }
                
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  
                  <a className="waves-effect btn red" onClick={()=>{this.changeLang()}}>
                  <FormattedMessage
                  id="App__English"
                  defaultMessage="English"
                  />
                  </a>
                  <a className="waves-effect btn red" onClick={()=>{this.changeLang('fr')}}>
                  <FormattedMessage
                  id="App__French"
                  defaultMessage="French"
                  />
                  </a>
                </div>
              </div>

          </div>
      </IntlProvider>
    )
  };
}
  

