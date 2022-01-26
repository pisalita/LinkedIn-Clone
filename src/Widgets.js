import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsarticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsarticle('My first react article', 'Top news - 9099 readers')}
      {newsarticle('Coronavirus: DK updates', 'Top news - 886 readers')}
      {newsarticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
      {newsarticle('Bitcoin Breaks $22k', 'Crypto - 8000 readers')}
      {newsarticle('Is redux too good?', 'Top news - 123 readers')}
      {newsarticle('Jimmi rocks!', 'Top news - 6503 readers')}
    </div>
  )
}

export default Widgets;
