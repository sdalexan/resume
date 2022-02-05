import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class Test extends Component {
  componentDidMount() {
    this.initViz()
  }
 
 
  initViz() {
    const vizUrl = 'https://public.tableau.com/views/Resume_16439147995410/Shawn?:embed=y&:display_count=yes';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }
 
 
  render() {
    return (
        <h1 style={{padding: "50px"}}>
      <div ref={(div) => { this.vizContainer = div }}>
      </div>
      </h1>
    )
  }
}
 
 
export default Test;