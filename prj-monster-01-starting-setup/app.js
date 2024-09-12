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
  watch: {
    monsterHealth(value) {
      if (value <= 0) {
        this.winner = "hero";
      }
    },
    heroHealth(value) {
      if (value <= 0) {
        this.winner = "monster";
      }
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
      } else {
        this.heroHealth -= monsterAttack;
      }
    },
    surrender() {
      this.monsterHealth = 0;
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
