let default2dImages = [
    { imageName: 'circle', backupColor: 'black' },
    { imageName: 'backField', backupColor: 'green' }
];


let materials_data = [
    { name: "BrickConcrete", path: './images/LiminalTextureLib/BrickConcrete1.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff },
    { name: "Brick", path: './images/LiminalTextureLib/Brick.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff },
    { name: "Concrete1", path: './images/LiminalTextureLib/Concrete1.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff },
    { name: "Concrete2", path: './images/LiminalTextureLib/Concrete3.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff },
    { name: "Grass", path: './images/LiminalTextureLib/Grass1.jpg', tilingx: 2, tilingy: 2, tint: 0xffffff },
    { name: "Metal1", path: './images/LiminalTextureLib/Metal1.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff, metalness: 0.7, roughness: 0.5 },
    { name: "Planks1", path: './images/LiminalTextureLib/Planks1.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff },
    { name: "Sand", path: './images/LiminalTextureLib/Sand.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff },
    { name: "TreeBark", path: './images/LiminalTextureLib/TreeBark.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff },
    { name: "Asphalt", path: './images/LiminalTextureLib/Asphalt.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff },
    { name: "Wood", path: './images/LiminalTextureLib/Wood2.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff, metalness: 0, roughness: 0.5 },
    { name: "Metal2", path: './images/LiminalTextureLib/Metal2.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff, metalness: 0.7, roughness: 0.5 },
    { name: "Ice", path: './images/LiminalTextureLib/Ice.jpg', tilingx: 1, tilingy: 1, tint: 0xffffff, metalness: 0.3, roughness: 0.2 },
    { name: "GolfBall", path: './images/LiminalTextureLib/GolfBall.jpg', tilingx: 3, tilingy: 3, tint: 0xffffff, metalness: 0, roughness: 0.8 }
];


const randomSounds = [
    "./music/golf ball hit 1.wav",
    "./music/golf ball hit 2.wav",
    "./music/golf ball hit 3.wav",
    "./music/golf ball hit 4.wav",
];

const SoundsFalling = [
    "./music/golf ball fall.mp3",
];

const bgMusicFileName = './music/song.mp3';

export { default2dImages as images, materials_data, randomSounds, bgMusicFileName,SoundsFalling };