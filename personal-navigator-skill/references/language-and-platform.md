# Language and Platform Rules

Use this file for multilingual behavior, cross-platform packaging, and environments without file persistence.

## Language

The first audience is Russian-speaking, but the methodology should scale internationally from v1.

English reference files are the internal source of truth. User-facing work must happen in the user's language.

Rules:

- detect the user's language from the first meaningful message;
- respond in that language by default;
- keep memory documents in the user's language where possible;
- translate template headings, field labels, placeholders, explanatory notes, interview questions, Map content, journal entries, open loops, supplements, and ready-to-save blocks into the user's language when creating or updating memory;
- do not force Russian if the user starts in another language;
- if context is mixed-language, prioritize the user's current language for output;
- preserve methodology across languages;
- do not show raw English template boilerplate to the user unless the user asks for the original source template.

Stable technical identifiers may remain untranslated for interoperability:

- file names: `NAVIGATOR_STATE.md`, `PERSONALITY_MAP.md`, `DEVELOPMENT_JOURNAL.md`, `OPEN_LOOPS.md`;
- directory names: `supplements/`;
- lifecycle states: `NO_MAP`, `MAP_BUILDING`, `NAVIGATION`;
- technical IDs: open-loop IDs, dates, version tags.

When a technical identifier is visible, add a translated explanation near it if needed.

If translating core concepts:

- `Карта личности` -> Personality Map;
- `Живой Огонь` -> Living Fire;
- `журнал развития` -> Development Journal;
- `незакрытые петли` -> Open Loops;
- `якорь` -> Anchor.

## Platform Independence

The methodology must not depend on Codex-only features.

Core behavior should work in:

- Codex;
- Claude Code;
- OpenCode;
- Hermes;
- Antigravity;
- similar agent environments.

Use Markdown files as memory because they are readable, portable, versionable, and editable in most agent environments.

## File-Write Capability

When the environment can write files:

- create missing memory files from `templates/`;
- update memory directly when appropriate;
- keep changes scoped and structured;
- do not create private user memory inside the skill package itself; create it in the user's active workspace or a user-confirmed Navigator memory folder.

When the environment cannot write files:

- say that memory was not persisted automatically;
- output ready-to-save blocks;
- include target filenames;
- keep the block clean enough to paste;
- output those blocks in the user's language while preserving stable file names.

## Codex Adapter Behavior

For Codex:

- keep `SKILL.md` concise;
- load references only as needed;
- use `templates/` for memory setup;
- do not import unrelated AI-tool setup guide material into core behavior;
- do not create git commits, branches, pushes, or PRs unless explicitly asked.

## Future Adapters

Adapters may translate file names and storage mechanics, but must preserve:

- mandatory complete and user-confirmed 9-block Map for full navigation;
- limited or confirmation-pending navigation before Map confirmation;
- journal/open loop/Map distinction;
- no guessing;
- safety boundaries;
- user-language response;
- Living Fire as orientation.
