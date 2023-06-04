import { motion,AnimatePresence } from 'framer-motion';
import {useSnapshot} from 'valtio' ;

import state from '../store';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/config/motion';

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

            <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}></motion.div>
            <h1 className="head-text">
                LET'S <br className="xl:blosk hidden"/> DO IT.
            </h1> 
            </motion.div>
            
        </motion.section>

    )}
    </AnimatePresence>
  )
}

export default Home