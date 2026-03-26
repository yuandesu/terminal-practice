// task-themes.js — Theme-based task definitions
const TASK_THEMES = [
  {
    id: 'navigation',
    icon: '📁',
    tasks: [
      { id: 1, check: { type: 'cmd_match',  pattern: /^ls(\s|$)/ },                                                              hint: 'ls' },
      { id: 2, check: { type: 'cmd_match',  pattern: /^pwd$/ },                                                                  hint: 'pwd' },
      { id: 3, check: { type: 'cmd_match',  pattern: /^ls\s+\S*-\S*a/ },                                                         hint: 'ls -la' },
      { id: 4, check: { type: 'cwd_equals', path: '/home/user/Documents' },                                                      hint: 'cd Documents' },
      { id: 5, check: { type: 'cmd_match',  pattern: /^find(\s|$)/ },                                                            hint: 'find .' },
    ],
  },
  {
    id: 'content',
    icon: '📄',
    tasks: [
      { id: 1, check: { type: 'cmd_match', pattern: /^cat\s+\S+/ },                                                              hint: 'cat notes.txt' },
      { id: 2, check: { type: 'cmd_match', pattern: /^head\s+/ },                                                                hint: 'head -3 datadog.yaml' },
      { id: 3, check: { type: 'cmd_match', pattern: /^tail\s+/ },                                                                hint: 'tail -5 datadog.yaml' },
      { id: 4, check: { type: 'cmd_match', pattern: /^wc\s+/ },                                                                  hint: 'wc -l notes.txt' },
    ],
  },
  {
    id: 'operations',
    icon: '⚙️',
    tasks: [
      { id: 1, check: { type: 'fs_new_dir', baseDir: '/home/user', builtins: ['Documents', 'Downloads', 'projects'] },           hint: 'mkdir myfolder' },
      { id: 2, check: { type: 'cmd_match',  pattern: /^touch\s+\S+/ },                                                           hint: 'touch newfile.txt' },
      { id: 3, check: { type: 'cmd_match',  pattern: /^cp\s+\S+\s+\S+/ },                                                        hint: 'cp notes.txt notes-backup.txt' },
      { id: 4, check: { type: 'cmd_match',  pattern: /^mv\s+\S+\s+\S+/ },                                                        hint: 'mv notes-backup.txt archive.txt' },
      { id: 5, check: { type: 'cmd_match',  pattern: /^rm\s+/ },                                                                  hint: 'rm archive.txt' },
    ],
  },
  {
    id: 'search',
    icon: '🔍',
    tasks: [
      { id: 1, check: { type: 'cmd_match', pattern: /^grep\s+\S+\s+\S+/ },                                                       hint: 'grep error datadog.yaml' },
      { id: 2, check: { type: 'cmd_match', pattern: /\|[\s]*grep/ },                                                              hint: 'ls | grep yaml' },
      { id: 3, check: { type: 'cmd_match', pattern: /\|[\s]*wc/ },                                                                hint: 'cat notes.txt | wc -l' },
    ],
  },
  {
    id: 'vim',
    icon: '✏️',
    tasks: [
      { id: 1, check: { type: 'flag', flag: 'viExited' },                                                                         hint: 'vi notes.txt  →  Esc  →  :q' },
      { id: 2, check: { type: 'flag', flag: 'viSavedAndQuit' },                                                                   hint: 'vi notes.txt  →  i  →  (type something)  →  Esc  →  :wq' },
      { id: 3, check: { type: 'flag', flag: 'viSavedAndQuit' },                                                                   hint: 'vi notes.txt  →  G  →  dd  →  :wq' },
    ],
  },
];
