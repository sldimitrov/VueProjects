function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkKill(attack, health) {
  return attack >= health;
}

Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      heroHealth: 100,
      currentRound: 0,
      battleLog: [],
      winner: null,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    heroBarStyles() {
      return { width: this.heroHealth + "%" };
    },
    maySpecialAttack() {
      return this.currentRound % 5 === 0;
    },
  },
  methods: {
    healHero() {
      bonusHealth = getRandomValue(25, 15);
      this.heroHealth += bonusHealth;
      this.attackHero();
    },
    attackMonster(max, min) {
      const heroAttack = getRandomValue(max, min);
      this.battleLog.unshift("Hero Attack: ", heroAttack);
      if (checkKill(heroAttack, this.monsterHealth)) {
        this.monsterHealth = 0;
        this.gameOver("hero");
      } else {
        this.monsterHealth -= heroAttack;
        this.attackHero();
      }
    },
    attackHero() {
      this.currentRound += 1;
      const monsterAttack = getRandomValue(20, 10);
      this.battleLog.unshift("Monster Attack: ", monsterAttack);
      if (checkKill(monsterAttack, this.heroHealth)) {
        this.heroHealth = 0;
        this.gameOver("monster");
      } else {
        this.heroHealth -= monsterAttack;
      }
    },
    gameOver(winner) {
      if (winner === "hero") {
        this.winner = "hero";
      } else if (winner === "monster") {
        this.winner = "monster";
      }
    },
    surrender() {
      this.monsterHealth = 0;
      this.gameOver("monster");
    },
    restartGame() {
      this.monsterHealth = 100;
      this.heroHealth = 100;
      this.currentRound = 0;
      this.battleLog = [];
      this.winner = null;
    },
  },
}).mount("#game");
