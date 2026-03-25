// vfs/files.js — Virtual filesystem file contents
// Edit this file to add, remove, or modify the practice files shown in the terminal.

const VFS_FILES = {

  // ── /home/user/Documents ──────────────────────────────────────────────────

  'notes.txt': [
    '這是一個筆記檔案。',
    '記得完成作業！',
    '明天開會時間：14:00',
  ].join('\n'),

  'report.md': [
    '# 月報告',
    '',
    '## 進度',
    '- 完成前端設計',
    '- API 串接中',
    '',
    '## 待辦',
    '- 測試部署',
  ].join('\n'),

  'todo.txt': [
    '1. 學習 Linux 指令',
    '2. 練習 vim',
    '3. 完成專案部署',
  ].join('\n'),

  // ── /home/user/Downloads ──────────────────────────────────────────────────

  'image.png': '[binary PNG data]',

  'data.csv': [
    'name,age,city',
    'Alice,28,Taipei',
    'Bob,32,Tokyo',
    'Carol,25,Osaka',
  ].join('\n'),

  // ── /home/user/projects/webapp ────────────────────────────────────────────

  'webapp/index.html': [
    '<!DOCTYPE html>',
    '<html>',
    '<head><title>My App</title></head>',
    '<body>',
    '  <h1>Hello World</h1>',
    '</body>',
    '</html>',
  ].join('\n'),

  'webapp/style.css': [
    'body {',
    '  margin: 0;',
    '  font-family: sans-serif;',
    '  background: #f0f0f0;',
    '}',
    'h1 { color: #333; }',
  ].join('\n'),

  'webapp/app.js': [
    'console.log("App started");',
    '',
    'function greet(name) {',
    '  return `Hello, ${name}!`;',
    '}',
    '',
    'greet("World");',
  ].join('\n'),

  'webapp/README.md': [
    '# WebApp',
    '',
    'A simple web application.',
    '',
    '## Setup',
    'npm install',
    'npm start',
  ].join('\n'),

  // ── /home/user/projects ───────────────────────────────────────────────────

  'script.sh': [
    '#!/bin/bash',
    'echo "Running backup..."',
    'tar -czf backup.tar.gz ~/Documents',
    'echo "Backup complete!"',
  ].join('\n'),

  // ── /home/user/config ─────────────────────────────────────────────────────

  'datadog.yaml': [
    '## Datadog Agent configuration',
    '## https://docs.datadoghq.com/agent/guide/agent-configuration-files/',
    '',
    '# ── Core ────────────────────────────────────────────────────────────────',
    'api_key: <YOUR_DATADOG_API_KEY>',
    'site: datadoghq.com          # datadoghq.eu / us3.datadoghq.com / ap1.datadoghq.com',
    '',
    '# ── Host ─────────────────────────────────────────────────────────────────',
    '# hostname: my-host-01       # override auto-detected hostname',
    'tags:',
    '  - env:production',
    '  - team:platform',
    '  - service:webapp',
    '',
    '# ── Logs ─────────────────────────────────────────────────────────────────',
    'logs_enabled: true',
    '',
    '# ── APM / Tracing ────────────────────────────────────────────────────────',
    'apm_config:',
    '  enabled: true',
    '  # apm_non_local_traffic: true  # accept traces from other containers',
    '',
    '# ── Process monitoring ───────────────────────────────────────────────────',
    'process_config:',
    '  process_collection:',
    '    enabled: false',
    '',
    '# ── DogStatsD ────────────────────────────────────────────────────────────',
    'dogstatsd_socket: /var/run/datadog/dsd.socket',
    '# dogstatsd_port: 8125',
    '',
    '# ── Proxy (optional) ─────────────────────────────────────────────────────',
    '# proxy:',
    '#   https: http://proxy.example.com:3128',
  ].join('\n'),

  // ── /home/user dot-files ──────────────────────────────────────────────────

  '.bashrc': [
    '# .bashrc',
    'export PATH=$PATH:/usr/local/bin',
    'alias ll="ls -la"',
  ].join('\n'),

  '.zshrc': [
    '# .zshrc',
    'export ZSH=$HOME/.oh-my-zsh',
    'ZSH_THEME="robbyrussell"',
  ].join('\n'),

};
