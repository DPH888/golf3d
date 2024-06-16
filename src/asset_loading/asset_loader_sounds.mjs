import {randomSounds, bgMusicFileName,SoundsFalling} from "./asset_config.mjs";

let preloadedSounds = {
    randomSoundsArr: [],
    bgMusicSound: null,
    bounceAudio: null
};
function initSounds() {
    for(let soundPath of randomSounds) {
        const audio = new Audio(soundPath);
        preloadedSounds.randomSoundsArr.push(audio);
    }
    preloadedSounds.bgMusicSound = new Audio(bgMusicFileName);
    preloadedSounds.bounceAudio = new Audio(SoundsFalling);
}
function initSoundsFalling() {
    for(let soundPath of SoundsFalling) {
        const audio = new Audio(soundPath);
        preloadedSounds.randomSoundsArr.push(audio);
    }
}
export {preloadedSounds,initSoundsFalling, initSounds};