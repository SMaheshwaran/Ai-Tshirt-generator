import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#efbd48',
    isLogotexture: true,
    isFulltexture: false,
    logoDecal: './T_Shirt_male',
    fullDecal: './threejs.png',
});

export default state;