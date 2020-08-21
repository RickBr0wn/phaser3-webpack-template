import 'phaser'
import hippoImg from '../assets/hippo_logo.png'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  }

  preload() {
    this.load.image('hippo_logo', hippoImg)
  }

  create() {
    const hippo_logo = this.add.image(400, 300, 'hippo_logo')
  }
}
