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
  },
  methods: {
    healHero() {
      bonusHealth = getRandomValue(20, 15);
      if (this.heroHealth + bonusHealth >= 100) {
        this.heroHealth = 100;
      } else {
        this.heroHealth += bonusHealth;
      }

      this.logAction({
        action: `Hero Healed ${bonusHealth}`,
        actionType: "heal",
        actionBy: "hero",
      });
      console.log("execute");
      this.attackHero();
    },
    attackMonster(max, min) {
      const heroAttack = getRandomValue(max, min);
      this.logAction({
        action: `Hero Attack ${heroAttack}`,
        actionType: "attack",
        actionBy: "hero",
      });
      // this.battleLog.unshift(`Hero Attack: ${heroAttack}`);
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
      this.logAction({
        action: `Monster Attack ${monsterAttack}`,
        actionType: "attack",
        actionBy: "monster",
      });
      // this.battleLog.unshift(`Monster Attack: ${monsterAttack}`);
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
    getStyle(actionBy, actionType) {
      if (actionType === "heal") {
        return "green";
      }
      if (actionBy === "monster") {
        return "red";
      } else {
        return "blue";
      }
    },
    logAction(action) {
      this.battleLog.unshift(action);
    },
  },
}).mount("#game");
