
const player = {
    life: 2
};

// These are like scenes
async function YouAreDead() {
    music();
    await show('THE END');
}


async function Intro() {
    await show('Start'); // Needed because browser does not like to play music if no one asked

    music('Fear lol fi.wav');

    await show('Hi there, its been some time. I would love to see how you changed. No mater who you are, I will alwas love you.');
    await show('Summer of 99XD the coldest n yeares.');
    await show('My hart shades is what makes me the person I ment out to be. All my pain is a promotion for hem. The, more, I try, he deepert y hart shadesm.');

    return Scene1;
}


async function Scene1() {
    const direction = await ask('Where will you go now:', {
        'E': 'East',
        'W': 'West',
        'N': 'North'
    });

    if(direction != 'E') {
        await show('You have been attacket by the Goblins');
        player.life -= 1;
        if(player.life <= 0) {
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

}

whenready(SceneHandler(Intro));
