const togglePassword1 = document.querySelector(".togglePassword1");
const password1 = document.querySelector(".password1");
const togglePassword2 = document.querySelector(".togglePassword2");
const password2 = document.querySelector(".password2");
const togglePassword3 = document.querySelector(".togglePassword3");
const password3 = document.querySelector(".password3");

togglePassword1.addEventListener("click", (function () {
  const type = password1.getAttribute("type") === "password" ? "text": "password";
  password1.setAttribute("type", type);
  this.classList.toggle("bi-eye");
}));

togglePassword2.addEventListener("click", (function () {
  const type = password2.getAttribute("type") === "password" ? "text": "password";
  password2.setAttribute("type", type);
  this.classList.toggle("bi-eye");
}));

togglePassword3.addEventListener("click", (function () {
  const type = password3.getAttribute("type") === "password" ? "text": "password";
  password3.setAttribute("type", type);
  this.classList.toggle("bi-eye");
}));

const form1 = document.querySelector(".form1");
form1.addEventListener("submit", (function (e) {
  e.preventDefault();
}));

const form2 = document.querySelector(".form2");
form2.addEventListener("submit", (function (e) {
  e.preventDefault();
}));

let accSettings = document.getElementById("accountSettings");
let accSettingsText = document.getElementById("accountSettingsText");
let accSettingsDiv = document.getElementById("accountSettingsDiv");

document.getElementById("accountSettingsDiv").style.display = "none";
document.querySelector(".accountSettingsModal").style.display = "none";

accSettings.onclick = function (e) {
  if (accModal.style.display === "none" && accSettingsText.innerHTML === "Open Account Settings") {
    // accSettingsDiv.style.display = "flex";
    accModal.style.display = "flex";
    accModal.classList.remove("fade");
  }
};

let closeModal = document.getElementById("modalCloseIcon");
let accModal = document.querySelector(".accountSettingsModal");

closeModal.onclick = function (e) {
  accModal.classList.add("fade");
  setTimeout(() => {
    document.getElementById("accountSettingsDiv").style.display = "none";
    // document.querySelector(".account-settings-modal").style.display = "none";
    // document.querySelector(".accountSettingsModal").style.opacity = 0;
  }, 300);
};

let closePopUp = document.getElementById("popUpCloseIcon");
let confirmPopUp = document.querySelector(".confirmationPopUp");

closePopUp.onclick = function (e) {
  confirmPopUp.classList.add("fade");
  setTimeout(() => {
    document.getElementById("confirmPopUp").style.display = "none";
  }, 300);
  setTimeout(() => {
    confirmPopUp.classList.remove("fade");
  }, 400);
};

function L(_) {
  if (_ === 0) {
    document.getElementById("confirmPopUp").style.display = "block";
    document.getElementById("confirmationText").innerHTML = "Verify username change."
    document.getElementById("accountPasswordInput").placeholder = "Enter current password to verify."
  } else if (_ === 1) {
    document.getElementById("confirmPopUp").style.display = "block";
    document.getElementById("confirmationText").innerHTML = "Verify password change."
    document.getElementById("accountPasswordInput").placeholder = "Enter current password to verify."
  } else {
    document.getElementById("confirmPopUp").style.display = "block";
    document.getElementById("confirmationText").innerHTML = "Verify account delete."
    document.getElementById("accountPasswordInput").placeholder = "Enter \"Yes\" to verify."
  }
};

(function (e) {
  function K() {
    fetch(`/userData?password=${localStorage.getItem("password")}?username=${localStorage.getItem("username")}`)
      .then((t) => t.json())
      .then((h) => {
        document.getElementById("PlayerGold").innerHTML = h.PlayerGold.toLocaleString();
        document.getElementById("PlayerRank").innerHTML = h.PlayerRank;
        if (h.PlayerRank === 1) {
          document.getElementById("PlayerRank").classList.add("first");
        } if (h.PlayerRank === 2) {
          document.getElementById("PlayerRank").classList.add("second");
        } if (h.PlayerRank === 3) {
          document.getElementById("PlayerRank").classList.add("third");
        }
        setTimeout(() => {
          K();
        }, 4000);
      })
      .catch(function (h) {
        document.getElementById("PlayerGold").innerHTML = "Failed.";
        document.getElementById("PlayerRank").innerHTML = "Failed.";
      });
    let h = localStorage.getItem("username") || "Unknown";
    document.getElementById("Username").innerHTML = h;
    h == "Unknown" ? document.getElementById("accountSettings").style.display = "none" :  document.getElementById("accountSettings").style.display = "block";
    document.querySelector("#nameInput").value = localStorage.getItem("name") || "Player_0";
  };
  K();

  let settingsDiv = document.getElementById("rightCardHolder");
  let settingsToggle = document.getElementById("toggleSettings");
  let settingsText = document.querySelector("#toggleSettings");
  let resourcesAndMap = document.getElementById("resourcesAndMap");
  let crown = new Image();
  let leaderboardScores = document.querySelector(".leaderboardScores");
  let ageLevelItems = document.querySelector("#ageLevelItems");
  let itemDetailsContainer = document.querySelector(".itemDetailsContainer");
  let hatNameContainer = document.querySelector(".hatNameContainer");
  var YTofDay = document.getElementById("YTofDay");
  var ageItemSelectCounter = document.getElementById("ageItemSelectCounter");
  let loginDiv = document.getElementById("loginCard");
  let registerDiv = document.getElementById("registerCard");
  let loginToggle = document.getElementById("toggleLogin");
  let loginText = document.querySelector("#toggleLogin");
  let loginSection = document.getElementById("loginSection");
  let registerSection = document.getElementById("registerSection");
  let accountSectionContainer = document.getElementById("accountSectionContainer");
  loginSection.style.backgroundColor = "#2c8a68";
  loginSection.onclick = function (e) {
    if (e.isTrusted) {
    if (loginDiv.style.display === "none") {
      loginDiv.style.display = "inline-block";
      registerDiv.style.display = "none";
      accountSectionContainer.style.display = "flex";
    }
    if (loginSection.style.backgroundColor === "#2c8a68") {
      loginSection.style.backgroundColor = "#329e78";
      registerSection.style.backgroundColor = "#ff9900";
    } else {
      loginSection.style.backgroundColor = "#2c8a68";
      registerSection.style.backgroundColor = "#ff9900";
    }
  }
  };
  registerSection.onclick = function (e) {
    if (registerDiv.style.display === "none") {
      registerDiv.style.display = "inline-block";
      loginDiv.style.display = "none";
      accountSectionContainer.style.display = "flex";
    }
    if (registerSection.style.backgroundColor === "#ff9900") {
      registerSection.style.backgroundColor = "#e98c02";
      loginSection.style.backgroundColor = "#329e78";
    } else {
      registerSection.style.backgroundColor = "#e98c02";
      loginSection.style.backgroundColor = "#329e78";
    }
  };
  let closeIcon = document.getElementById("closeIcon");
  closeIcon.onclick = function (e) {
    document.getElementById("close").style.opacity = 1;
    setTimeout((() => {
      document.getElementById("close").style.opacity = 0.9;
    }), 210);
    setTimeout((() => {
      document.getElementById("close").style.opacity = 0.8;
    }), 220);
    setTimeout((() => {
      document.getElementById("close").style.opacity = 0.7;
    }), 230);
    setTimeout((() => {
      document.getElementById("close").style.opacity = 0.6;
    }), 240);
    setTimeout((() => {
      document.getElementById("close").style.opacity = 0.5;
    }), 250);
    setTimeout((() => {
      document.getElementById("close").style.opacity = 0.4;
    }), 260);
    setTimeout((() => {
      document.getElementById("close").style.opacity = 0.3;
    }), 270);
    setTimeout((() => {
      document.getElementById("close").style.opacity = 0.2;
    }), 280);
    setTimeout((() => {
      document.getElementById("close").style.opacity = 0.1;
    }), 290);
    setTimeout((() => {
      document.getElementById("close").style.opacity = 0;
      document.getElementById("close").style.display = "none";
    }), 300)
  };
  run = false;
  let randomDeathText = ["You died",
    "Game over",
    "You lost",
    "Try again"];
  let deathText = randomDeathText[Math.floor(Math.random() * randomDeathText.length)];
  document.getElementById("randomDeathText")
  .innerHTML = deathText;
  var Youtubers = [{
    name: "Dot",
    link: "https://www.youtube.com/channel/UC6vAe7y3rucPrqTyQYwtl2Q"
  },
    {
      name: "x_X NOOB X_x",
      link: "https://www.youtube.com/c/xXNOOBXx"
    },
    {
      name: "AFK",
      link: "https://www.youtube.com/channel/UCWMmS0ewX0fRJZUwonryI9g"
    },
    {
      name: "CrashBreaker",
      link: "https://www.youtube.com/c/CrashBreaker"
    },
    {
      name: "Assasin_blaze?",
      link: "https://www.youtube.com/channel/UCJ88TU07XHUQxdAaUaTHGFQ"
    },
    {
      name: "X-Jorge Pet",
      link: "https://www.youtube.com/channel/UCndcue_WhfwrDy3uzUTnMNQ"
    }];
  var creator = Youtubers[Math.floor(Math.random() * (Youtubers.length - 1 - 0 + 1)) + 0];

  function RandomYT() {
    YTofDay.href = creator.link + "?sub_confirmation=1";
    YTofDay.innerHTML = `<i class='material-icons' style='vertical-align: top;'>&#xE064;</i> ${creator.name}`
  }
  RandomYT();
  var Weps = [{
    id: 0,
    name: "Tool Hammer",
    info: "Get resources and upgrade your tool.",
    clicked: false,
    src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hammer_Tool.png?v=1661566949950"
  },
    {
      id: 1,
      name: "Short Sword",
      info: "Attack Enemies With A Short Sword.",
      clicked: false,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/short_sword?v=1661580370892"
    }];
  var Weapons = [{
    id: 0,
    name: "Tool Hammer",
    info: "Get resources and upgrade your tool.",
    stone: 0,
    wood: 0,
    food: 0
  },
    {
      id: 1,
      name: "Orange",
      info: "Heals +20 health.",
      stone: 0,
      wood: 0,
      food: 10
    },
    {
      id: 2,
      name: "Spike",
      info: "Does damage to enemies but not you.",
      stone: 5,
      wood: 10,
      food: 0
    },
    {
      id: 3,
      name: "Wall",
      info: "Use this to make a base and protect you.",
      stone: 0,
      wood: 20,
      food: 0
    },
    {
      id: 4,
      name: "Booster",
      info: "Gives you a boost when you walk on it.",
      stone: 20,
      wood: 10,
      food: 0
    },
    {
      id: 5,
      name: "Trap",
      info: "Traps your enemies but not you.",
      stone: 5,
      wood: 20,
      food: 0
    },
    {
      id: 6,
      name: "TeleportPad",
      info: "Teleports you to random location on map.",
      stone: 50,
      wood: 50,
      food: 0
    },
    {
      id: 7,
      name: "Short Sword",
      info: "Run Into Battle With The New Short Sword!",
      stone: 0,
      wood: 0,
      food: 0
    }];
  var Hats = [{
    name: "X-jorgepet cap",
    src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/xjorgepet.png?v=1661560063042",
    id: 7,
    info: "Subscribe to X-jorgepet!",
    price: "",
    clicked: false
  },
    {
      name: "CrashBreaker hat",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/cb%20hat.png?v=1662612419428",
      id: 8,
      info: "Subscribe to CrashBreaker!",
      price: "",
      clicked: false
    },
    {
      name: "Barbarian Hat",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_1?v=1660911224026",
      id: 1,
      info: "Free hat",
      price: "",
      clicked: false
    },
    {
      name: "Booster Hat",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_2?v=1661020109681",
      id: 2,
      info: "Increase speed",
      price: "3000",
      clicked: false
    },
    {
      name: "Soldier Hat",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_3?v=1661021555445",
      id: 3,
      info: "Increase health",
      price: "5000",
      clicked: false
    },
    {
      name: "Fish Hat",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_4?v=1661059006830",
      id: 4,
      info: "Advanced swimmer",
      price: "2500",
      clicked: false
    },
    {
      name: "Tank Gear",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_40.png?v=1661061791387",
      id: 5,
      info: "Increase damage to objects",
      price: "15000",
      clicked: false
    },
    {
      name: "Spike Gear",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_11.png?v=1661095515533",
      id: 6,
      info: "Deals damage to enemies",
      price: "10000",
      clicked: false
    }];
  var Acc = [{
    name: "Shadow Wings",
    src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/wings_1?v=1661534786091",
    id: 1,
    info: "Move Faster",
    price: "",
    clicked: false
  },
    {
      name: "God Wings",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/wings_2?v=1661538178387",
      id: 2,
      info: "Fly Over The Sunrise",
      price: "20000",
      clicked: false
    }];

  function accessoriesMenu(player) {
    for (let i = 0; i < Acc.length; i++) {
      var AccItems = document.getElementById("AccessoriesGear" + [i]);
      AccItems.innerHTML = `\n <div class="itemsInfo1">\n <img src="${Acc[i].src}" alt="" class="itemImg" />\n <span class="itemName">${Acc[i].name}</span>\n <br /><span class="itemInfo">${Acc[i].info}</span>\n </div>\n <div class="itemsInfo2">\n <span class="itemPrice">${Acc[i].price}</span>\n <a id="EquipAccessories${[i]}" class="equipItem">Equip</a>\n </div>\n `;
      Acc[i].clicked = false;
      var AccessoriesHat = document.getElementById("AccessoriesGear" + [i]);
      AccessoriesHat.onclick = function () {
        Acc[i].clicked = !Acc[i].clicked;
        send(["Ac", [{
          acc: Acc[i].clicked ? Acc[i].id: 0
        }]]);
        if (Acc[i].clicked === false) {
          for (let i = 0; i < Acc.length; i++) {
            document.getElementById("EquipAccessories" + i)
            .innerHTML = "Equip"
          }
        } else {
          for (let i = 0; i < Acc.length; i++) {
            document.getElementById("EquipAccessories" + i)
            .innerHTML = "Equip"
          }
          document.getElementById("EquipAccessories" + i)
          .innerHTML = "Unequip"
        }
      }
    }
  }
  accessoriesMenu();

  function hatMenu(player) {
    for (let i = 0; i < Hats.length; i++) {
      var HatItems = document.getElementById("HatItems" + [i]);
      HatItems.innerHTML = `\n <div class="itemsInfo1">\n <img src="${Hats[i].src}" alt="" class="itemImg" />\n <span class="itemName">${Hats[i].name}</span>\n <br /><span class="itemInfo">${Hats[i].info}</span>\n </div>\n <div class="itemsInfo2">\n <span class="itemPrice">${Hats[i].price}</span>\n <a id="EquipGear${[i]}" class="equipItem">Equip</a>\n </div>\n `;
      Hats[i].clicked = false;
      var EquipHat = document.getElementById("EquipGear" + [i]);
      EquipHat.onclick = function () {
        Hats[i].clicked = !Hats[i].clicked;
        send(["Hd", [{
          hat: Hats[i].clicked ? Hats[i].id: 0
        }]]);
        if (Hats[i].clicked === false) {
          for (let i = 0; i < Hats.length; i++) {
            document.getElementById("EquipGear" + i)
            .innerHTML = "Equip"
          }
        } else {
          for (let i = 0; i < Hats.length; i++) {
            document.getElementById("EquipGear" + i)
            .innerHTML = "Equip"
          }
          document.getElementById("EquipGear" + i)
          .innerHTML = "Unequip"
        }
      }
    }
  }
  hatMenu();
  for (let i = 0; i < Hats.length; i++) {
    document.getElementById("EquipGear" + i)
    .addEventListener("mouseover", (function (e) {
      if (e.isTrusted) {
        hatNameContainer.style.display = "block";
        document.getElementById("hatNameDetails")
        .innerHTML = Hats[i].name;
        document.getElementById("hatDetails")
        .innerHTML = Hats[i].info
      }
    }));
    document.getElementById("EquipGear" + i)
    .addEventListener("mouseout", (function (e) {
      if (e.isTrusted) {
        hatNameContainer.style.display = "none"
      }
    }))
  }
  for (let i = 0; i < Acc.length; i++) {
    document.getElementById("EquipAccessories" + i)
    .addEventListener("mouseover", (function (e) {
      if (e.isTrusted) {
        hatNameContainer.style.display = "block";
        document.getElementById("hatNameDetails")
        .innerHTML = Acc[i].name;
        document.getElementById("hatDetails")
        .innerHTML = Acc[i].info
      }
    }));
    document.getElementById("EquipAccessories" + i)
    .addEventListener("mouseout", (function (e) {
      if (e.isTrusted) {
        hatNameContainer.style.display = "none"
      }
    }))
  }
  settingsToggle.onclick = function (e) {
    if (e.isTrusted) {
      if (settingsText.innerHTML === "Open Settings") {
        settingsDiv.style.display = "inline-block";
        settingsText.innerHTML = "Close Settings"
      } else {
        settingsDiv.style.display = "none";
        settingsToggle.style.zIndex = "1";
        settingsText.innerHTML = "Open Settings"
      }
    }
  };
  loginToggle.onclick = function (e) {
    if (e.isTrusted) {
      if (loginText.innerHTML === "Open Login Form") {
        loginDiv.style.display = "inline-block";
        loginText.innerHTML = "Close Login Form";
        registerDiv.style.display = "none";
        loginSection.style.backgroundColor = "#2c8a68";
        registerSection.style.backgroundColor = "#ff9900";
        accountSectionContainer.style.display = "flex"
      } else {
        loginDiv.style.display = "none";
        loginToggle.style.zIndex = "1";
        loginText.innerHTML = "Open Login Form";
        registerDiv.style.display = "none";
        loginSection.style.backgroundColor = "#2c8a68";
        registerSection.style.backgroundColor = "#ff9900";
        accountSectionContainer.style.display = "none"
      }
    }
  };
  window.onbeforeunload = e => "Are you sure?";
  var keycodes = {
    MOVE_UP: "KeyW",
    MOVE_DOWN: "KeyS",
    MOVE_LEFT: "KeyA",
    MOVE_RIGHT: "KeyD",
    MOVE_UP2: "ArrowUp",
    MOVE_DOWN2: "ArrowDown",
    MOVE_LEFT2: "ArrowLeft",
    MOVE_RIGHT2: "ArrowRight",
    CHAT: "Enter",
    QUICK_FOOD: "KeyQ",
    AUTO_HIT: "KeyE",
    LOCK_DIR: "KeyX",
    BASE: "KeyV",
    HOTBAR_1: "Digit1",
    HOTBAR_2: "Digit2",
    HOTBAR_3: "Digit3",
    HOTBAR_4: "Digit4",
    HOTBAR_5: "Digit5",
    HOTBAR_6: "Digit6",
    HOTBAR_7: "Digit7",
    HOTBAR_8: "Digit8",
    HOTBAR_9: "Digit9"
  };
  var swingAngle = {};
  var inventory = [];
  var autohitting = false;
  var AutoHit = false;
  var autohittingwason = false;
  var lockDir = false;
  var moveUp = 0;
  var moveDown = 0;
  var moveLeft = 0;
  var moveRight = 0;
  var SpawnedOnce = 0;
  var deathLocX = -40;
  var deathLocY = 0;
  var baseLocX = -40;
  var baseLocY = 0;
  var soundOn = true;
  var sound = document.getElementById("sound");
  var killstreak = 0;
  let age = 1;
  let ageChange = false;
  var Base = 0;
  document.addEventListener("keydown", (function (e) {
    if (e.which == 123) {
      e.preventDefault()
    }
    if (e.ctrlKey && e.shiftKey && e.which == 73) {
      e.preventDefault()
    }
    if (e.ctrlKey && e.shiftKey && e.which == 75) {
      e.preventDefault()
    }
    if (e.ctrlKey && e.shiftKey && e.which == 67) {
      e.preventDefault()
    }
    if (e.ctrlKey && e.shiftKey && e.which == 74) {
      e.preventDefault()
    }
  }));

  function isFuncNative(f) {
    return !!f && (typeof f)
    .toLowerCase() == "function" && (f === Function.prototype || /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/i.test(String(f)))
  }
  setInterval((() => {
    window.console = {
      log: function (e) {
        send(["vx", ["Unfair advantage"]])
      },
      info: function (e) {
        send(["vx", ["Unfair advantage"]])
      },
      warn: function (e) {
        send(["vx", ["Unfair advantage"]])
      },
      error: function (e) {
        send(["vx", ["Unfair advantage"]])
      }
    };
    if (!isFuncNative(WebSocket.prototype.send) && ws) {
      send(["vx", ["Unfair advantage"]])
    }
    document.getElementById("teamContainer")
    .innerHTML = "";
    if (clans.length != 0) {
      for (let i = 0; i < clans.length; i++) {
        document.getElementById("teamContainer")
        .innerHTML += `<div class="teamInfo"><div class="teamName">${clans[i].clanName}</div> <a clan="${i}" id="joinClan${i}" class="joinTeamBtn">Join</a></div><br /><br />`
      }
    } else {
      document.getElementById("teamContainer")
      .innerHTML += `<div class="teamsText" id="">There are no clans yet!</div>`
    }
    document.getElementById("memberContainer")
    .innerHTML = "";
    document.getElementById("kills")
    .innerHTML = myPlayer.kills;
    if (clansMem.length != 0) {
      for (let i = 0; i < clansMem.length; i++) {
        if (clansMem[myPlayer.clanID]) {
          document.getElementById("memberContainer")
          .innerHTML += `<div class="membersInfo"><div class="memberName">${clansMem[myPlayer.clanID].clanMembers[i].name}</div> <a class="kickMemberBtn">Kick</a></div><br /><br />`
        }
      }
    } else {
      document.getElementById("memberContainer")
      .innerHTML += `<div class="teamsText" id="">There are no clans yet!</div>`
    }
    for (let i = 0; i < clans.length; i++) {
      document.getElementById("joinClan" + i)
      .addEventListener("click", (function (e) {
        send(["joinClan", [e.clan]])
      }))
    }
  }), 1e3);
  
  function m() {
    var t;
    window.onload = z;
    window.onmousemove = z;
    window.onmousedown = z;
    window.ontouchstart = z;
    window.ontouchmove = z;
    window.onclick = z;
    window.onkeydown = z;
    window.addEventListener("scroll", z, true);

    function q() {
      if (document.getElementById("mainMenu")
        .style.display === "none") {
        send(["vx", ["Idle too long."]])
      }
    }

    function z() {
      clearTimeout(t);
      t = setTimeout(q, 3e5)
    }
  }
  m();
  let waveSize = 0,
  waveGrow = true;

  function Wave() {
    if (waveGrow) {
      waveSize = ++waveSize;
      if (waveSize >= 50) {
        waveGrow = false
      }
    } else {
      waveSize = --waveSize;
      if (waveSize <= 0) {
        waveGrow = true
      }
    }
  }
  setInterval(Wave, 50);

  function toRad(angle) {
    return angle * .01745329251
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function kick(msg) {
    document.getElementById("menuCardHolder")
    .style.display = "none";
    document.getElementById("mainMenu")
    .style.display = "block";
    document.getElementById("loadingText")
    .style.display = "block";
    document.getElementById("loadingText")
    .innerHTML = msg + "<a href='javascript:window.location.href=window.location.href' class='reload'>Reload</a>"
  }
  var nausea = false;
  var attacking = false;
  let ws;
  let canvas = document.getElementById("gameCanvas");
  var chatbox = document.getElementById("chatbox");
  chatbox.style.display = "none";
  let ctx = canvas.getContext("2d");
  let mainMenu = document.getElementById("mainMenu");
  let backgroundImg = document.getElementById("backgroundImg");
  let ageBar = document.getElementById("ageBar");
  let ageLevelBar = document.getElementById("ageLevelBar");
  let ageCounter = document.getElementById("ageCounter");
  let enterGame = document.getElementById("enterGame");
  for (let i = 0; i < 11; i++) {
    document.getElementById("h-item-" + i)
    .style.display = "none";
    document.getElementById("h-item-" + i)
    .addEventListener("click", (function (e) {
      if (e.isTrusted) {
        send(["s", [inventory[i + 1]]])
      }
    }));
    document.getElementById("h-item-" + i)
    .addEventListener("mouseover", (function (e) {
      if (e.isTrusted) {
        itemDetailsContainer.style.display = "block";
        document.getElementById("itemNameDetails")
        .innerHTML = Weapons[i].name;
        document.getElementById("itemDetails")
        .innerHTML = Weapons[i].info;
        document.getElementById("Stone")
        .innerHTML = Weapons[i].stone;
        document.getElementById("Wood")
        .innerHTML = Weapons[i].wood;
        document.getElementById("Food")
        .innerHTML = Weapons[i].food;
        document.getElementById("stoneReqDisplay")
        .style.display = Weapons[i].stone === 0 ? "none": "block";
        document.getElementById("woodReqDisplay")
        .style.display = Weapons[i].wood === 0 ? "none": "block";
        document.getElementById("foodReqDisplay")
        .style.display = Weapons[i].food === 0 ? "none": "block"
      }
    }));
    document.getElementById("h-item-" + i)
    .addEventListener("mouseout", (function (e) {
      if (e.isTrusted) {
        itemDetailsContainer.style.display = "none"
      }
    }))
  }
  let teamDiv = document.getElementById("teamBtn");
  let teamToggle = document.getElementById("toggleTeam");
  teamDiv.onclick = function (e) {
    if (teamToggle.style.display === "none") {
      teamToggle.style.display = "inline-block";
      shopToggle.style.display = "none"
    } else if (teamToggle.style.display === "inline-block") {
      teamToggle.style.display = "none";
      teamToggle.style.zIndex = "9";
      shopToggle.style.display = "none"
    } else {
      teamToggle.style.display = "inline-block";
      shopToggle.style.display = "none"
    }
  };
  let teams = document.getElementById("createClanSection");
  let teamsInput = document.getElementById("clanInput");
  let teamsSection = document.getElementById("teamsSection");
  let members = document.getElementById("viewClanChatSection");
  let membersSection = document.getElementById("membersSection");
  let leaveClanSection = document.getElementById("leaveClanSection");
  members.style.display = "none";
  leaveClanSection.style.display = "none";
  leaveClanSection.onclick = function (e) {
    leaveClanSection.style.display = "none";
    members.style.display = "none";
    membersSection.style.display = "none";
    teams.style.display = "inline-block";
    teamsInput.style.display = "inline-block";
    teamsSection.style.display = "inline-block"
  };
  let shopDiv = document.getElementById("shopBtn");
  let shopToggle = document.getElementById("toggleShop");
  shopDiv.onclick = function (e) {
    if (shopToggle.style.display === "none") {
      shopToggle.style.display = "inline-block";
      teamToggle.style.display = "none"
    } else if (shopToggle.style.display === "inline-block") {
      shopToggle.style.display = "none";
      shopToggle.style.zIndex = "9";
      teamToggle.style.display = "none"
    } else {
      shopToggle.style.display = "inline-block";
      teamToggle.style.display = "none"
    }
  };
  let items = document.getElementById("itemsSection");
  let powerups = document.getElementById("powerupsSection");
  let itemsShop = document.getElementById("itemsShop");
  let powerupsShop = document.getElementById("powerupsShop");
  items.onclick = function (e) {
    if (itemsShop.style.display === "none") {
      itemsShop.style.display = "inline-block";
      powerupsShop.style.display = "none"
    } else {
      itemsShop.style.display = "inline-block";
      powerupsShop.style.display = "none"
    }
  };
  powerups.onclick = function (e) {
    if (powerupsShop.style.display === "none") {
      powerupsShop.style.display = "inline-block";
      itemsShop.style.display = "none"
    } else {
      powerupsShop.style.display = "inline-block";
      itemsShop.style.display = "none"
    }
  };
  let chatBtn = document.getElementById("chatBtn");
  chatBtn.onclick = function (e) {
    if (chatbox.style.display === "none") {
      chatbox.style.display = "block";
      chatbox.focus()
    } else {
      chatbox.style.display = "none";
      if (chatbox.value) {
        send(["ch", [chatbox.value]]);
        chatbox.value = ""
      }
    }
  };
  var riverBubbles = [];
  let players = [];
  let myPlayer = {};
  var aim = 0;
  var lastMove = null;
  var move = null;
  var playerSize = 30;
  var lastping = 0;
  var ping = 999;
  var info = "null";
  var mouseX = 0;
  var mouseY = 0;
  var treesCache = [];
  var objCache = [];
  var animalsCache = [];
  var leaderboard = [];
  var clans = [];
  var clansMem = [];
  var mapSize = 1e4;
  var desertHeight = 1e3;
  var riverHeight = 1e3;
  var beachHeight = 1e3;
  var snowHeight = 6e3;
  var maxScreenWidth = 1920;
  var maxScreenHeight = 1080;
  var texts = [];
  var accs = [{
    id: 0,
    src: "",
    img: new Image,
    xOffset: -40,
    yOffset: -40,
    scale: 80
  },
    {
      id: 1,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/wings_1?v=1661534786091",
      img: new Image,
      xOffset: -75,
      yOffset: -50,
      scale: 100
    },
    {
      id: 2,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/wings_2?v=1661538178387",
      img: new Image,
      xOffset: -100,
      yOffset: -70,
      scale: 140
    }];
  var hats = [{
    id: 0,
    src: "",
    img: new Image,
    xOffset: -40,
    yOffset: -40,
    scale: 80
  },
    {
      id: 1,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_1?v=1660911224026",
      img: new Image,
      xOffset: -40,
      yOffset: -40,
      scale: 80
    },
    {
      id: 2,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_2?v=1661020109681",
      img: new Image,
      xOffset: -40,
      yOffset: -40,
      scale: 80
    },
    {
      id: 3,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_3?v=1661021555445",
      img: new Image,
      xOffset: -40,
      yOffset: -40,
      scale: 80
    },
    {
      id: 4,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_4?v=1661059006830",
      img: new Image,
      xOffset: -40,
      yOffset: -40,
      scale: 80
    },
    {
      id: 5,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_40.png?v=1661061791387",
      img: new Image,
      xOffset: -40,
      yOffset: -40,
      scale: 80
    },
    {
      id: 6,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hat_11.png?v=1661095515533",
      img: new Image,
      xOffset: -40,
      yOffset: -40,
      scale: 80
    },
    {
      id: 7,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/xjorgepet.png?v=1661560063042",
      img: new Image,
      xOffset: -40,
      yOffset: -40,
      scale: 80
    },
    {
      id: 8,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/cb%20hat.png?v=1662612419428",
      img: new Image,
      xOffset: -40,
      yOffset: -40,
      scale: 80
    }];
  var skins = [{
    id: 0,
    src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Skin2.png?v=99999999999999",
    img: new Image,
    xOffset: -35,
    yOffset: -35,
    scale: 70
  },
    {
      id: 1,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Skin1.png?v=99999999999999",
      img: new Image,
      xOffset: -35,
      yOffset: -35,
      scale: 70
    },
    {
      id: 2,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Skin4.png?v=99999999999999",
      img: new Image,
      xOffset: -35,
      yOffset: -35,
      scale: 70
    },
    {
      id: 3,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Skin3.png?v=99999999999999",
      img: new Image,
      xOffset: -35,
      yOffset: -35,
      scale: 70
    },
    {
      id: 4,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Skin5.png?v=99999999999999",
      img: new Image,
      xOffset: -35,
      yOffset: -35,
      scale: 70
    },
    {
      id: 5,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Skin6.png?v=99999999999999",
      img: new Image,
      xOffset: -35,
      yOffset: -35,
      scale: 70
    },
    {
      id: 6,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Skin7.png?v=99999999999999",
      img: new Image,
      xOffset: -35,
      yOffset: -35,
      scale: 70
    },
    {
      id: 7,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Skin8.png?v=99999999999999",
      img: new Image,
      xOffset: -35,
      yOffset: -35,
      scale: 70
    }];
  var trees = [{
    name: "wood",
    id: 0,
    src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Tree.png?v=1657488613978",
    img: new Image,
    xOffset: -158,
    yOffset: -160,
    scale: 350
  },
    {
      name: "wood2",
      id: 1,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/SnowTree.png?v=1657490800792",
      img: new Image,
      xOffset: -158,
      yOffset: -160,
      scale: 350
    },
    {
      name: "food",
      id: 2,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Bush.png?v=1657678351614",
      img: new Image,
      xOffset: -60,
      yOffset: -63,
      scale: 120
    },
    {
      name: "food2",
      id: 3,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/SnowBush.png?v=1657732632884",
      img: new Image,
      xOffset: -60,
      yOffset: -63,
      scale: 120
    },
    {
      name: "stone",
      id: 4,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Stone.png?v=1658803298574",
      img: new Image,
      xOffset: -100,
      yOffset: -100,
      scale: 190
    },
    {
      name: "gold",
      id: 5,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Gold.png?v=1658847400405",
      img: new Image,
      xOffset: -68,
      yOffset: -70,
      scale: 150
    },
    {
      name: "ruby",
      id: 6,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/RUBY.png?v=1658978333539",
      img: new Image,
      xOffset: -158,
      yOffset: -160,
      scale: 350
    },
    {
      name: "Cacti",
      id: 7,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Cacti.png?v=1661712014452",
      img: new Image,
      xOffset: -43,
      yOffset: -43,
      scale: 100
    }];
  var weapons = [{
    id: 0,
    name: "Tool Hammer",
    src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Hammer_Tool.png?v=1661566949950",
    scale: 110,
    img: new Image,
    xOffset: -25,
    yOffset: -35,
    angleOffset: 0
  },
    {
      id: 1,
      name: "Orange",
      food: true,
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Orange.png?v=1657474721358",
      scale: 50,
      img: new Image,
      xOffset: 5,
      yOffset: 5,
      angleOffset: -toRad(40)
    },
    {
      id: 2,
      name: "Spike",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Spike.png?v=1660858039547",
      scale: 110,
      img: new Image,
      xOffset: 0,
      yOffset: -55,
      angleOffset: 0
    },
    {
      id: 3,
      name: "Wall",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/WoodWall.png?v=1660858007447",
      scale: 110,
      img: new Image,
      xOffset: 0,
      yOffset: -55,
      angleOffset: 0
    },
    {
      id: 4,
      name: "Booster",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/BoostPad.png?v=1660927567508",
      scale: 80,
      img: new Image,
      xOffset: 20,
      yOffset: -40,
      angleOffset: 0
    },
    {
      id: 5,
      name: "Trap",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/PitTrap.png?v=1660869010254",
      scale: 80,
      img: new Image,
      xOffset: 20,
      yOffset: -40,
      angleOffset: 0
    },
    {
      id: 6,
      name: "TeleportPad",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/TeleportPad.gif?v=1661022375708",
      scale: 80,
      img: new Image,
      xOffset: 20,
      yOffset: -40,
      angleOffset: 0
    },
    {
      id: 7,
      name: "Short Sword",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Short_Sword_2%5B1%5D.png?v=1661730319761",
      scale: 145,
      img: new Image,
      xOffset: -47,
      yOffset: -35,
      clicked: false,
      angleOffset: 0
    }];
  var objects = [{
    id: 2,
    name: "Spike",
    src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Spike.png?v=1660858039547",
    scale: 110,
    img: new Image,
    xOffset: -50,
    yOffset: -50
  },
    {
      id: 3,
      name: "Wall",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/WoodWall.png?v=1660858007447",
      scale: 110,
      img: new Image,
      xOffset: -50,
      yOffset: -50
    },
    {
      id: 4,
      name: "Booster",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/BoostPad.png?v=1660927567508",
      scale: 80,
      img: new Image,
      dir: 60,
      xOffset: -50,
      yOffset: -50
    },
    {
      id: 5,
      name: "Trap",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/PitTrap70%25Opacity.png?v=1660928648706",
      scale: 80,
      img: new Image,
      xOffset: -50,
      yOffset: -50
    },
    {
      id: 6,
      name: "TeleportPad",
      src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/TeleportPad.gif?v=1661022375708",
      scale: 80,
      img: new Image,
      xOffset: -50,
      yOffset: -50
    }];
  var animals = [{
    id: 0,
    name: "Cow",
    src: "https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Cow.png?v=1661107702198",
    scale: 150,
    img: new Image,
    xOffset: 0,
    yOffset: 0
  }];
  weapons.forEach((w => {
    w.img.src = w.src
  }));
  objects.forEach((w => {
    w.img.src = w.src
  }));
  animals.forEach((w => {
    w.img.src = w.src
  }));
  trees.forEach((w => {
    w.img.src = w.src
  }));
  skins.forEach((w => {
    w.img.src = w.src
  }));
  hats.forEach((w => {
    w.img.src = w.src
  }));
  accs.forEach((w => {
    w.img.src = w.src
  }));
  document.getElementById("menuCardHolder")
  .style.display = "none";
  ageBar.style.display = "none";
  document.getElementById("loadingText")
  .style.display = "block";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  Array.prototype.removeItem = function (value) {
    var index = this.indexOf(value);
    if (index > -1) {
      this.splice(index, 1)
    }
    return this
  };

  function relative(pos) {
    var canvasX = canvas.width / 2 + pos.x - myPlayer.x;
    var canvasY = canvas.height / 2 + pos.y - myPlayer.y;
    return {
      x: canvasX,
      y: canvasY
    }
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
  }

  function send(sender) {
    if (ws.readyState == 1) {
      ws.send(new Uint8Array(Array.from(window.msgpack.encode(sender))))
    }
  }

  function fillRectCentered(x, y, width, height, style = "rgba(0, 0, 0, 0.3)") {
    var last = ctx.fillStyle;
    ctx.fillStyle = style;
    ctx.fillRect(x - width / 2, y, width, height);
    ctx.fillStyle = last
  }

  function drawText(x, y, size, text, color = "#000") {
    var lastColor = ctx.fillStyle;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.filStyle = lastColor
  }

  function drawCircle(x, y, size, color) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    return {
      fill() {
        ctx.fill()
      }
    }
  }

  function sendMove() {
    if (document.activeElement.id.toLowerCase() !== "chatbox") {
      send(["33", [move]])
    } else {
      send(["33", [null]])
    }
  }

  function drawPlayerText(x, y, player) {
    var roleName = player.admin ? "</DEV> ": player.mod ? "</MOD> ": player.artist ? "</Artist> ": " ";
    var roleColor = player.admin ? "#30d1a1": player.mod ? "#FF0000": player.artist ? "#F99843": "#fff";
    var w = roleName + (player.clanName ? "[" + player.clanName + "] ": "") + (player.name || "");
    var lastColor = ctx.fillStyle;
    if ("" != w) {
      ctx.textAlign = "center";
      ctx.font = "24px Hammersmith One";
      ctx.lineJoin = "round";
      ctx.lineWidth = 10;
      ctx.fillStyle = roleColor;
      ctx.strokeStyle = "#000";
      ctx.strokeText(w, x - 7, y - 50);
      ctx.fillText(w, x - 7, y - 50)
    }
    crown.src = "https://www.freeiconspng.com/uploads/queen-crown-icon-5.png";
    player.isLeader && ctx.drawImage(crown, x - 80, y - 100, 40, 40);
    if (player.chat) {
      ctx.textAlign = "center";
      drawText(x, y - 88, 70, player.chat, "#ffffff")
    }
    fillRectCentered(x, y + 60, 100, 10, "#000");
    var lastStyle = ctx.fillStyle;
    ctx.fillStyle = player.sid == myPlayer.sid ? "#11da07": "#da4607";
    ctx.fillRect(x - 48, y + 61, 96 * (player.health / 100), 8);
    ctx.fillStyle = lastStyle
  }

  function drawObject(x, y, rot, id) {
    var ob = objects.find((x => x.id == id));
    var img = ob.img;
    if (img) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.drawImage(img, ob.xOffset, ob.yOffset, ob.scale, ob.scale);
      ctx.restore()
    }
  }
  
  function drawPlayer(x, y, player) {
    try {
    if (player.sid != myPlayer.sid) {
      drawWeapon(player, x, y, player.aimdir, weapons[0], player.sid)
    } else {
      drawWeapon(player, x, y, Math.atan2(mouseY - canvas.height / 2, mouseX - canvas.width / 2), weapons[0], player.sid)
    }
    } catch (e) {
      return;
    }
  }

  function drawWeapon(player, x, y, rot, wep, sid) {
    wep = weapons.find((x => x.id == player.weapon));
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot - toRad(swingAngle[sid]) + (wep.angleOffset || 0));
    ctx.drawImage(wep.img, wep.xOffset, wep.yOffset, wep.scale, wep.scale);
    ctx.restore();
    var acc = accs.find((x => x.id == player.acc));
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot - toRad(swingAngle[sid]) + 0);
    ctx.drawImage(acc.img, acc.xOffset, acc.yOffset, acc.scale, acc.scale);
    ctx.restore();
    var skin = skins.find((x => x.id == player.skin));
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot - toRad(swingAngle[sid]) + 0);
    ctx.drawImage(skin.img, skin.xOffset, skin.yOffset, skin.scale, skin.scale);
    ctx.restore();
    var hat = hats.find((x => x.id == player.hat));
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot - toRad(swingAngle[sid]) + 0);
    ctx.drawImage(hat.img, hat.xOffset, hat.yOffset, hat.scale, hat.scale);
    ctx.restore()
  }

  function drawAnimal(x, y, rot, id) {
    var ob = animals.find((x => x.id == id));
    var img = ob.img;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.drawImage(img, ob.xOffset, ob.yOffset, ob.scale, ob.scale);
    ctx.restore()
  }

  function drawTree(x, y, rot, id) {
    var tree = trees.find((x => x.id == id));
    if (tree) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(0);
      ctx.drawImage(tree.img, tree.xOffset, tree.yOffset, tree.scale, tree.scale);
      ctx.restore()
    }
  }


  function update() {
    var moveX = 0;
    var moveY = 0;
    moveY += moveUp;
    moveY -= moveDown;
    moveX -= moveLeft;
    moveX += moveRight;
    if (myPlayer.health < 100) {
      send(["ud"])
    }
    move = Math.atan2(moveY, moveX);
    moveX == 0 && moveY == 0 && (move = null);
    if (move != lastMove) {
      sendMove()
    }
    if (!nausea) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1
    } else {
      ctx.globalAlpha = .4
    }
    if (!nausea) {
      var prevStyle = ctx.fillStyle;
      ctx.fillStyle = "#768F5A";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = prevStyle
    }
    var lastStyle1 = ctx.fillStyle;
    ctx.fillStyle = "#d9a652";
    ctx.fillRect(0, mapSize - myPlayer.y + canvas.height / 2 - desertHeight, canvas.width, desertHeight + 550);
    ctx.fillStyle = lastStyle1;
    var lastStyle3 = ctx.fillStyle;
    ctx.fillStyle = "#e6e6e6";
    ctx.fillRect(0, mapSize - myPlayer.y + canvas.height / 2 - snowHeight - 3e3 - 1500, canvas.width, 1500);
    ctx.fillStyle = lastStyle3;
    var lastStyle3 = ctx.fillStyle;
    ctx.fillStyle = "#8F815A";
    ctx.fillRect(0, mapSize - myPlayer.y + canvas.height / 2 - desertHeight - riverHeight - beachHeight, canvas.width, beachHeight);
    ctx.fillStyle = lastStyle3;
    var lastStyle2 = ctx.fillStyle;
    ctx.fillStyle = "#5E74A7";
    ctx.fillRect(0, mapSize - myPlayer.y + canvas.height / 2 - desertHeight - riverHeight - waveSize / 2, canvas.width, riverHeight + waveSize);
    ctx.fillStyle = lastStyle2;
    var riverPointX = 0;
    var riverPointY = mapSize - desertHeight - riverHeight;
    riverBubbles.forEach((bubble => {
      var rel = relative({
        x: riverPointX + bubble.x,
        y: riverPointY + bubble.y
      });
      ctx.beginPath();
      var lastGlobalAlpha = ctx.globalAlpha;
      ctx.globalAlpha = bubble.opacity;
      ctx.arc(rel.x, rel.y, bubble.size + bubble.grow, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = lastGlobalAlpha
    }));
    ctx.strokeStyle = "rgb(0, 0, 0, 0.1)";
    for (var x = canvas.width / 2 - myPlayer.x - 1e3; x < mapSize; x += 50) {
      ctx.moveTo(x, 0);
      ctx.lineWidth = "1.5";
      ctx.lineTo(x, mapSize)
    }
    for (var y = canvas.height / 2 - myPlayer.y - 1e3; y < mapSize; y += 50) {
      ctx.moveTo(0, y);
      ctx.lineWidth = "1.5";
      ctx.lineTo(mapSize, y)
    }
    ctx.stroke();
    ctx.fillStyle = "#000";
    let color;
    window.players = players;
    players.forEach((player => {
      window.playerDefine = player;
      if (player.acc !== 2) {
        if (player.sid != myPlayer.sid) {
          var rel = relative({
            x: player.x,
            y: player.y
          });
          var x = rel.x;
          var y = rel.y;
          drawPlayer(x, y, player);
          drawPlayerText(x, y, player)
        } else {
          drawPlayer(canvas.width / 2, canvas.height / 2, player);
          drawPlayerText(canvas.width / 2, canvas.height / 2, player)
        }
      }
    }));
    lastMove = move;
    animalsCache.forEach((animal => {
      var rel = relative({
        x: animal.x,
        y: animal.y
      });
      drawAnimal(rel.x, rel.y, animal.dir, animal.id)
    }));
    objCache.forEach((object => {
      var rel = relative({
        x: object.x,
        y: object.y
      });
      drawObject(rel.x + object.xWiggle, rel.y + object.yWiggle, object.dir, object.id)
    }));
    treesCache.forEach((object => {
      var rel = relative({
        x: object.x,
        y: object.y
      });
      drawTree(rel.x + object.xWiggle - 10, rel.y + object.yWiggle - 10, object.dir, object.id)
    }));
    players.forEach((player => {
      if (player.sid != myPlayer.sid) {
        var rel = relative({
          x: player.x,
          y: player.y
        });
        var x = rel.x;
        var y = rel.y;
        if (player.acc === 2) {
          drawPlayer(x, y, player);
          drawPlayerText(x, y, player)
        }
        drawPlayerText(x, y, player)
      } else {
        if (player.acc === 2) {
          drawPlayer(canvas.width / 2, canvas.height / 2, player);
          drawPlayerText(canvas.width / 2, canvas.height / 2, player)
        }
        drawPlayerText(canvas.width / 2, canvas.height / 2, player);
        if (player.health < 100) {
          ctx.fillStyle = "#8c0404";
          ctx.strokeStyle = "#000";
          ctx.textBaseline = "middle";
          ctx.textAlign = "center";
          ctx.lineJoin = "round";
          ctx.strokeText(`${player.health-100}`, canvas.width / 2 + 70, canvas.height / 2);
          ctx.fillText(`${player.health-100}`, canvas.width / 2 + 70, canvas.height / 2)
        }
      }
    }));
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2 - myPlayer.y);
    ctx.fillRect(0, 0, canvas.width / 2 - myPlayer.x, canvas.height);
    ctx.fillRect(mapSize - myPlayer.x + canvas.width / 2, 0, canvas.width, canvas.height);
    ctx.fillRect(0, mapSize - myPlayer.y + canvas.height / 2, canvas.width, canvas.height);
    if (myPlayer.admin) {
      info = `${ping}ms`;
      drawText(100, 50, 30, info)
    }
    var lastStyle = ctx.fillStyle;
    var lastFillStyle = ctx.fillStyle;
    ctx.fillStyle = "#fff";

    function gold(num) {
      return m(leaderboard[num].gold, 1)
    }

    function m(num, s) {
      var f = [{
        value: 1,
        symbol: ""
      },
        {
          value: 1e3,
          symbol: "k"
        },
        {
          value: 1e6,
          symbol: "M"
        },
        {
          value: 1e9,
          symbol: "B"
        }];
      var y = /\.0+$|(\.[0-9]*[1-9])0+$/;
      var i;
      for (i = f.length - 1; i > 0; i--) {
        if (num >= f[i].value) {
          break
        }
      }
      return (num / f[i].value)
      .toFixed(s)
      .replace(y, "$1") + f[i].symbol
    }
    if (leaderboard[0]) {
      document.getElementById("players")
      .innerHTML = "<div style='float: left;'>" + leaderboard[0].name + [myPlayer.admin || myPlayer.mod ? " : " + leaderboard[0].sid: ""] + "</div><div style='float: right; color: gold;'>" + gold(0) + "</div>" + "<br />"
    }
    if (leaderboard[1]) {
      document.getElementById("players")
      .innerHTML += "<div style='float: left;'>" + leaderboard[1].name + [myPlayer.admin || myPlayer.mod ? " : " + leaderboard[1].sid: ""] + "</div><div style='float: right; color: gold;'>" + gold(1) + "</div>" + "<br />"
    }
    if (leaderboard[2]) {
      document.getElementById("players")
      .innerHTML += "<div style='float: left;'>" + leaderboard[2].name + [myPlayer.admin || myPlayer.mod ? " : " + leaderboard[2].sid: ""] + "</div><div style='float: right; color: gold;'>" + gold(2) + "</div>" + "<br />"
    }
    if (leaderboard[3]) {
      document.getElementById("players")
      .innerHTML += "<div style='float: left;'>" + leaderboard[3].name + [myPlayer.admin || myPlayer.mod ? " : " + leaderboard[3].sid: ""] + "</div><div style='float: right; color: gold;'>" + gold(3) + "</div>" + "<br />"
    }
    if (leaderboard[4]) {
      document.getElementById("players")
      .innerHTML += "<div style='float: left;'>" + leaderboard[4].name + [myPlayer.admin || myPlayer.mod ? " : " + leaderboard[4].sid: ""] + "</div><div style='float: right; color: gold;'>" + gold(4) + "</div>" + "<br />"
    }
    if (leaderboard[5]) {
      let i = 0;
      leaderboard.forEach((element => {
        i = i + 1
      }));
      i = i - 5;
      document.getElementById("players")
      .innerHTML += "<div style='float: left;'>" + "And " + ~~i + " more..." + "</div><br />"
    }
    var minimapOffset = 20;
    var minimapSize = 200;
    var last2Style = ctx.fillStyle;
    ctx.fillStyle = "#000";
    var xOnMinimap = myPlayer.x * (minimapSize / mapSize);
    var yOnMinimap = myPlayer.y * (minimapSize / mapSize);
    ctx.beginPath();
    ctx.arc(minimapOffset + xOnMinimap, +canvas.height - minimapOffset - minimapSize + yOnMinimap, 3, 0, 2 * Math.PI);
    ctx.fill();
    if (SpawnedOnce == 1) {
      ctx.fillStyle = "#ff0000";
      ctx.beginPath();
      ctx.arc(minimapOffset + deathLocX, +canvas.height - minimapOffset - minimapSize + deathLocY, 3, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = last2Style
    }
    if (Base == 1) {
      ctx.fillStyle = "#00ffff";
      ctx.beginPath();
      ctx.arc(minimapOffset + baseLocX, +canvas.height - minimapOffset - minimapSize + baseLocY, 3, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = last2Style
    }
    var resourcesMinimapOffset = 30;
    var resourcesOffset = 45;
    var resourcesWidth = 100;
    var resourcesHeight = 40;
    if (myPlayer.resources) {
      document.getElementById("ruby")
      .innerHTML = myPlayer.resources[trees[6].name].toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("gold")
      .innerHTML = myPlayer.resources[trees[5].name].toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("stone")
      .innerHTML = myPlayer.resources[trees[4].name].toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("bush")
      .innerHTML = myPlayer.resources[trees[2].name].toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("tree")
      .innerHTML = myPlayer.resources[trees[0].name].toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    if (ageLevelBar.style.width === "100%") {
      ageItemSelectCounter.innerHTML = `(${myPlayer.age})`;
      ageLevelBar.style.width = "0%";
      myPlayer.xp = 0
    } else {
      ageLevelBar.style.width = myPlayer.xp + "%"
    }
    ageCounter.innerHTML = myPlayer.age;

    function upgradeMenu() {
      ageLevelItems.style.display = "block";
      document.getElementById("age-item-0")
      .addEventListener("click", (function (e) {
        send(["Ug", [{
          wep: 7
        }]]);
        ageLevelItems.style.display = "none";
        document.getElementById("h-item-0")
        .style.backgroundImage = "url('https://cdn.glitch.global/069d62dd-5ac4-4928-9200-7250f0cc75c3/Short_Sword_2%5B1%5D.png?v=1661730319761')"
      }))
    }
    if (myPlayer.age === 2 && !run) {
      upgradeMenu();
      run = true
    }
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
  const createClan = document.getElementById("createClanSection");
  const leaveClan = document.getElementById("leaveClanSection");
  let clanInput = document.getElementById("clanInput");
  createClan.addEventListener("click", (() => {
    send(["createClan", [clanInput.value]]);
    clanInput.value = ""
  }));
  leaveClan.addEventListener("click", (() => {
    send(["leaveClan", [null]])
  }));

  function connect() {
    ws = new WebSocket("wss://kvb63w-8000.preview.csb.app/websocket");
    ws.addEventListener("open", (function () {
      document.getElementById("menuCardHolder")
      .style.display = "block";
      document.getElementById("loadingText")
      .style.display = "none";
      setInterval((() => {
        send(["p", []]);
        lastping = Date.now()
      }), 500);
      setInterval((() => {
        send(["2", [aim]])
      }), 50);
      ws.addEventListener("message", (async function (m) {
        let buffer = await m.data.arrayBuffer();
        let msg = window.msgpack.decode(new Uint8Array(buffer));
        switch (msg[0]) {
          case "1":
            for (let i = 0; i < 11; i++) {
              document.getElementById("h-item-" + i)
              .style.display = "none"
            }
            myPlayer.sid = msg[1][0];
            break;
          case "w":
            inventory = msg[1][0];
            msg[1][0].forEach((w => {
              if (w != 7) {
                document.getElementById("h-item-" + w)
                .style.display = "inline-block"
              }
            }));
            case "33":
              players = msg[1][0];
              players.forEach((p => {
                if (!swingAngle[p.sid]) {
                  swingAngle[p.sid] = 0
                }
                if (p.sid == myPlayer.sid) {
                  myPlayer = p;
                  window.me = myPlayer
                }
              }));
              break;
            case "p":
              ping = Date.now() - lastping;
              break;
            case "7":
              var sid = msg[1][0];
              var angle = 120;
              var multi = 1;
              var add = 1;
              for (let i = 0; i < angle; i++) {
                setTimeout((() => {
                  swingAngle[sid] += add
                }), i * multi)
              }
              setTimeout((() => {
                for (let i = 0; i < angle; i++) {
                  setTimeout((() => {
                    swingAngle[sid] -= add
                  }), i * multi)
                }
              }), angle * multi + 40);
              break;
            case "d":
              mainMenu.style.display = "block";
              break;
            case "o":
              treesCache = msg[1][0];
              break;
            case "b":
              leaderboard = msg[1][0];
              break;
            case "clanz":
              clans = msg[1][0];
              break;
            case "clanMem":
              clansMem = msg[1][0];
              break;
            case "clanTrue":
              teams.style.display = "none";
              teamsInput.style.display = "none";
              teamsSection.style.display = "none";
              members.style.display = "inline-block";
              membersSection.style.display = "inline-block";
              leaveClanSection.style.display = "inline-block";
              break;
            case "x":
              objCache = msg[1][0];
              break;
            case "a":
              animalsCache = msg[1][0];
              break
        }
      }))
    }));
    ws.addEventListener("close", (function (v) {
      kick(v.reason || "Disconnected.")
    }))
  }
  canvas.addEventListener("mousedown", (function (e) {
    if (e.isTrusted && !autohitting) {
      attacking = true;
      send(["c", [1]])
    }
  }));
  canvas.addEventListener("mouseup", (function (e) {
    if (e.isTrusted && !autohitting) {
      attacking = false;
      send(["c", [0]])
    }
  }));
  document.addEventListener("keydown", (function (e) {
    if (e.keyCode == 32 && document.activeElement.id.toLowerCase() !== "chatbox") {
      if (autohitting == true) {
        AutoHit = false;
        autohittingwason = true
      }
      e.isTrusted && (!0, send(["c", [1]]))
    }
  }));
  document.addEventListener("keyup", (function (e) {
    if (e.keyCode == 32 && document.activeElement.id.toLowerCase() !== "chatbox") {
      if (autohittingwason == true) return autohittingwason = false,
      AutoHit = true;
      e.isTrusted && (!1, send(["c", [0]]))
    }
  }));
  document.addEventListener("keydown", (function (e) {
    if (e.isTrusted) {
      switch (e.code) {
        case keycodes.AUTO_HIT:
          if (chatbox.style.display === "none") {
            AutoHit = !AutoHit;
            if (AutoHit) {
              autohitting = true;
              e.isTrusted && (!0, send(["c", [1]]))
            } else if (!AutoHit) {
              autohitting = false;
              e.isTrusted && (!1, send(["c", [0]]))
            }
          }
          break;
        case keycodes.LOCK_DIR:
          if (chatbox.style.display === "none") {
            lockDir = !lockDir
          }
          break;
        case keycodes.QUICK_FOOD:
          var sn;
          inventory.forEach((item => {
            var itm = weapons.find((x => x.id == item));
            if (itm && itm.food) {
              sn = itm.id;
              if (myPlayer.weapon == sn) {
                send(["s", [inventory[1]]])
              } else {
                send(["s", [sn + 1]])
              }
              return
            }
        }));
        break;
        case keycodes.HOTBAR_1:
          if (chatbox.style.display === "none") {
            send(["s", [inventory[1]]])
          }
          break;
        case keycodes.HOTBAR_2:
          if (chatbox.style.display === "none") {
            send(["s", [inventory[2]]])
          }
          break;
        case keycodes.HOTBAR_3:
          if (chatbox.style.display === "none") {
            send(["s", [inventory[3]]])
          }
          break;
        case keycodes.HOTBAR_4:
          if (chatbox.style.display === "none") {
            send(["s", [inventory[4]]])
          }
          break;
        case keycodes.HOTBAR_5:
          if (chatbox.style.display === "none") {
            send(["s", [inventory[5]]])
          }
          break;
        case keycodes.HOTBAR_6:
          if (chatbox.style.display === "none") {
            send(["s", [inventory[6]]])
          }
          break;
        case keycodes.HOTBAR_7:
          if (chatbox.style.display === "none") {
            send(["s", [inventory[7]]])
          }
          break;
        case keycodes.HOTBAR_8:
          if (chatbox.style.display === "none") {
            send(["s", [inventory[8]]])
          }
          break;
        case keycodes.HOTBAR_9:
          if (chatbox.style.display === "none") {
            send(["s", [inventory[9]]])
          }
          break;
        case 82:
          break;
        case keycodes.MOVE_UP:
          moveUp = 1;
          break;
        case keycodes.MOVE_DOWN:
          moveDown = 1;
          break;
        case keycodes.MOVE_LEFT:
          moveLeft = 1;
          break;
        case keycodes.MOVE_RIGHT:
          moveRight = 1;
          break;
        case keycodes.MOVE_UP2:
          moveUp = 1;
          break;
        case keycodes.MOVE_DOWN2:
          moveDown = 1;
          break;
        case keycodes.MOVE_LEFT2:
          moveLeft = 1;
          break;
        case keycodes.MOVE_RIGHT2:
          moveRight = 1;
          break;
        case keycodes.CHAT:
          if (chatbox.style.display === "none") {
            chatbox.style.display = "block";
            chatbox.focus()
          } else {
            chatbox.style.display = "none";
            if (chatbox.value) {
              send(["ch", [chatbox.value]]);
              chatbox.value = ""
            }
          }
          break;
        case keycodes.BASE:
          if (chatbox.style.display === "none") {
            baseLocX = myPlayer.x * (200 / mapSize);
            baseLocY = myPlayer.y * (200 / mapSize);
            Base = 1
          }
          break
      }
    }
  }));
  document.addEventListener("keyup", (function (e) {
    if (e.isTrusted) {
      switch (e.code) {
        case keycodes.MOVE_UP:
          moveUp = 0;
          break;
        case keycodes.MOVE_DOWN:
          moveDown = 0;
          break;
        case keycodes.MOVE_LEFT:
          moveLeft = 0;
          break;
        case keycodes.MOVE_RIGHT:
          moveRight = 0;
          break;
        case keycodes.MOVE_UP2:
          moveUp = 0;
          break;
        case keycodes.MOVE_DOWN2:
          moveDown = 0;
          break;
        case keycodes.MOVE_LEFT2:
          moveLeft = 0;
          break;
        case keycodes.MOVE_RIGHT2:
          moveRight = 0;
          break
      }
    }
  }));
  window.addEventListener("resize", (function (e) {
    if (e.isTrusted) {
      resizeCanvas()
    }
  }));
  canvas.addEventListener("mousemove", (function (e) {
    if (e.isTrusted && !lockDir) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      aim = Math.atan2(e.clientY - canvas.height / 2, e.clientX - canvas.width / 2)
    }
  }));
  canvas.addEventListener("contextmenu", (function (e) {
    if (e.isTrusted) {
      e.preventDefault()
    }
  }));
  var SkinColor = localStorage.getItem("Skin") || 0;
  for (let i = 1; i < 9; i++) {
    document.getElementById("skin" + i)
    .addEventListener("click", (function (e) {
      for (let i = 1; i < 9; i++) {
        document.getElementById("skin" + i)
        .style.borderRadius = "50%"
      }
      document.getElementById("skin" + i)
      .style.borderRadius = "25%";
      localStorage.setItem("Skin", i - 1)
    }))
  }
  window.selectSkinColor = function (e) {
    SkinColor = e
  };

  enterGame.addEventListener("click", (function (e) {
    send(["j", [{
      name: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
      skin: SkinColor
    }]]);
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=ef91cbdadca34acc993582ea15af4711`)
        .then((d => d.json()))
        .then((f => {
            const k1 = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (f.time_zone.name != k1) {
                send(["vx", ["Using VPN."]])
            }
        }))
        .catch((e => send(["vx", ["Server error."]])));
    fetch(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)
        .catch((e => {
            if (e.toString()
                .includes("TypeError: Failed to fetch")) {
                send(["vx", ["Using ad blocker."]])
            }
        }));
    if (SpawnedOnce == 1) {
    var minimapOffset = 20;
    var minimapSize = 200;
    deathLocX = myPlayer.x * (minimapSize / mapSize);
    deathLocY = myPlayer.y * (minimapSize / mapSize)
  }
  }));
  enterGame.addEventListener("click", (function (e) {
    if (e.isTrusted && ws && ws.readyState == 1) {
      mainMenu.style.display = "none";
      backgroundImg.style.display = "none";
      age = 1;
      ageBar.style.display = "inline-block";
      resourcesAndMap.style.display = "inline-block";
      leaderboardScores.style.display = "block";
      SpawnedOnce = 1;
      send(["j", [{
        name: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
        skin: SkinColor
      }]]);
      riverBubbles = [];
      for (let j = 0; j < 30; j++) {
        setTimeout((() => {
          riverBubbles.push({
            x: randomInt(0, canvas.width),
            y: randomInt(50, riverHeight - 50),
            size: randomInt(5, 10),
            grow: 0,
            opacity: 1
        })
        }), j * randomInt(200, 1500))
    }
    setInterval((() => {
      riverBubbles.forEach((bubble => {
        bubble.grow += randomInt(.8, 1.5);
        bubble.x += .5;
        bubble.opacity -= .02;
        if (bubble.opacity < .03) {
          bubble.opacity = 1;
          bubble.grow = 0;
          bubble.x = randomInt(0, mapSize);
          bubble.y = randomInt(50, riverHeight - 50)
        }
      }))
    }), 50);
  }
  }));
  connect();

  window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    send(["vx", [`Server error, please relaod.`]]);
    send(["ih", ['+ Error: ' + errorMsg + '\n + Script: `' + url + '`\n + Line: ' + lineNumber
    + '\n + Column: ' + column + '\n + StackTrace: ' +  errorObj]]);
  };

})();