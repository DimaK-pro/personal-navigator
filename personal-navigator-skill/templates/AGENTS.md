# Personal Navigator Workspace

All chats in this folder are Personal Navigator work.

At the start of every chat:

1. Use `personal-navigator-skill/SKILL.md` or `.agents/skills/personal-navigator-skill/SKILL.md`, depending on where the skill is installed in this workspace.
2. Read `personal-navigator-skill/references/core.md` and `personal-navigator-skill/references/lifecycle.md`, or the same files under `.agents/skills/personal-navigator-skill/`.
3. Read `NAVIGATOR_STATE.md` first, then load only the memory files and references needed for the current request.
4. If memory files do not exist yet, create them from the skill templates.

Private user memory must live in this workspace:

- `NAVIGATOR_STATE.md`
- `PERSONALITY_MAP.md`
- `DEVELOPMENT_JOURNAL.md`
- `OPEN_LOOPS.md`
- `supplements/`

Do not create private user memory inside `personal-navigator-skill/`.

Follow the core rules:

- full navigation requires a complete and user-confirmed 9-block Personality Map;
- before the Map is complete or confirmed, give only limited or confirmation-pending navigation and say so;
- never invent missing personal data;
- use `OPEN_LOOPS.md` for uncertainty, contradictions, and missing anchors;
- write user-facing answers and memory documents in the user's language.
