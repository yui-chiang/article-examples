// 取得網頁上的元素
const formatBtn = document.getElementById("format-btn");
const output = document.getElementById("output");
const clearBtn = document.getElementById("clear-btn");
const copyBtn = document.getElementById("copy-btn");

// 格式化 JSON 資料
const formatJSON = (json) => {
  try {
    const json = input.value;
    const formattedJSON = JSON.stringify(JSON.parse(json), null, 4);
    output.value = formattedJSON;
  } catch (error) {
    return json;
  }
};

// 更新輸出框中的內容
// const updateOutput = () => {
//   const json = input.value;
//   const formattedJSON = formatJSON(json);
//   output.value = formattedJSON;
// };

// 清空輸入框和輸出框中的內容
const clearAll = () => {
  input.value = "";
  output.value = "";
};

// 複製輸出框中的內容
const copyOutput = () => {
  output.select();
  var resultElem = document.getElementById("result");
  navigator.clipboard.writeText(resultElem.innerText);

};

// 當使用者輸入時觸發更新輸出框的函式
formatBtn.addEventListener("click", formatJSON);

// 當使用者按下清空按鈕時觸發清空輸入框和輸出框的函式
clearBtn.addEventListener("click", clearAll);

// 當使用者按下複製按鈕時觸發複製輸出框的函式
copyBtn.addEventListener("click", copyOutput);
