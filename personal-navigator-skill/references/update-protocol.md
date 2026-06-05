# Memory Update Protocol

Use this file before updating `DEVELOPMENT_JOURNAL.md`, `OPEN_LOOPS.md`, `PERSONALITY_MAP.md`, or supplements.

## Contents

- Core Distinction
- Update Decision
- Journal Updates
- Open Loop Updates
- Map Updates
- Confirmation Required
- Supplement Updates
- No File Write Fallback

## Core Distinction

```text
journal catches life
open loops catch uncertainty
supplements catch domain depth
map stores verified identity-level patterns
```

## Update Decision

After each meaningful interaction, ask:

1. Did something happen in the user's life or development? -> journal.
2. Is something uncertain, contradictory, or missing an anchor? -> open loops.
3. Is this a domain-specific layer that deserves depth? -> supplement.
4. Is this a stable or strongly evidenced identity-level pattern? -> Map.

If unsure, prefer journal or open loop over Map.

## Event Capture

After navigation, decide what changed at four levels:

1. Current state changed -> update `NAVIGATOR_STATE.md`.
2. A meaningful event, insight, decision, action, result, or state shift appeared -> update `DEVELOPMENT_JOURNAL.md`.
3. A conclusion is uncertain, contradictory, disputed, or missing an anchor -> update `OPEN_LOOPS.md`.
4. A stable identity-level pattern is confirmed or clearly outdated -> update `PERSONALITY_MAP.md`.

Do not confuse these levels. A strong current emotion usually belongs in current state or journal, not the Map. A repeated state pattern may become Map material only after enough anchors exist.

## Journal Updates

Update the journal when:

- meaningful insight appears;
- a decision is made;
- action or result is reported;
- crisis, breakthrough, or turning point appears;
- energy changes significantly;
- a repeating pattern appears;
- a new circumstance changes trajectory;
- a previous insight becomes behavior.

Journal entries do not require explicit user approval every time.

Journal entry structure:

- date;
- type: insight, decision, action, result, state shift, contradiction, turning point;
- user statement or short quote;
- what changed;
- evidence;
- related Map block/open loop;
- next observation or step.

## Open Loop Updates

Create or update an open loop when:

- evidence is insufficient;
- a conclusion lacks an anchor;
- a useful hypothesis is unproven;
- the user contradicts earlier information;
- a Map section remains incomplete;
- a safety or interpretation risk should not be overread.

Open loop structure:

- id;
- status: active, resolved, archived;
- related block/domain;
- type;
- unresolved issue;
- why it matters;
- current evidence;
- missing evidence;
- next question or observation;
- created/updated date.

Resolve an open loop only when enough evidence appears or the question becomes irrelevant.

## Map Updates

Update the Personality Map when:

- a pattern is stable across time;
- there is strong evidence;
- a value, goal, behavior, or self-understanding has changed meaningfully;
- a previous Map section is clearly outdated;
- new information fits and enriches an existing Map pattern;
- the user explicitly states a formulation that should become part of the Map.

Do not update the Map after every emotional message.

When adding to the Map:

- keep the three-layer format;
- add concrete examples to `CONTEXT`;
- synthesize identity-level conclusions in structured subsections;
- do not paste raw answers as final Map conclusions;
- turn simple user language into grounded first-person synthesis only when the inference follows from anchors;
- avoid duplicating examples;
- make confidence/evidence visible;
- update `NAVIGATOR_STATE.md` if block completeness or weak areas changed.

Before closing a block or Map V1, run an integration pass:

- re-read relevant anchors and journal/open-loop context;
- separate facts, interpretations, needs, and hypotheses;
- remove duplicates and low-signal notes;
- verify that non-obvious conclusions are grounded;
- move weak or unresolved conclusions to `OPEN_LOOPS.md`;
- keep the final Map coherent enough for the user to read as a self-portrait.

## Confirmation Required

Explicit confirmation is required when:

- first Map V1 has been presented and needs user validation before full navigation;
- new information strongly contradicts the existing Map;
- the update changes a core identity-level conclusion;
- the user appears emotionally unstable and the conclusion may be state-driven;
- the Navigator is unsure whether this is a stable change or temporary mood.

Use direct clarification:

```text
Earlier your Map said X. Now you are saying Y.
This looks like a meaningful shift, not just a small addition.
Has this really changed, or is this a current-state reaction?
```

If not confirmed, journal the moment and create an open loop. Do not rewrite the Map.

## Supplement Updates

Create or update a supplement when:

- a domain has enough context to deserve its own layer;
- goals, constraints, and patterns in that domain become clearer;
- the user wants to explore the domain deeply;
- the domain context would overload the main Map.

Supplements should be structured and useful for future navigation. Avoid dumping raw chat.

## No File Write Fallback

If the environment cannot write files:

1. State that persistent memory was not updated automatically.
2. Output a ready-to-save block.
3. Include target file path.
4. Keep format exact enough for later paste.

Never claim the update was made when it was not.
