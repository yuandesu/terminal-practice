// filesystem.js — Virtual filesystem structure
// File contents live in vfs/files.js (VFS_FILES).

const FS = {
  '/':          { type: 'dir', children: ['home'] },
  '/home':      { type: 'dir', children: ['user'] },
  '/home/user': { type: 'dir', children: ['Documents', 'Downloads', 'projects', 'config', '.bashrc', '.zshrc'] },

  // ── Documents ──────────────────────────────────────────────────────────────
  '/home/user/Documents': { type: 'dir', children: ['notes.txt', 'report.md', 'todo.txt'] },
  '/home/user/Documents/notes.txt': { type: 'file', content: VFS_FILES['notes.txt'] },
  '/home/user/Documents/report.md': { type: 'file', content: VFS_FILES['report.md'] },
  '/home/user/Documents/todo.txt':  { type: 'file', content: VFS_FILES['todo.txt'] },

  // ── Downloads ──────────────────────────────────────────────────────────────
  '/home/user/Downloads': { type: 'dir', children: ['image.png', 'data.csv'] },
  '/home/user/Downloads/image.png': { type: 'file', content: VFS_FILES['image.png'] },
  '/home/user/Downloads/data.csv':  { type: 'file', content: VFS_FILES['data.csv'] },

  // ── projects ───────────────────────────────────────────────────────────────
  '/home/user/projects': { type: 'dir', children: ['webapp', 'script.sh'] },
  '/home/user/projects/webapp': { type: 'dir', children: ['index.html', 'style.css', 'app.js', 'README.md'] },
  '/home/user/projects/webapp/index.html': { type: 'file', content: VFS_FILES['webapp/index.html'] },
  '/home/user/projects/webapp/style.css':  { type: 'file', content: VFS_FILES['webapp/style.css'] },
  '/home/user/projects/webapp/app.js':     { type: 'file', content: VFS_FILES['webapp/app.js'] },
  '/home/user/projects/webapp/README.md':  { type: 'file', content: VFS_FILES['webapp/README.md'] },
  '/home/user/projects/script.sh': { type: 'file', executable: true, content: VFS_FILES['script.sh'] },

  // ── config ─────────────────────────────────────────────────────────────────
  '/home/user/config': { type: 'dir', children: ['datadog.yaml'] },
  '/home/user/config/datadog.yaml': { type: 'file', content: VFS_FILES['datadog.yaml'] },

  // ── dot-files ──────────────────────────────────────────────────────────────
  '/home/user/.bashrc': { type: 'file', content: VFS_FILES['.bashrc'] },
  '/home/user/.zshrc':  { type: 'file', content: VFS_FILES['.zshrc'] },
};
