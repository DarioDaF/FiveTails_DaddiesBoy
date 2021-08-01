
import * as e from '../../engine.js';
const { music, show, ask, randompick, image } = e;

import * as s from '../store.js';


import { YouAreDead } from './YouAreDead.js';


export async function Scene1() {
    image('woods.jpg');
    const direction = await ask('Where will you go now:', {
        'E': 'East',
        'W': 'West',
        'N': 'North'
    });
    image();

    if(direction != 'E') {
        await show('You have been attacket by the Goblins');
        s.player.life -= 1;
        if(s.player.life <= 0) {
            return YouAreDead; // Return means to change scene without continuing
        } else {
            await show('You run back scared...');
            return Scene1;
        }
    }

    await show(randompick(
        'Good choice you survived',
        'The choice was good, bless you',
        'Yeah you won!'
    ));

    music();

    await show('YOU WON');

}
