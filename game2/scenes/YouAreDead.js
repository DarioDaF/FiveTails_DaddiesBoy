
import * as e from '../../engine.js';
const { music, show, ask, randompick } = e;

// These are like scenes
export async function YouAreDead() {
    music();
    await show('THE END');
}
