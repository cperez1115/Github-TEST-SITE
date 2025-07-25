
# 🖥️ Basic Terminal / CLI Commands  
> Mac (Unix/Bash) • Windows CMD  
> These foundational commands will help you navigate and manipulate your file system via terminal.

---

## 📍 Current Directory

- `pwd` (Mac)  
  Prints current working directory (where you are).

- `cd` (Windows)  
  Prints current working directory.

---

## 📂 List Contents of Directory

- `ls` (Mac)  
  Lists files and folders in current directory.

- `dir` (Windows)  
  Equivalent to `ls`.

- `ls -R` (Mac)  
  Lists all subfolders recursively (but not hidden files).

- `dir /s` (Windows)  
  Shows contents of current folder and all subfolders.

- `ls -a` (Mac)  
  Lists all files, including hidden (starting with `.`).

- `dir /a` (Windows)  
  Shows all files, including hidden/system.

---

## 🚪 Change Directory

- `cd folderName`  
  Navigate into a folder.

- `cd ..`  
  Go back one level (to parent directory).

- `cd /` (Mac) or `cd \` (Windows)  
  Go to the root directory.

---

## 🛠️ Create, Rename, Move, Delete

- `mkdir folderName`  
  Creates a new folder (Mac & Windows).

- `mv oldFolderName newFolderName` (Mac)  
  Renames a folder.

- `ren oldFolderName newFolderName` (Windows)

- `rm -r folderName` (Mac)  
  Removes a folder and its contents (⚠️ permanent).

- `rmdir /s folderName` (Windows)  
  Removes a folder and its contents (with confirmation).

- `mv file.txt folderName/` (Mac)  
  Moves `file.txt` from current directory into `folderName`.

- `move file.txt folderName\` (Windows)

- `mv folderA/file.txt folderB/` (Mac)  
  Moves file from `folderA` into `folderB`.

- `move folderA\file.txt folderB\` (Windows)

---

## 🧰 Other Useful Commands

- `clear` (Mac) or `cls` (Windows)  
  Clears the terminal screen.

- `touch file.txt` (Mac)  
  Creates a new empty file.

- `echo. > file.txt` (Windows)  
  Creates a new empty file.

- `code .`  
  Opens the current folder in VSCode (must have VSCode CLI installed).

- `open .` (Mac)  
  Opens current folder in Finder.

- `start .` (Windows)  
  Opens current folder in File Explorer.

- `exit`  
  Closes the terminal session.

---

# 🧠 Git / GitHub Terminal Commands Cheat Sheet

Git is Version Control Software for Tracking Changes  
GitHub is a website where Git repositories ("repos") are stored.

> 🧑‍💻 While VSCode allows GUI-based Git interaction, **professional developers must know terminal commands**. Before Microsoft's acquisition of GitHub and VSCode, the terminal was the only way.

---

## 🧾 Configuring Git Identity

Before making commits, it's important to tell Git who you are.

### 🔍 Check your current Git identity

```bash

# check if git is installed
git --version

git config --global user.name
git config --global user.email

# if running above does not reveal YOUR NAME and YOUR EMAIL
# run this to set your name and email
# hit Up Arrow to re-run previous command
git config --global user.name "Your Full Name"
git config --global user.email "you@example.com"

## 🚀 Setting Up a Local Git Repository

- `git init`  
  Creates a Git repo in the current folder (working directory).

  > 💡 **What happens in VS Code after `git init`**

- 🟩 **Green file names** in the Explorer sidebar mean the files are **new and untracked**.
- 🅤 **"U" status badge** stands for **Untracked** — Git sees the file but hasn’t been told to track it yet.

These indicators appear immediately after you run `git init` and Git detects files in the project folder.

### ✅ What to do next:

To start tracking the files:

### ➕ Staging Changes: CLI vs GUI

After running `git init`, Git sees your files as **Untracked** (`U`), meaning they aren’t staged yet.

#### ✅ To stage all files using the terminal:

```bash
git add .

# git is now tracking all changes to all files
# the next move is to commit the changes

## 🛒 Difference Between `git add .` and `git commit -m`

### 🧠 In short:

| Command              | What It Does                                      | Analogy                     |
|----------------------|---------------------------------------------------|-----------------------------|
| `git add .`          | Stages all your changes (new/modified files)      | 🛒 Put items on the conveyor belt |
| `git commit -m "..."`| Commits those staged changes to the repository    | 💳 Pay for the items — now it’s final |

---

### 🛒 Supermarket Analogy

Imagine you're at the checkout line in a supermarket:

- When you **run `git add .`**, it's like taking all the items out of your cart and putting them on the **conveyor belt**.
  - You’re saying, “These are the things I might want to buy.”
  - You’re closer to completion, but **you can still remove items or change your mind.**

- When you **run `git commit -m "message"`**, you’re **swiping your card or paying**.
  - Everything on the conveyor belt is now officially part of your purchase.
  - Git records a **snapshot** of your project at that moment.

---

### 💡 Key Insight

- You can **stage (add)** multiple times before committing.
- Only what you’ve staged gets committed.
- Nothing is truly saved in Git history until you run `git commit`.

---

### ✅ Example Workflow

```bash
git add .
git commit -m "Add homepage and style"


git commit -m "Initial commit"


- `ls`  
  Shows contents of the working directory (excludes hidden files like `.git`).

- `ls -a`  
  Shows **all** contents including hidden files like `.git`.

- `ls -R`  
  Recursively lists contents of all subfolders (but not hidden files).

- `ls -a -R`  
  Recursively lists all contents including hidden files and subfolders.

- `git status`  
  Shows staged and unstaged changes.

- `git add file-name.ext`  
  Stages a specific file for commit.

- `git add .`  
  Stages all files and folders (including hidden).

- `git add *`  
  Stages all **visible** files/folders (excludes hidden files like `.env`, `.DS_Store`).

- `git rm --cached . -r`  
  Removes all items from staging area (recursive = includes subfolders).  
  Then run `git status` to confirm.

- `git commit -m "your message"`  
  Commits staged changes with a message.

- `git log`  
  Shows commit history with IDs and messages.

- `git checkout notes.txt`  
  Reverts `notes.txt` to last committed version — ultimate "do-over".

---

## 🌐 Pushing to a GitHub Remote Repository

> ⚠️ First: log in to GitHub.com, create a new repo, and copy the repo URL.

- `git remote add origin https://github.com/YourUserName/YourRepo`  
  Links local repo to GitHub remote.

- `git branch -M main`  
  Creates and renames your default branch as `main`.

- `git push -u origin main`  
  Pushes local repo to remote `main` branch.  
  `-u` flag sets tracking so future `git push` / `git pull` commands don’t need arguments.

---

## 🛑 .gitignore Setup

- `touch .gitignore`  
  Creates a `.gitignore` file to specify files/folders to exclude from Git tracking.

- `ls -a`  
  To view the now-visible `.gitignore`.

- `open .gitignore`  
  Opens it in your code editor.

- In `.gitignore`, write one filename or folder per line to ignore.  
  e.g.:
  ```
  .DS_Store
  node_modules/
  .env
  ```

- Template repo: [github.com/github/gitignore](https://github.com/github/gitignore)  
  Use `Node.gitignore` for Node.js projects.

---

## 📥 Cloning a Remote Repo

- `git clone <url>`  
  Downloads a repo from GitHub to your local machine.

Example:

```
git clone https://github.com/brianmccln/Blackjack-JavaScript.git
```
