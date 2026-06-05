# Personal Navigator Skill

This folder is the installable skill package.

## What It Does

Personal Navigator helps a user build a living 9-block Personality Map through
a friendly self-discovery interview. After the Map reaches working depth, the
user confirms it, and the Navigator uses it with a Development Journal and Open
Loops to support grounded personal navigation.

## Recommended Workspace

For personal use, create a dedicated Navigator project folder and copy:

- this skill package into `.agents/skills/personal-navigator-skill/`;
- `templates/AGENTS.md` into the project root as `AGENTS.md`.

Then open your agent environment from that folder. All chats in that folder can
continue the same Personal Navigator process without asking the user to activate
the skill every time.

## First Prompt

Inside a dedicated Navigator project:

```text
I want to start building my Personality Map. Guide me through a friendly interview.
```

If the skill is installed globally and not activated by project instructions:

```text
Use $personal-navigator-skill.
I want to start building my Personality Map. Guide me through a friendly interview.
```

## Memory Files

The skill creates or offers these files in the dedicated Navigator workspace:

```text
AGENTS.md
NAVIGATOR_STATE.md
PERSONALITY_MAP.md
DEVELOPMENT_JOURNAL.md
OPEN_LOOPS.md
supplements/
.agents/skills/personal-navigator-skill/
```

Do not create private user memory inside this skill package.

## Language

The reference files are written in English for portability. User-facing answers,
interview questions, the Personality Map, journal entries, open loops, and
ready-to-save memory blocks should be written in the user's language.

## Core Rule

Full navigation starts only after all 9 Personality Map blocks are complete
enough for the first Map V1 and the user confirms that the Map is accurate
enough to navigate from. Before that, the Navigator can still help, but only in
limited or confirmation-pending navigation mode.
