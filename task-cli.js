#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const data_path = path.join(__dirname, "task.json");
function loadTask() {
  if (!fs.existsSync(data_path)) return [];
  const data = fs.readFileSync(data_path);
  return JSON.parse(data);
}

function saveTask(tasks) {
  return fs.writeFileSync(data_path, JSON.stringify(tasks, null, 2));
}

function getTimestamp() {
  return new Date();
}
function addTask(description) {
  const tasks = loadTask();
  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  const newTasks = {
    id,
    description,
    status: "todo",
    createAt: getTimestamp(),
    updateAt: getTimestamp(),
  };
  tasks.push(newTasks);
  saveTask(tasks);
  console.log(`Task added successfully (ID: ${id})`);
}

function updateTask(id, newDescription) {
  const tasks = loadTask();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));
  if (taskIndex === -1)
    return console.log("Index yang anda inputkan tidak ada");

  tasks[taskIndex].description = newDescription;
  tasks[taskIndex].updateAt = getTimestamp();

  saveTask(tasks);
  console.log(`Task updated (ID: ${id})`);
}
function deleteTask(id) {
  const tasks = loadTask();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));
  if (taskIndex === -1)
    return console.log("Index yang anda inputkan tidak ada");

  const deleted = tasks.splice(taskIndex, 1);
  const dataDeleted = JSON.stringify(deleted);
  saveTask(tasks);
  console.log(`Task delete (ID: ${id})`);
}

function markTask(id, newMark) {
  const tasks = loadTask();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));
  if (taskIndex === -1)
    return console.log("Index yang anda inputkan tidak ada");

  tasks[taskIndex].status = newMark;
  tasks[taskIndex].updateAt = getTimestamp();
  saveTask(tasks);
  console.log(`New Mark is success (New Mark : ${newMark})`);
}

function listTask(status = null) {
  const tasks = loadTask();
  const filtered = status ? tasks.filter((t) => t.status === status) : tasks;
  if (filtered.length === 0)
    return console.log(`Data with comment ${status} is not in task.json`);
  filtered.forEach((t) => {
    console.log(
      `[${t.id}] ${t.description} - ${t.status} (Updated: ${t.updateAt})`
    );
  });
}

const [command, ...args] = process.argv.slice(2);

switch (command) {
  case "add":
    addTask(args.join(" "));
    break;
  case "update":
    updateTask(args[0], args.slice(1).join(" "));
    break;
  case "delete":
    deleteTask(args[0]);
    break;
  case "mark-in-progress":
    markTask(args[0], "in-progress");
    break;
  case "mark-done":
    markTask(args[0], "done");
    break;
  case "mark-todo":
    markTask(args[0], "todo");
    break;
  case "list":
    if (!args[0]) listTask();
    else if (["todo", "done", "in-progress"].includes(args[0]))
      listTask(args[0]);
    else console.log("Invalid status filter.");
    break;
  default:
    console.log("Invalid your input");
}
