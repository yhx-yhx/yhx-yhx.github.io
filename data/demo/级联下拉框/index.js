(async () => {
  const doms = {
    selProvince: document.querySelector("#select1"),
    selCity: document.querySelector("#select2"),
    selArea: document.querySelector("#select3"),
  };

  // 获取数据
  async function getDatas() {
    return await fetch("/noteplus-dist/data/demo/级联下拉框/data.json")
      // return await fetch("https://study.duyiedu.com/api/citylist/")
      .then((res) => res.json())
      .then((res) => res.data);
  }

  let datas = await getDatas();

  function init() {
    // 初始化数据
    // 初始化省份 禁用 市县
    fillSelcet(doms.selProvince, datas);
    fillSelcet(doms.selCity, []);
    fillSelcet(doms.selArea, []);
    // 注册通用事件
    regCommonEvent(doms.selProvince);
    regCommonEvent(doms.selCity);
    regCommonEvent(doms.selArea);
    // 注册局部事件
    regProvinceEvent();
    regCityEvent();
  }

  init();

  /**
   * @description 填充数据
   * @param {HTMLDivElement}
   * @param {Array}
   */
  function fillSelcet(select, list) {
    select.querySelector(
      ".title span"
    ).innerText = `请选择${select.dataset.title}`;
    select.querySelector(".title").classList =
      list.length === 0 ? "disabled title" : "title";
    const selOption = select.querySelector(".option");
    selOption.innerHTML = list.map((item) => `<li>${item.label}</li>`).join("");
    select.list = list;
  }

  /**
   * @description 注册通用事件
   * @param {HTMLDivElement} select
   */
  function regCommonEvent(select) {
    select.addEventListener("click", () => {
      if (select.querySelector(".title").classList.contains("disabled")) {
        return;
      }
      select.querySelector(".option").classList.toggle("expand");
    });
    select.querySelector(".option").addEventListener("click", (e) => {
      if (e.target.tagName !== "LI") {
        return;
      }
      select.querySelector(".option li.active")?.classList.remove("active"); // 清除之前的active
      e.target.classList.add("active");
      select.querySelector(".title span").innerText = e.target.innerText;
    });
  }

  /**
   * @description 注册特殊事件 省份
   *
   */
  function regProvinceEvent() {
    doms.selProvince.querySelector(".option").addEventListener("click", (e) => {
      if (e.target.tagName !== "LI") {
        return;
      }
      const list = doms.selProvince.list.find(
        (_) => _.label === e.target.innerText
      )?.children;
      fillSelcet(doms.selCity, list);
      fillSelcet(doms.selArea, []);
    });
  }

  /**
   * @description  注册特殊事件 市
   */
  function regCityEvent() {
    doms.selCity.querySelector(".option").addEventListener("click", (e) => {
      if (e.target.tagName !== "LI") {
        return;
      }
      const list = doms.selCity.list.find(
        (_) => _.label === e.target.innerText
      )?.children;
      fillSelcet(doms.selArea, list);
    });
  }
})();
