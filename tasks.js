// tasks.js — Task Mode definitions
// Depends on: FS (filesystem.js), app.js globals

const TASKS = [
  {
    id: 1,
    check: { type: 'cmd_match', pattern: /^ls(\s|$)/ },
    hint: 'ls',
  },
  {
    id: 2,
    check: { type: 'cmd_match', pattern: /^pwd$/ },
    hint: 'pwd',
  },
  {
    id: 3,
    check: { type: 'cmd_match', pattern: /^ls\s+\S*-\S*a/ },
    hint: 'ls -la',
  },
  {
    id: 4,
    check: { type: 'cwd_equals', path: '/home/user/Documents' },
    hint: 'cd Documents',
  },
  {
    id: 5,
    check: { type: 'cmd_match', pattern: /^cat\s+\S+/ },
    hint: 'cat notes.txt',
  },
  {
    id: 6,
    check: { type: 'cmd_match', pattern: /^grep\s+/ },
    hint: 'grep error datadog.yaml',
  },
  {
    id: 7,
    check: { type: 'fs_new_dir', baseDir: '/home/user', builtins: ['Documents', 'Downloads', 'projects'] },
    hint: 'mkdir myfolder',
  },
  {
    id: 8,
    check: { type: 'cmd_match', pattern: /^cp\s+\S+\s+\S+/ },
    hint: 'cp notes.txt notes-backup.txt',
  },
  {
    id: 9,
    check: { type: 'cmd_match', pattern: /^head\s+/ },
    hint: 'head -3 datadog.yaml',
  },
  {
    id: 10,
    check: { type: 'flag', flag: 'viSavedAndQuit' },
    hint: 'vi notes.txt  →  i  →  (edit)  →  Esc  →  :wq',
  },
];
