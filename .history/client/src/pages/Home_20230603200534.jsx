import React from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import {useSnapshot, usesnapshot} from 'valtio' ;

import state from '../store';

import {
    headContainerAnimation,
    headtcontentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/moition'

const Home = () => {
  const snap = useSnapshot(state);
    return (
    <AnimatePresence>
    {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
            <motion.header>
                <img
                src='./threejs.png'
                alt="logo"
                className="w-8 h-8 object-contain"

                />
            </motion.header>
        </motion.section>
    )}
    </AnimatePresence>
  )
}

export default Home