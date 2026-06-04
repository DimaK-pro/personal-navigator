# Installing Personal Navigator Skill

This page explains how to install or adapt `personal-navigator-skill` across popular agent environments.

Checked against public documentation on June 4, 2026. Agent environments move quickly, so release maintainers should re-check paths before publishing major updates.

## What Gets Installed

Main skill folder:

```text
personal-navigator-skill/
  SKILL.md
  agents/openai.yaml
  references/
  templates/
```

For full operation, Personal Navigator needs an environment where the agent can read instructions and create/update memory files:

- `NAVIGATOR_STATE.md`
- `PERSONALITY_MAP.md`
- `DEVELOPMENT_JOURNAL.md`
- `OPEN_LOOPS.md`
- `supplements/*.md`

If your environment cannot write files automatically, you can still use the methodology, but the user will need to save memory files manually from the templates.

Important: the internal reference files are written in English as the portable core, but user-facing answers, interview questions, the Map, journal, open loops, supplements, and ready-to-save memory blocks must be created in the user's language. File names and technical states may remain stable English identifiers.

After installation, continue with the [Quickstart](QUICKSTART.en.md).

## Recommended Cross-Agent Path

For environments that support the open `SKILL.md` format, the most portable project-local option is `.agents/skills/`:

```bash
mkdir -p .agents/skills
cp -R personal-navigator-skill .agents/skills/
```

This path is supported by several modern agent environments and works well for open-source repositories.

For personal use across all projects, use the global skills directory of your agent environment.

## Codex

Status: native skills support.

Personal install:

```bash
mkdir -p ~/.agents/skills
cp -R personal-navigator-skill ~/.agents/skills/
```

Restart Codex after installation so the skill is discovered.

Example prompt:

```text
Use $personal-navigator-skill.
I want to start building my Personality Map. Guide me through a friendly interview.
```

After the skill is published in a catalog or available by GitHub URL, it can also be installed through `$skill-installer`.

## Claude Code

Status: native `SKILL.md` support.

Personal install:

```bash
mkdir -p ~/.claude/skills
cp -R personal-navigator-skill ~/.claude/skills/
```

Project install:

```bash
mkdir -p .claude/skills
cp -R personal-navigator-skill .claude/skills/
```

Claude Code can load the skill automatically from its description or manually through a slash command:

```text
/personal-navigator-skill
```

Project skills may require accepting workspace trust.

## Antigravity

Status: native `SKILL.md` support.

Workspace install:

```bash
mkdir -p .agents/skills
cp -R personal-navigator-skill .agents/skills/
```

Optional global install for Antigravity desktop/app, if your version uses this path:

```bash
mkdir -p ~/.gemini/config/skills
cp -R personal-navigator-skill ~/.gemini/config/skills/
```

In newer Antigravity versions, the recommended workspace path is `.agents/skills/`. The older `.agent/skills/` path may still work for compatibility, but new projects should use `.agents/skills/`.

For Antigravity CLI, the global path can differ from the desktop/app path. If you need a global CLI install, check the current Antigravity CLI documentation; for a portable public repository, prefer the workspace `.agents/skills/` path.

## OpenCode

Status: native `SKILL.md` support.

Project install:

```bash
mkdir -p .opencode/skills
cp -R personal-navigator-skill .opencode/skills/
```

Global install:

```bash
mkdir -p ~/.config/opencode/skills
cp -R personal-navigator-skill ~/.config/opencode/skills/
```

OpenCode also searches compatible locations:

```text
.claude/skills/
~/.claude/skills/
.agents/skills/
~/.agents/skills/
```

If you want one path for multiple agents, use `.agents/skills/`.

## Windsurf / Cascade

Status: native skills support.

Workspace install:

```bash
mkdir -p .windsurf/skills
cp -R personal-navigator-skill .windsurf/skills/
```

Global install:

```bash
mkdir -p ~/.codeium/windsurf/skills
cp -R personal-navigator-skill ~/.codeium/windsurf/skills/
```

Windsurf/Cascade can also discover `.agents/skills/`, so cross-platform repositories may use:

```bash
mkdir -p .agents/skills
cp -R personal-navigator-skill .agents/skills/
```

## GitHub Copilot / VS Code

Status: native Agent Skills support in VS Code / Copilot.

Project install:

```bash
mkdir -p .github/skills
cp -R personal-navigator-skill .github/skills/
```

Personal install:

```bash
mkdir -p ~/.copilot/skills
cp -R personal-navigator-skill ~/.copilot/skills/
```

VS Code / Copilot also supports compatible paths:

```text
.claude/skills/
.agents/skills/
~/.claude/skills/
~/.agents/skills/
```

If you want one shared path for several agents, use `.agents/skills/`. If your project targets Copilot specifically, use `.github/skills/`.

## Cursor

Status: adaptation mode recommended.

Cursor’s official documentation focuses on Rules and `AGENTS.md`, not on installing standalone `SKILL.md` packages as native skills. Recommended approach:

1. Keep `personal-navigator-skill/` in the repository.
2. Use the included `AGENTS.md` or add a Cursor Project Rule.
3. Tell the agent to read `personal-navigator-skill/SKILL.md` and the relevant `references/` files when Personal Navigator is requested.

Minimal `AGENTS.md`:

```markdown
# Personal Navigator

When the user asks for Personal Navigator, personality map, self-navigation, reflection, development journal, or Living Fire work, read:

- personal-navigator-skill/SKILL.md
- personal-navigator-skill/references/core.md
- personal-navigator-skill/references/lifecycle.md

Follow the skill exactly. Use templates from personal-navigator-skill/templates/ when creating memory files.
```

## Gemini CLI / Gemini Code Assist

Status: use Antigravity skills, `AGENTS.md`, or `GEMINI.md`, depending on the exact environment.

If you work inside Antigravity, use the workspace `.agents/skills/` path. Global paths differ between Antigravity desktop/app and Antigravity CLI, so a public project should not rely on one universal global path.

If your Gemini environment does not discover `SKILL.md` as a native skill, adapt through `AGENTS.md` or `GEMINI.md`:

```markdown
# Personal Navigator

For Personal Navigator work, load and follow personal-navigator-skill/SKILL.md.
Use references/ only when needed.
Use templates/ to create the Navigator memory files.
```

## Hermes

Status: `SKILL.md` skills support.

Personal install:

```bash
mkdir -p ~/.hermes/skills
cp -R personal-navigator-skill ~/.hermes/skills/
```

If Hermes is configured to scan external skill directories, you can use a shared path:

```bash
mkdir -p ~/.agents/skills
cp -R personal-navigator-skill ~/.agents/skills/
```

## Aider and Other Environments Without Native Skills

Status: adapt through `AGENTS.md` or explicit file loading.

Use `AGENTS.md` as a bridge:

```markdown
# Personal Navigator

This repository contains a Personal Navigator skill in personal-navigator-skill/.

When the user asks to use Personal Navigator:

1. Read personal-navigator-skill/SKILL.md.
2. Read personal-navigator-skill/references/core.md and personal-navigator-skill/references/lifecycle.md.
3. Load other reference files only when needed.
4. Create or update the memory files from personal-navigator-skill/templates/.
5. Never invent missing personal data; use OPEN_LOOPS.md.
```

For Aider, you can point it at `AGENTS.md` from `.aider.conf.yml`:

```yaml
read: AGENTS.md
```

## How to Verify Installation

After installation, ask the agent:

```text
Which Personal Navigator skills or instructions are available in this project?
```

Then run the first practical scenario:

```text
Use Personal Navigator.
I do not have a Personality Map yet. Start a friendly interview with me and create memory files if you can.
```

Expected behavior:

- the agent says full navigation is not available without a Personality Map;
- it creates or offers to create the 4 memory files;
- it starts with the first Personality Map question;
- it does not make deep personal conclusions without data;
- it records gaps in `OPEN_LOOPS.md`.

## Sources

- OpenAI skills catalog: https://github.com/openai/skills
- Claude Code skills: https://code.claude.com/docs/en/skills
- Google Antigravity skills: https://antigravity.google/docs/skills
- Google Antigravity CLI migration: https://antigravity.google/docs/gcli-migration
- OpenCode skills: https://dev.opencode.ai/docs/skills
- Windsurf/Cascade skills: https://docs.windsurf.com/windsurf/cascade/skills
- GitHub Copilot / VS Code Agent Skills: https://code.visualstudio.com/docs/copilot/customization/agent-skills
- GitHub Copilot custom instructions: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions
- Cursor rules: https://docs.cursor.com/en/context
- AGENTS.md open format: https://agents.md/
