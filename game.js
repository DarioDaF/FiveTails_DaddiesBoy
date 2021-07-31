
// These are like scenes
async function YouAreDead() {
    music();
    await show('THE END');
}

whenready(async () => {

    await show('Start'); // Needed because browser does not like to play music if no one asked

    music('Fear lol fi.ogg');

    await show('Hi there, its been some time. I would love to see how you changed. No mater who you are, I will alwas love you.');
    await show('Summer of 99XD the coldest n yeares.');
    await show('My hart shades is what makes me the person I ment out to be. All my pain is a promotion for hem. The, more, I try, he deepert y hart shadesm.');

    const direction = await ask('Where will you go now:', {
        'E': 'East',
        'W': 'West',
        'N': 'North'
    });

    if(direction != 'E') {
        await show('You have been eaten by Goblins');
        await YouAreDead();
        return; // Return means not to continue with the story
    }

    await show('Good choice you survived');

    music();

});
