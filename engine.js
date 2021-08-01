
/** @type HTMLDivElement */
let $novelText;
/** @type HTMLAudioElement */
let $audioPlayer;
/** @type HTMLDivElement */
let $novelImage;
/** @type HTMLUListElement */
let $choices;


class Promisable {
    constructor() {
        this.refresh();
    }
    refresh() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    async reusable() {
        const result = await this.promise;
        this.refresh();
        return result;
    }
}

let currentPromise = new Promisable();
let choicePromise = new Promisable();

let ready = new Promisable();

document.addEventListener('DOMContentLoaded', () => {
    $novelText = document.getElementById('novelText');
    $choices = document.getElementById('choices');
    $audioPlayer = document.getElementById('audioPlayer');
    $novelImage = document.getElementById('novelImage');
    $novelText.addEventListener('click', () => {
        // Move to next if exists
        if(currentPromise) {
            currentPromise.resolve();
        }
    });
    ready.resolve();
});

export async function show(text) {
    currentPromise.refresh(); // To avoid problems
    $novelText.textContent = text;
    return await currentPromise.reusable();
}

export async function image(name) {
    if(name) {
        $novelImage.style.display = 'flex';
        $novelImage.style.backgroundImage = 'url("./image/' + name + '")';
    } else {
        $novelImage.style.display = 'none';
    }
}

export async function ask(text, options) {
    choicePromise.refresh();
    $novelText.textContent = text;

    // Clean $choices
    while($choices.lastChild) {
        $choices.removeChild($choices.lastChild);
    }
    
    for(const [ key, val ] of Object.entries(options)) {
        const $li = document.createElement('li');
        $li.value = key;
        $li.textContent = val;
        $li.addEventListener('click', () => {
            choicePromise.resolve(key);
        });
        $choices.append($li);
    }
    const result = await choicePromise.reusable();
    
    // Clean $choices
    while($choices.lastChild) {
        $choices.removeChild($choices.lastChild);
    }

    return result;
}

export async function music(name, loop = true) {
    if(name) {
        $audioPlayer.src = './music/' + name;
        $audioPlayer.loop = loop;
        await $audioPlayer.play();
    } else {
        await $audioPlayer.pause();
    }
}

export function whenready(f) {
    ready.promise.then(f);
}

export function randompick(...args) {
    return args[Math.floor(Math.random() * args.length)];
}

export function SceneHandler(scene) {
    return async () => {
        while(scene) {
            scene = await scene();
        }
    }
}
