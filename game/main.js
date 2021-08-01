
import * as e from '../engine.js';
const { music, show, ask, randompick } = e;


const dbg = document.getElementById('debug');


const player = {
    AgitLE: 12,
    RubenLE: 13
};

function updatePlayer() {
    dbg.innerHTML = `<p>AgitLE: ${player.AgitLE}</p><p>RubenLE: ${player.RubenLE}</p>`;
}


async function AgiteLE_Zero() {
    music();
    await show('This is why, your everlasting.');
}

async function RubenLE_Zero() {
    music();
    await show('This is where we say good bye, again and we will, again.');    
}


async function Intro() {
    updatePlayer();
    await show('Start'); // Needed because browser does not like to play music if no one asked

    music('Fear lol fi.ogg');

    await show('Hi there, its been some time. I would love to see how you changed. No mater who you are, I will alwas love you.');
    await show('Summer of 99XD the coldest n yeares.');
    await show('My hart shades is what makes me the person I ment out to be. All my pain is a promotion for hem. The, more, I try, he deepert y hart shadesm.');
    await show('So this is it.')
    await show('Fivery, the hole super cojia put us here.')
    await show('Only for are minds?')
    await show('Why my mother say that I may never know.')
    await show('There are stars and there are losers')
    await show('I just sit as my mind wonder, why is are world on it-s means of structure. ')
    await show('Sobo, what pondering you?')
    await show('Oh the man in the Purple Forest. The one you and Edash seen.')
    await show('Okay so if you want, we can talk.')
    await show('Im sorry, if it confused you to see out of your domesticated life ')
    await show('If you really want to know the truth of that day all thoughts Milana ago talk to are new Edash.')
    await show('You didn-t understand Agits words.')
    await show('You felt as if you lived this life but yarger but older.')
    await show("Still, controls you, do it?")
    await show('The other Sobos, yes.')
    await show('This would is on its eage yet your so close.')

    return Scene1;
}


async function Scene1() {
    const direction = await ask('Where will you go now:', {
        'E': 'The Ethay spot',
        'W': 'The Kubkub',
    });

    if(direction === 'W') {
        await show('You and Agit go to the spot for it to be ematy it doesn-t make since. There uset to be living here, you though.');
        player.AgiitLE -= 2;
        updatePlayer();
        if(player.AgiitLE <= 0) {
            return AgiteLE_Zero;
        }
        await show('It be okay we go though this every 60s years Sobo.You was the lucky one.');
        await show('You!');
        //music(); // If you change music it stops the previous one automatically
        music('m.mp3');
        await show('Hahahaha');
        await show('I bet your happy ha Rubenstein.');
        await show('I still can-t stand you. Even when your not playing. I don-t want to do this anymore.');
        await show('This will be the last time, don\'t it hurts.');
        await show('Yes Its the Hards.');
        await show('Now why you! Fucker go off to the stank hole you was born in ');
        await show('No wait, I don\'t think we need to relive this day.');
        await show('Agit Sobo is crying.');
        await show('What is he younger already?');
        player.AgiitLE -= 2;
        player.RebenlE += 2;
        updatePlayer();
        await show("Should we take him to his lover.")
        await show("Will let his spirit do that for him.")
        await show("You felt sleepy.")
        player.AgitLE += 5;
        updatePlayer();
        await show('2003AD');
        await show('So odd boy why are you confused still on the future.');
        await show('Father why you just changed time now he\'s alive!?');
        await show('Yes, now the end will begin for me. 52 souls have walked heavy.');
        await show('Good bye father');

        const direction = await ask('---', {
            '16': '16',
            '19': '19'
        });
        
        if(direction != '19') {
            await show('You have been attacket by the Goblins');
            player.AgiitLE -= 13;
            updatePlayer();
            return Scene1;
        }

        if(direction != '16') {
            await show('Sobo when ever you have the chance, take Agit out please? He must be nverce of losing you.');
            player.AgiitLE += 13;
            updatePlayer();
        }
    } else if(direction === 'E') {
        await show('You have been attacket by the Goblins');
        player.RubenLE -= 13;
        updatePlayer();
        if(player.RubenLE <= 0) {
            return RubenLE_Zero;
        }
    }

    music();
}


e.whenready(e.SceneHandler(Intro)); // Mark what is the first scene

