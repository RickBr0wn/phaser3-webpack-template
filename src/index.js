import Phaser from 'phaser'
import hippoImg from './assets/hippo_logo.png'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
  },
}

const game = new Phaser.Game(config)

function preload() {
  this.load.image('logo', hippoImg)
}

function create() {
  const logo = this.add.image(400, 300, 'logo')
}
