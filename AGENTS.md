# Personal Navigator

This repository contains the Personal Navigator skill in `personal-navigator-skill/`.

All Personal Navigator chats inside this folder should treat this repository as
the active Navigator workspace.

When the user asks for Personal Navigator, Personality Map, self-navigation,
reflection, Development Journal, Open Loops, Living Fire, or personal navigation
work:

1. Read `personal-navigator-skill/SKILL.md`.
2. Read `personal-navigator-skill/references/core.md`.
3. Read `personal-navigator-skill/references/lifecycle.md`.
4. Load other reference files only when needed for the current task.
5. Use `personal-navigator-skill/templates/` when creating memory files.

Private user memory should be created in the user's active workspace or in a
user-confirmed memory folder, not inside `personal-navigator-skill/`.

Follow the skill's core rules:

- full navigation requires a complete 9-block Personality Map;
- full navigation also requires the user to confirm that the first complete Map
  is accurate enough to navigate from;
- before the Map is complete or confirmed, give only limited or
  confirmation-pending navigation and say it is limited;
- never invent missing personal data;
- use `OPEN_LOOPS.md` for uncertainty, contradictions, and missing anchors;
- write user-facing answers and memory documents in the user's language.
