class Level {
    coins;
    enemies;
    clouds;
    backgrounds;
    level_end_x = 2200;

    constructor(coins, enemies, clouds, backgrounds) {
        this.coins = coins;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
    }
}