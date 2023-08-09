import React from 'react';
import SVGElement from './SVGClouds';

import style from './Background.module.css';

const Background = () => {
  return (
    <div className='background'>
      <div className={style.icon}>
        <SVGElement className={style['icon-1']} style={{ color: '#1d1a45' }} />
        <SVGElement className={style['icon-2']} style={{ color: '#1d1a45' }} />
        <SVGElement className={style['icon-3']} style={{ color: '#1d1a45' }} />
        <SVGElement className={style['icon-4']} style={{ color: '#1d1a45' }} />
      </div>
    </div>
  );
};

export default Background;
