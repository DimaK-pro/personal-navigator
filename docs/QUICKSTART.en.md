# How to Work with Personal Navigator

After installation, you do not need to know the full methodology first. Open your agent environment inside the dedicated Navigator folder where `AGENTS.md` lives, then start with the Personality Map.

If you installed the skill as a dedicated Navigator project, you do not need to type `Use $personal-navigator-skill` every time: the agent should read `AGENTS.md` and understand that all chats in this folder belong to Personal Navigator.

## 1. First Prompt

```text
I want to start building my Personality Map. Guide me through a friendly interview.
```

Expected behavior:

- the agent explains that full personal navigation is unavailable without a Map;
- it creates or offers `NAVIGATOR_STATE.md`, `PERSONALITY_MAP.md`, `DEVELOPMENT_JOURNAL.md`, and `OPEN_LOOPS.md`;
- it asks the first grounded human question;
- it avoids deep conclusions without data.

## 2. Where Memory Should Live

Private user memory should be created in the dedicated Navigator project folder, beside `AGENTS.md`, but not inside `personal-navigator-skill/`.

```text
AGENTS.md
NAVIGATOR_STATE.md
PERSONALITY_MAP.md
DEVELOPMENT_JOURNAL.md
OPEN_LOOPS.md
supplements/
.agents/skills/personal-navigator-skill/
```

## 3. If Help Is Needed Before the Full Map

```text
I do not have a Map yet, but I need to understand my current situation. Give limited navigation and ask the missing questions.
```

Correct behavior: the Navigator helps, but says the answer is provisional because the 9 Map blocks are not complete yet.

## 4. If the agent cannot write files automatically

```text
Show me ready-to-save localized memory blocks, and I will save them manually. Start with NAVIGATOR_STATE.md, PERSONALITY_MAP.md, DEVELOPMENT_JOURNAL.md, and OPEN_LOOPS.md.
```

Correct behavior: the Navigator shows ready-to-save text in the user's language and clearly says where to save it.

## 5. User Language

The internal reference files are written in English. But answers, questions, the Map, journal, open loops, supplements, and ready-to-save blocks must be created in the user's language.

Technical file names and lifecycle states may remain stable English identifiers.

## 6. When Map V1 Is Ready

The Navigator should complete all 9 blocks, run an integration pass, remove duplicates, move uncertainty into `OPEN_LOOPS.md`, and only then announce the first full Map version.

After presenting V1, the Navigator should ask what feels accurate, surprising, not true, missing, or weak. Full navigation starts after the user confirms that the Map is accurate enough to work from.
