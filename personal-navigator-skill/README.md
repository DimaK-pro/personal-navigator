# Personal Navigator Skill

This folder is the installable skill package.

## What It Does

Personal Navigator helps a user build a living 9-block Personality Map through
a friendly self-discovery interview. After the Map reaches working depth, the
Navigator uses it with a Development Journal and Open Loops to support grounded
personal navigation.

## First Prompt

```text
Use $personal-navigator-skill.
I want to start building my Personality Map. Guide me through a friendly interview.
```

## Memory Files

The skill creates or offers these files in the user's active workspace:

```text
NAVIGATOR_STATE.md
PERSONALITY_MAP.md
DEVELOPMENT_JOURNAL.md
OPEN_LOOPS.md
supplements/
```

Do not create private user memory inside this skill package.

## Language

The reference files are written in English for portability. User-facing answers,
interview questions, the Personality Map, journal entries, open loops, and
ready-to-save memory blocks should be written in the user's language.

## Core Rule

Full navigation starts only after all 9 Personality Map blocks are complete
enough for the first Map V1. Before that, the Navigator can still help, but only
in limited navigation mode.
