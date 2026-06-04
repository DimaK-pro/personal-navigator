# How to Work with Personal Navigator

After installation, you do not need to know the full methodology first. Ask the agent to use the skill and start with the Personality Map.

## 1. First Prompt

```text
Use $personal-navigator-skill.
I want to start building my Personality Map. Guide me through a friendly interview.
```

Expected behavior:

- the agent explains that full personal navigation is unavailable without a Map;
- it creates or offers `NAVIGATOR_STATE.md`, `PERSONALITY_MAP.md`, `DEVELOPMENT_JOURNAL.md`, and `OPEN_LOOPS.md`;
- it asks the first grounded human question;
- it avoids deep conclusions without data.

## 2. Where Memory Should Live

Private user memory should be created in the user's workspace or an explicitly chosen memory folder, but not inside `personal-navigator-skill/`.

```text
NAVIGATOR_STATE.md
PERSONALITY_MAP.md
DEVELOPMENT_JOURNAL.md
OPEN_LOOPS.md
supplements/
```

## 3. If Help Is Needed Before the Full Map

```text
Use $personal-navigator-skill.
I do not have a Map yet, but I need to understand my current situation. Give limited navigation and ask the missing questions.
```

Correct behavior: the Navigator helps, but says the answer is provisional because the 9 Map blocks are not complete yet.

## 4. User Language

The internal reference files are written in English. But answers, questions, the Map, journal, open loops, supplements, and ready-to-save blocks must be created in the user's language.

Technical file names and lifecycle states may remain stable English identifiers.

## 5. When Map V1 Is Ready

The Navigator should complete all 9 blocks, run an integration pass, remove duplicates, move uncertainty into `OPEN_LOOPS.md`, and only then announce the first full Map version.
