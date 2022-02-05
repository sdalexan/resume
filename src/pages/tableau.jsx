import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 class Tableau extends Component {
  componentDidMount() {
    this.initViz()
  }
 
 
  initViz() {
    const vizUrl = 'https://public.tableau.com/views/Resume_16439147995410/Shawn?:embed=y&:display_count=yes';
    const vizContainer = this.vizContainer;
    var options = {
        hideTabs: true,
        onFirstInteractive: function() {
          // The viz is now ready and can be safely used.
        }
     };
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
  }
 
 
  render() {
    return (
        <div style={{padding: "20px"}}>
      <div ref={(div) => { this.vizContainer = div }}>
      </div>
      </div>
    )
  }
 };
export default Tableau;