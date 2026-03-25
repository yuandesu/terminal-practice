<div align="center">
  <img src="favicon.svg" width="80" alt="Mock Terminal Logo"/>
  <h1>Mock Terminal</h1>
  <p>
    <a href="#繁體中文">繁體中文</a> ·
    <a href="#english">English</a> ·
    <a href="#日本語">日本語</a>
  </p>
  <p>
    <a href="https://yuandesu.github.io/terminal-practice/">🌐 Live Demo</a>
  </p>
</div>

---

<a name="繁體中文"></a>
## 繁體中文

### 什麼是 Mock Terminal？

**Mock Terminal** 是一個在瀏覽器中執行的互動式終端機練習環境，讓你無需開啟真正的終端機，就能安全地練習 zsh / Unix 指令。每執行一個指令，右側都會彈出說明卡片，幫助你即時理解指令的用途與行為。

### 功能特色

- **模擬 zsh 終端機** — 支援 `ls`、`cd`、`cat`、`grep`、`find`、`mkdir`、`touch`、`cp`、`mv`、`rm` 等常見指令
- **內建 Vim 編輯器** — 支援 Normal / Insert 模式切換、`i a A o O` 進入插入、`hjkl` 移動、`dd` 刪行、`x` 刪字元、`u` 復原，以及 `:wq` `:q!` 等命令
- **即時說明提示** — 執行任何指令後，右上角顯示說明浮動卡片
- **快捷鍵視覺化鍵盤** — 畫面底部顯示實體鍵盤，按下按鍵時對應鍵會高亮
- **Tips 速查面板** — 點擊右下角 `?` 按鈕，展開橫式速查表，涵蓋終端機快捷鍵與 Vim 按鍵對照
- **三語介面** — 支援繁體中文 / English / 日本語 即時切換
- **亮色 / 暗色主題** — 一鍵切換佈景主題
- **虛擬檔案系統** — 內建完整目錄結構，可自由瀏覽與編輯檔案

### 支援指令

| 指令 | 說明 |
|------|------|
| `ls [-la]` | 列出目錄內容 |
| `cd <dir>` | 切換目錄 |
| `pwd` | 顯示當前路徑 |
| `cat <file>` | 查看檔案內容 |
| `head / tail [-n N] <file>` | 查看開頭 / 結尾行數 |
| `wc [-l] <file>` | 計算行數 / 字數 |
| `mkdir <dir>` | 建立資料夾 |
| `touch <file>` | 建立空檔案 |
| `cp <src> <dest>` | 複製 |
| `mv <src> <dest>` | 移動 / 改名 |
| `rm [-r] <file>` | 刪除 |
| `grep <pat> <file>` | 搜尋文字 |
| `find <dir>` | 尋找檔案 |
| `vi / vim <file>` | 開啟 Vim 編輯器 |
| `echo <text>` | 輸出文字 |
| `clear` | 清除螢幕 |
| `whoami` / `date` | 系統資訊 |
| `help` | 顯示所有指令 |

### 快速開始

直接開啟 Live Demo 即可使用，無需安裝任何軟體：

**[https://yuandesu.github.io/terminal-practice/](https://yuandesu.github.io/terminal-practice/)**

1. 輸入 `help` 查看所有可用指令
2. 輸入 `ls` 查看目錄內容
3. 點擊右下角 `?` 展開快速參考面板
4. 點擊畫面右上角的語言按鈕切換語言

---

<a name="english"></a>
## English

### What is Mock Terminal?

**Mock Terminal** is an interactive terminal practice environment that runs entirely in the browser. Practice zsh / Unix commands safely without opening a real terminal. Every command you run triggers an explanation card that helps you understand what each command does in real time.

### Features

- **Simulated zsh terminal** — supports `ls`, `cd`, `cat`, `grep`, `find`, `mkdir`, `touch`, `cp`, `mv`, `rm`, and more
- **Built-in Vim editor** — Normal / Insert mode switching, `i a A o O` to enter insert, `hjkl` movement, `dd` delete line, `x` delete character, `u` undo, `:wq` `:q!` commands
- **Instant explanation toasts** — after every command, a floating explanation card appears in the top-right corner
- **Visual keyboard** — physical keyboard rendered at the bottom; keys highlight when pressed
- **Tips quick-reference panel** — click the `?` button in the bottom-right to open a horizontal reference sheet covering terminal shortcuts and Vim keys
- **Three-language UI** — switch between Traditional Chinese / English / Japanese instantly
- **Light / Dark theme** — one-click theme toggle
- **Virtual filesystem** — a full directory tree built-in; browse and edit files freely

### Supported Commands

| Command | Description |
|---------|-------------|
| `ls [-la]` | List directory contents |
| `cd <dir>` | Change directory |
| `pwd` | Print working directory |
| `cat <file>` | View file contents |
| `head / tail [-n N] <file>` | Show first / last lines |
| `wc [-l] <file>` | Count lines / words |
| `mkdir <dir>` | Create directory |
| `touch <file>` | Create empty file |
| `cp <src> <dest>` | Copy |
| `mv <src> <dest>` | Move / rename |
| `rm [-r] <file>` | Delete |
| `grep <pat> <file>` | Search text |
| `find <dir>` | Find files |
| `vi / vim <file>` | Open Vim editor |
| `echo <text>` | Print text |
| `clear` | Clear screen |
| `whoami` / `date` | System info |
| `help` | Show all commands |

### Quick Start

Open the live demo directly — no installation required:

**[https://yuandesu.github.io/terminal-practice/](https://yuandesu.github.io/terminal-practice/)**

1. Type `help` to see all available commands
2. Type `ls` to list directory contents
3. Click the `?` button in the bottom-right to open the quick-reference panel
4. Use the language buttons in the top-right to switch languages

---

<a name="日本語"></a>
## 日本語

### Mock Terminal とは？

**Mock Terminal** はブラウザ上で動くインタラクティブなターミナル練習環境です。本物のターミナルを開かずに、安全に zsh / Unix コマンドを練習できます。コマンドを実行するたびに説明カードが表示され、各コマンドの動作をリアルタイムで理解できます。

### 機能

- **zsh ターミナルのシミュレーション** — `ls`、`cd`、`cat`、`grep`、`find`、`mkdir`、`touch`、`cp`、`mv`、`rm` などをサポート
- **Vim エディタ内蔵** — Normal / Insert モード切り替え、`i a A o O` で挿入モードへ、`hjkl` 移動、`dd` 行削除、`x` 文字削除、`u` アンドゥ、`:wq` `:q!` コマンド対応
- **リアルタイム説明トースト** — コマンドを実行するたびに右上に説明カードが表示
- **ビジュアルキーボード** — 画面下部にキーボードを表示、押したキーがハイライト
- **Tips クイックリファレンスパネル** — 右下の `?` ボタンをクリックすると横長の参照シートが展開（ターミナルショートカットと Vim キー一覧）
- **3言語 UI** — 繁体字中国語 / 英語 / 日本語 を即時切り替え
- **ライト / ダークテーマ** — ワンクリックでテーマ切り替え
- **仮想ファイルシステム** — 完全なディレクトリ構造が内蔵されており、自由にファイルを閲覧・編集可能

### 対応コマンド

| コマンド | 説明 |
|----------|------|
| `ls [-la]` | ディレクトリ内容を表示 |
| `cd <dir>` | ディレクトリ移動 |
| `pwd` | 現在のパスを表示 |
| `cat <file>` | ファイル内容を表示 |
| `head / tail [-n N] <file>` | 先頭 / 末尾の行を表示 |
| `wc [-l] <file>` | 行数 / 単語数を数える |
| `mkdir <dir>` | ディレクトリ作成 |
| `touch <file>` | 空ファイル作成 |
| `cp <src> <dest>` | コピー |
| `mv <src> <dest>` | 移動 / リネーム |
| `rm [-r] <file>` | 削除 |
| `grep <pat> <file>` | テキスト検索 |
| `find <dir>` | ファイル検索 |
| `vi / vim <file>` | Vim エディタ |
| `echo <text>` | テキスト出力 |
| `clear` | 画面クリア |
| `whoami` / `date` | システム情報 |
| `help` | 全コマンド表示 |

### クイックスタート

インストール不要。ライブデモをそのまま開くだけで使えます：

**[https://yuandesu.github.io/terminal-practice/](https://yuandesu.github.io/terminal-practice/)**

1. `help` と入力して利用可能なコマンドを確認
2. `ls` と入力してディレクトリ内容を表示
3. 右下の `?` ボタンをクリックしてクイックリファレンスパネルを開く
4. 右上の言語ボタンで言語を切り替える

---

<div align="center">
  <sub>Built with vanilla HTML / CSS / JavaScript · No dependencies · No build step</sub>
</div>
