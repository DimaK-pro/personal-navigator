# Memory Model

Use this file before reading, creating, or updating Personal Navigator memory.

## Contents

- Default Files
- Loading Order
- NAVIGATOR_STATE.md
- PERSONALITY_MAP.md
- DEVELOPMENT_JOURNAL.md
- OPEN_LOOPS.md
- supplements/*.md
- Memory Boundary

## Default Files

Create or use these files in the user's workspace:

- `NAVIGATOR_STATE.md`
- `PERSONALITY_MAP.md`
- `DEVELOPMENT_JOURNAL.md`
- `OPEN_LOOPS.md`
- `supplements/*.md` when useful

If file writing is unavailable, output ready-to-save blocks and clearly say where they belong. Do not pretend memory was updated.

## Loading Order

For every Personal Navigator interaction:

1. Read `NAVIGATOR_STATE.md`.
2. Determine durable state and active workflow.
3. If state is `NO_MAP`, orient the user and start Map creation or limited situational help.
4. If state is `MAP_BUILDING` with active workflow `MAP_CONFIRMATION`, review Map V1 feedback before treating the Map as confirmed.
5. If state is `MAP_BUILDING` without active workflow `MAP_CONFIRMATION`, continue the current block or use limited navigation.
6. If state is `NAVIGATION`, read the relevant part of `PERSONALITY_MAP.md`.
7. Read recent relevant entries from `DEVELOPMENT_JOURNAL.md`.
8. Check `OPEN_LOOPS.md` for uncertainty related to the request.
9. Load relevant supplements only if the request touches that area.
10. Identify missing context before answering.
11. Answer using the current mode.
12. Decide whether to update journal, open loops, supplement, or Map.

## NAVIGATOR_STATE.md

Purpose: system dashboard.

Must contain:

- durable state: `NO_MAP`, `MAP_BUILDING`, or `NAVIGATION`;
- active workflow if any: `MAP_CONFIRMATION`, `REFLECTION_UPDATE`, `WOOP`, `IKIGAI`, etc.;
- Map version;
- Map confirmation status: not_started, pending, confirmed, needs_revision, or unknown;
- completed Map blocks;
- incomplete Map blocks;
- current Map block and subsection during interview;
- next best block or question to keep the user moving through the Map-building journey;
- known weak areas;
- active open loops;
- last significant update;
- list of available supplements;
- language preference;
- current energy/state if known;
- maturity/readiness notes if relevant;
- current life circumstances or life stage if relevant;
- safety notes if relevant.

Read this file first.

## PERSONALITY_MAP.md

Purpose: canonical 9-block Personality Map.

V1 is one file. Splitting into 9 block files can be added later only if context size becomes a real problem.

Each block uses:

1. `ESSENCE`: 3-5 first-person sentences.
2. `CONTEXT`: concrete facts, stories, situations, decisions, consequences, and short quotes without analysis.
3. `STRUCTURED SUBSECTIONS`: expert-level first-person synthesis without repeating examples.

The Map must be written from the first person.

Every major conclusion should make evidence visible:

- anchor/source;
- confidence: confirmed, probable, weak, or open loop;
- date or context of collection/update when possible.

The Map is living, but it is not a dumping ground. Identity-level conclusions belong here only when grounded.

The Map must be synthesized from interview material, not copied from it. Store direct user stories and short quotes in `CONTEXT`; store the Navigator's grounded first-person interpretation in `ESSENCE` and structured subsections. Before a block or full Map V1 is marked complete, run an integration pass to remove duplicates, check anchors, and move uncertainty to `OPEN_LOOPS.md`.

## DEVELOPMENT_JOURNAL.md

Purpose: chronological development memory.

Update it when:

- the user reports a meaningful insight;
- a decision is made;
- a crisis, breakthrough, or turning point appears;
- energy changes significantly;
- a repeating pattern appears;
- a new circumstance changes the user's trajectory;
- real action or result appears after a previous insight.

The journal can be updated often and does not require explicit approval every time. It is the Navigator's working memory for development over time.

Distinguish:

- insight;
- decision;
- action;
- result;
- state change;
- contradiction;
- next observation.

## OPEN_LOOPS.md

Purpose: unresolved uncertainty.

Use this file to protect against pretending unclear things are known.

Each open loop should include:

- id;
- related Map block or domain;
- type: hypothesis, missing anchor, contradiction, incomplete section, safety concern, or revisit question;
- why it matters for navigation;
- evidence currently available;
- evidence missing;
- next question or observation that could close it;
- status: active, resolved, or archived.

Use open loops when:

- there is not enough data;
- a conclusion lacks an anchor;
- the user contradicts earlier information;
- a hypothesis is useful but unproven;
- a Map section is incomplete;
- a risk should not be over-interpreted.

## supplements/*.md

Purpose: optional domain-specific context.

Examples:

- `career.md`
- `relationships.md`
- `money.md`
- `health.md`
- `projects.md`
- `ikigai.md`

Create a supplement only when it adds real structure and prevents the main Map from becoming overloaded.

Astrology, natal chart, numerology, and similar materials are optional future supplements only. They are not core and must always remain secondary to the Personality Map, reality checks, current state, and grounded evidence.

## Memory Boundary

Use this distinction:

```text
journal catches life
open loops catch uncertainty
supplements catch domain depth
map stores verified identity-level patterns
```

When unsure where something belongs:

- Put events and shifts in the journal.
- Put unproven claims and contradictions in open loops.
- Put domain-rich context in supplements.
- Put stable identity-level patterns in the Map.
