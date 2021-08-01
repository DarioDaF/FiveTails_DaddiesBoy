
import * as e from '../engine.js';
const { music, show, ask, randompick } = e;


import { Intro } from './scenes/Intro.js';


e.whenready(e.SceneHandler(Intro)); // Mark what is the first scene
