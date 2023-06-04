import { proxy } from "valtio";
import Logo from  "./threejs.png"

const state = proxy({
    intro: true,
    color: '#efbd48',
    isLogotexture: true,
    isFulltexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;