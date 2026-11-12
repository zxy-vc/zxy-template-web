# Clasificación de lo que está fuera de GitHub — ENG-669 (12-nov-2026)

Este archivo es solo un inventario: no se subió, copió, movió ni borró nada. Solo trae rutas, tamaños (`du -sh`), número de archivos y motivos, sin contenido.

**Cuarto limpio.** Los repos hermanos de `~` se revisaron solo con números: tamaño, conteos y `git status`/`rev-list` contados con `wc`. No se abrió ningún archivo ni se imprimieron nombres de archivos. El único efecto colateral fue que `git status` actualizó la fecha de modificación de `.git/index` en cada repo, sin cambiar ningún contenido.

**Resultado: no se encontró EVIDENCIA ÚNICA.** Hay 2 rutas de clase DERIVADO YA PRESERVADO y 30 de clase REGENERABLE. Dos de las REGENERABLES no se pudieron verificar por la regla del cuarto limpio (ver ★).

| ruta | tamaño | nº de archivos | clase | por qué | cómo se regenera, o qué se pierde |
|---|---|---|---|---|---|
| `zxy-template-web/.context/todos.md` | 0 | 1 | REGENERABLE | Está vacío (0 bytes); lo crea Conductor. | Conductor lo vuelve a crear al abrir un workspace. No se pierde nada. |
| `~/.claude/projects/` (transcripción de esta sesión) | 896K | 1 | DERIVADO YA PRESERVADO | Es la transcripción del chat de este carril. | Preservado en la exportación de chats de Conductor, en `rescate/eng-669/REPORTE.md` (rama `rescate/12-nov/eng-669-archivos`) y en `docs/brain-cuarto-limpio-2026-10.md` (rama `cuarto-limpio/brain`). Se pierden solo las salidas crudas de herramientas (conteos de `wc`, salidas de `git`), y todas se pueden volver a producir. |
| `/tmp/claude-1000/` | 36K | 10 | DERIVADO YA PRESERVADO | Salidas temporales de herramientas de esta sesión. | Ya se reflejan en el chat y en el REPORTE. No se pierde nada útil. |
| `~/.claude.json` | 68K | 1 | REGENERABLE | Configuración y estado de la cuenta de Claude Code. Es sensible (secreto). | Se regenera al iniciar sesión de nuevo en Claude Code. No debe subirse. |
| `~/.claude/backups/` | 60K | 2 | REGENERABLE | Respaldos automáticos de `.claude.json`. Sensible (secreto). | Claude Code los crea solo. |
| `~/.claude/sessions/` | 8.0K | 2 | REGENERABLE | Llave y metadatos de la sesión activa. Sensible (secreto). | Se crean nuevos en cada sesión. |
| `~/.claude/plugins/` | 2.7M | 2 | REGENERABLE | Caché del directorio de plugins. | Claude Code lo vuelve a descargar al arrancar. |
| `~/.claude/shell-snapshots/` | 8.0K | 1 | REGENERABLE | Foto del entorno de la shell. | Se crea al arrancar cada sesión. |
| `~/.claude/` (remote-settings, policy-limits, .last-cleanup) | 24K | 6 | REGENERABLE | Ajustes y límites sincronizados desde el servidor. | Se vuelven a sincronizar al iniciar sesión. |
| `~/.codex/` | 2.9M | 78 | REGENERABLE | Estado de arranque de Codex que trae la imagen; todos los archivos son del 22-sep y no se usó en este carril. | Viene con la imagen del sandbox o se regenera al instalar Codex. |
| `~/.gitconfig` | 4.0K | 1 | REGENERABLE | Identidad y ayudante de credenciales que escribe Conductor (24-oct). | Conductor lo escribe al crear el workspace. |
| `~/.local/` | 8.0K | 2 | REGENERABLE | `device-id` de gh y manifiesto de la extensión gh-stack. | `gh extension install github/gh-stack`; el id se genera solo. |
| `~/.npm/` | 87M | 48 | REGENERABLE | Caché de npm, del 22-sep. | `npm install` en cualquier proyecto. |
| `~/.pgdata/` | 46M | 1273 | REGENERABLE | Clúster de Postgres 16 de la imagen. Todos los archivos son del 22-sep, no estaba corriendo y no se escribió durante este carril. No se inspeccionó. | `initdb -D ~/.pgdata/16` o volver a aprovisionar el sandbox. |
| `~/.cache/` | 0 | 0 | REGENERABLE | Vacío. | No aplica. |
| `~/.bash_logout` | 4.0K | 1 | REGENERABLE | Archivo de la imagen. | Viene con la imagen. |
| `~/.bash_profile` | 4.0K | 1 | REGENERABLE | Archivo de la imagen (22-sep). | Viene con la imagen. |
| `~/.bashrc` | 4.0K | 1 | REGENERABLE | Archivo de la imagen. | Viene con la imagen. |
| `~/agent-os/` | 188K | 43 | REGENERABLE | Clon limpio: 0 cambios, 0 stash, 0 commits sin subir. | `git clone` desde su remoto. |
| `~/baw/` | 256K | 38 | REGENERABLE | Clon limpio, igual que arriba. | `git clone`. |
| `~/baw-3d/` | 469M | 56 | REGENERABLE | Clon limpio. | `git clone`. |
| `~/baw-design/` | 19M | 91 | REGENERABLE | Clon limpio. | `git clone`. |
| `~/baw-mx/` | 1.4M | 74 | REGENERABLE | Clon limpio. | `git clone`. |
| `~/baw-os/` | 6.9M | 555 | REGENERABLE | Clon limpio. Tiene archivos seguidos del 15-oct, pero idénticos a HEAD. | `git clone`. |
| `~/baw-viewer/` | 3.1G | 2092 | REGENERABLE | Clon limpio. | `git clone`. |
| `~/engrane-ai/` (lo que sigue git) | 346M | 3639 | REGENERABLE | 0 commits sin subir y 0 stash. Tiene archivos seguidos del 24-oct, pero idénticos a HEAD. | `git clone`. |
| `~/engrane-ai/` ★ 1 archivo sin seguir | 600 B | 1 | REGENERABLE (sin verificar) | Su fecha es la del clon de aprovisionamiento (22-sep 23:34), así que parece haberlo dejado la configuración de la imagen. No se vio ni su nombre ni su contenido. Podría ser sensible. | Se regenera volviendo a aprovisionar. Para confirmarlo, fuera del cuarto limpio: `git -C ~/engrane-ai status --porcelain -uall`. |
| `~/engrane-design/` | 8.3M | 250 | REGENERABLE | Clon limpio. Tiene archivos seguidos del 17-oct, pero idénticos a HEAD. | `git clone`. |
| `~/engrane-landing/` (lo que sigue git) | 3.2M | 70 | REGENERABLE | Clon limpio en lo que sigue git. | `git clone`. |
| `~/engrane-landing/` ★ 1 archivo sin seguir | 291 B | 1 | REGENERABLE (sin verificar) | Igual que el de engrane-ai: tiene la fecha del aprovisionamiento (22-sep 23:34) y no se inspeccionó. | Se regenera volviendo a aprovisionar. Para confirmarlo: `git -C ~/engrane-landing status --porcelain -uall`. |
| `~/zxy-design/`, `~/zxy-template-api/`, `~/zxy.vc/` | 324K / 216K / 256K | 46 / 54 / 41 | REGENERABLE | Clones limpios. | `git clone`. |
| `/tmp/node-compile-cache/`, `/tmp/cc-socks/`, `/tmp/cmcp-*` (3), `/tmp/*.sock` (5) | 5.1M / 0 / 0 / 0 | 1079 / 0 / 0 / 5 sockets | REGENERABLE | Caché de Node y sockets o directorios de ejecución. Son efímeros. | Se recrean al ejecutar. |

**Riesgo residual.** Las dos filas ★ son las únicas que no se pudieron confirmar sin romper el cuarto limpio. Su fecha coincide al segundo con el clon de aprovisionamiento, así que no las produjo este carril. Si contienen algo, el origen es la imagen y no este workspace.
