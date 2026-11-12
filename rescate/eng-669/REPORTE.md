# Reporte de resguardo — ENG-669 · Cuarto limpio (12-nov-2026)

## Repo, workspace y ramas
- Remoto: https://github.com/zxy-vc/zxy-template-web
- Workspace: /home/vercel-sandbox/zxy-template-web (Conductor Cloud), carril ENG-669 · Cuarto limpio: el Brain diseñado desde cero.
- Rama con el trabajo: `cuarto-limpio/brain`. El SHA local y el remoto coinciden: `1130f8eb94a782777a7aab40d95230757e216797`, verificado con `git rev-parse` y `git ls-remote` después de `git fetch`.
- Rama de rescate: `rescate/12-nov/eng-669-archivos`, que solo contiene este reporte y nunca se integra.
- PR: no hay ninguno, por diseño del encargo.

## Inventario
- `git status`: limpio. El documento en disco es idéntico byte a byte al del commit.
- Stashes: ninguno. Worktrees aparte: ninguno.
- `git log origin/cuarto-limpio/brain..HEAD`: vacío, sin commits pendientes de subir.
- Otras ramas locales: `main` y `conductor/eng-669-…-29fa2711` apuntan a `27a9dcf`, el commit inicial que ya está en origin/main. No tienen trabajo propio.

## Estado
- Hecho: `docs/brain-cuarto-limpio-2026-10.md` (2,989 palabras, 10 secciones) está a salvo en `cuarto-limpio/brain`.
- Falta: nada del encargo original. El siguiente paso depende de una decisión de Fran.

## Archivos fuera de git
- Preservados: ninguno; no había nada con contenido.
- Excluido: `.context/todos.md`, motivo «generado» (archivo vacío de 0 bytes que crea Conductor).

## PROMPT EXACTO DE RETOMA

```
Contexto: repo https://github.com/zxy-vc/zxy-template-web, rama `cuarto-limpio/brain`
(commit 1130f8eb94a782777a7aab40d95230757e216797). Encargo ENG-669 «Cuarto limpio»:
diseñar desde cero el «Company Brain» de un producto para dueños-operadores de PyME
mexicanas (10–80 personas, operan con WhatsApp, Excel, contador y ChatGPT suelto),
SIN ver los repositorios, la doctrina ni los issues de Engrane AI, y sin buscar en
internet a Engrane AI ni a ZXY. Este repo NO es el producto: solo aloja el documento.

Entregable ya hecho: `docs/brain-cuarto-limpio-2026-10.md` (español de México,
1,500–3,000 palabras; hoy 2,989 por `wc -w`), con 10 secciones en este orden:
1 qué es/no es; 2 mecanismos y orden de construcción; 3 qué guarda/no guarda;
4 resolución de choques e incertidumbre; 5 corrección y olvido con rastro;
6 preguntas al dueño y tope; 7 prueba repetible; 8 qué no construir;
9 dónde la visión del fundador se rompe; 10 primera cosa a construir y a probar.

Decisiones tomadas en el diseño:
- Unidad central: la afirmación con evidencia y vigencia bi-temporal; nada se
  sobrescribe ni se borra (se sella como obsoleta o falsa, se fusiona o se archiva).
  Única excepción: borrado legal (derechos ARCO) o baja de la empresa, dejando una
  lápida sin contenido.
- El valor que se ve primero: el libro de compromisos (que los seguimientos no se caigan).
- Orden: aislamiento + evidencia inmutable → ingesta pasiva → afirmaciones bi-temporales
  → compromisos → verificación al usar → bitácora y corrección → consolidación nocturna
  → investigación → olvido aprendido.
- Jerarquía de fuentes: sistema de registro vivo > corrección del dueño > hechos de
  acción > quien tiene autoridad en el tema > rumor o inferencia. Si un choque no se
  resuelve, la afirmación queda «disputada»; nadie sobrescribe al dueño.
- Incertidumbre en 4 niveles discretos; consolidar no sube la certeza; los patrones
  solo suben si predicen bien; lo que el dueño corrigió queda como memoria negativa.
- Preguntas al dueño: máximo 1 al día y 3 a la semana (SUPUESTO).
- Prueba: reproducir en orden 90 días reales con etiquetas de anotadores externos,
  comparar contra búsqueda simple (RAG) y reprobar todo ante fallas de dinero, fugas
  entre empresas, envíos sin ok o rastro incompleto.
- Reglas fijas: el dinero se consulta en vivo y nunca se memoriza; nada sale hacia
  afuera sin el ok del dueño; aislamiento total entre empresas; todo lo que el
  sistema decide solo deja rastro visible.

Restricciones: no abrir PR salvo que Fran lo pida; no empujar a main; commits con
«Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>»; mantener el cuarto limpio
(no leer nada de Engrane).

Siguiente paso: esperar instrucción de Fran (compararlo con el diseño existente,
abrir PR o iterar). Si se itera, editar solo ese documento, mantenerlo debajo de
3,000 palabras y marcar con «SUPUESTO» lo que se suponga.
```
