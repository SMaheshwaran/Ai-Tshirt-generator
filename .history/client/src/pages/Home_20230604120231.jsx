import { motion,AnimatePresence } from 'framer-motion';
import {useSnapshot} from 'valtio' ;

import state from '../store';
import {CustomButton} from "../components/CustomButton"
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
                className="object-contain w-8 h-8"
                />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}></motion.div>
            <h1 className="head-text">
                LET'S <br className="hidden xl:blosk"/> DO IT.
            </h1> 
            </motion.div>
            
            <motion.div {...headContentAnimation}
            className="flex flex-col gsp-5"
            >
            <p className="max-w-md text-base font-normal text-grey-600">
            Create your unique and exclusive shirt with our brand-new 3D customization tool.
            <strong>Unleash your imagination</strong>{" "} and define your own style.
            </p>
            <CustomButton
              type="filled"
              title="Custom It"
              handleClick={() => state.intro = false}
              customStyles="w-fit px-4 py-2.5 font bold text-sm"
            />
            </motion.div>
            
        </motion.section>

    )}
    </AnimatePresence>
  )
}

export default Home
