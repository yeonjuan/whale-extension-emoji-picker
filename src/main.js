(function () {
  // utils
  const copyToClipboard = (content) => {
    const textField = document.createElement("textarea");
    textField.innerText = content;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  // constants

  const EMOJI_LIST = window.emojidata;

  // state
  const state = {
    _tab: 0,
    _tabsVisible: true,
    _emojis: EMOJI_LIST[0],
    getTab() {
      return this._tab;
    },
    setTab(value) {
      this._tab = value;
      this.setEmojis(EMOJI_LIST[this._tab]);
    },
    getEmojis() {
      return this._emojis;
    },
    setEmojis(emojis) {
      this._emojis = emojis;
    },
    hideTabs() {
      this._tabsVisible = false;
    },
    showTabs() {
      this._tabsVisible = true;
      this.setTab(this._tab);
    },
    isTabsVisible() {
      return this._tabsVisible;
    },
  };

  const flatten = EMOJI_LIST.reduce(function (a, b) {
    return a.concat(b);
  }, []);

  const fuse = new Fuse(flatten, {
    keys: ["n.en", "n.ko"],
    threshold: 0.6,
    shouldSort: true,
  });

  const ui = {
    top: document.getElementById("top"),
    tabs: document.getElementById("tabs"),
    emojiList: document.getElementById("emoji-list"),
    searchInput: document.getElementById("search"),
    init() {
      this.tabs.addEventListener("click", (event) => {
        const tab = parseInt(event.target.dataset.value);
        state.setTab(tab);
        render();
      });
      this.emojiList.addEventListener("click", (event) => {
        const emoji = event.target.dataset.value;
        if (!emoji) {
          return;
        }
        copyToClipboard(emoji);
        Toastify({
          text: "클립보드에 복사: " + emoji,
          duration: 1000,
          newWindow: true,
          close: false,
          gravity: "bottom", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#0366d6",
            color: "#fff",
            "border-radius": "16px",
            "text-align": "center",
            width: "fit-content",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      });
      this.searchInput.addEventListener(
        "input",
        debounce((event) => {
          if (event.target.value.length) {
            const result = fuse.search(event.target.value, { limit: 50 });
            state.hideTabs();
            state.setEmojis(result.map((r) => r.item));
          } else {
            state.showTabs();
          }
          render();
        }, 200),
      );
    },
  };

  function render() {
    if (state.isTabsVisible()) {
      ui.tabs.style.display = "grid";
    } else {
      ui.tabs.style.display = "none";
    }
    const rect = ui.top.getBoundingClientRect();
    const topHeight = rect ? rect.height : 240;
    document.getElementById("content").style.paddingTop = `${topHeight}px`;
    const selectedTabs = document.querySelectorAll(".selected");
    for (const selectedTab of selectedTabs) {
      selectedTab.classList.remove("selected");
    }
    const nextSelectedTabElement = document.querySelector(
      `#tabs button[data-value="${state.getTab()}"]`,
    );

    nextSelectedTabElement.classList.remove("unselected");
    nextSelectedTabElement.classList.add("selected");

    const itemsHTML = state
      .getEmojis()
      .map(
        (item) =>
          `<li><button data-value="${item.ch}">${item.ch}</button></li>`,
      )
      .join("");
    ui.emojiList.innerHTML = itemsHTML;
  }

  ui.init();
  render();
})();
