class Level {
    bottles;
    coins;
    enemies;
    clouds;
    backgrounds;
    level_end_x = 2200;

    constructor(bottles, coins, enemies, clouds, backgrounds) {
        this.bottles = bottles;
        this.coins = coins;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
    }
}