import { proxy } from "valtio";
import Logo from  "./threejs.png"

const state = proxy({
    intro: true,
    color: '#efbd48',
    isLogotexture: true,
    isFulltexture: false,
    logoDecal: '</Logo>',
    fullDecal: './threejs.png',
});

export default state;