"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const model_js_1 = require("./model.js");
let tasks = [];
let filter = "all";
// Grab elements — cast so tsc knows exactly what they are.
const titleInput = document.getElementById("title");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");
addBtn.onclick = () => {
    const title = titleInput.value.trim(); // .value is known & typed
    if (!title)
        return;
    tasks = (0, model_js_1.addTask)(tasks, title); // returns a fresh Task[]
    render();
};
//# sourceMappingURL=app.js.map