import React, { useState,useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader} from '../config/config/helpers';
import {EditorTabs,Filtertabs,DecalTypes} from '../config/config/constants';
import { fadeAnimation,slideAnimation } from '../config/config/motion';


const Customizer = () => {
  return (
    <div>
      Customizer
    </div>
  )
}

export default Customizer
