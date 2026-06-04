# Установка Personal Navigator Skill

Эта страница описывает, как установить или адаптировать `personal-navigator-skill` в популярных агентных средах.

Проверено по публичной документации 4 июня 2026 года. Так как агентные среды быстро меняются, перед релизами стоит сверять пути установки с актуальными docs.

## Что устанавливается

Основная папка skill:

```text
personal-navigator-skill/
  SKILL.md
  agents/openai.yaml
  references/
  templates/
```

Для полноценной работы Навигатору нужна среда, где агент может читать инструкции и создавать/обновлять файлы памяти:

- `NAVIGATOR_STATE.md`
- `PERSONALITY_MAP.md`
- `DEVELOPMENT_JOURNAL.md`
- `OPEN_LOOPS.md`
- `supplements/*.md`

Если среда не умеет автоматически работать с файлами, Навигатор всё равно можно использовать, но пользователь должен вручную сохранять файлы памяти по шаблонам.

Важно: внутренние reference-файлы skill написаны на английском как переносимое ядро, но все ответы пользователю, вопросы интервью, Карта, журнал, open loops, supplements и готовые блоки памяти должны создаваться на языке пользователя. Имена файлов и технические статусы могут оставаться стабильными английскими идентификаторами.

После установки перейдите к разделу [Как работать](QUICKSTART.md).

## Рекомендуемый универсальный путь

Для сред, поддерживающих открытый формат `SKILL.md`, самый переносимый вариант — положить skill в `.agents/skills/` внутри проекта:

```bash
mkdir -p .agents/skills
cp -R personal-navigator-skill .agents/skills/
```

Такой путь поддерживается несколькими современными агентными средами и хорошо подходит для open-source репозитория.

Для личной установки во всех проектах используйте глобальную директорию конкретной среды.

## Codex

Статус: нативная поддержка skills.

Личная установка:

```bash
mkdir -p ~/.agents/skills
cp -R personal-navigator-skill ~/.agents/skills/
```

После установки перезапустите Codex, чтобы skill появился в списке доступных skills.

Пример запуска:

```text
Use $personal-navigator-skill.
Хочу начать собирать мою Карту личности. Веди меня через дружеское интервью.
```

Когда skill будет опубликован в каталоге или доступен по GitHub URL, его можно будет устанавливать через `$skill-installer`.

## Claude Code

Статус: нативная поддержка `SKILL.md`.

Личная установка:

```bash
mkdir -p ~/.claude/skills
cp -R personal-navigator-skill ~/.claude/skills/
```

Установка внутри проекта:

```bash
mkdir -p .claude/skills
cp -R personal-navigator-skill .claude/skills/
```

Claude Code может загрузить skill автоматически по описанию или вручную через slash-команду:

```text
/personal-navigator-skill
```

Для project skills может потребоваться подтвердить trust для workspace.

## Antigravity

Статус: нативная поддержка skills в формате `SKILL.md`.

Установка внутри workspace:

```bash
mkdir -p .agents/skills
cp -R personal-navigator-skill .agents/skills/
```

Опциональная глобальная установка для Antigravity desktop/app, если ваша версия использует этот путь:

```bash
mkdir -p ~/.gemini/config/skills
cp -R personal-navigator-skill ~/.gemini/config/skills/
```

В новых версиях Antigravity основной workspace-путь — `.agents/skills/`. Старый `.agent/skills/` может поддерживаться для совместимости, но для нового проекта лучше использовать `.agents/skills/`.

Для Antigravity CLI глобальный путь может отличаться от desktop/app-пути. Если нужна именно глобальная CLI-установка, проверьте актуальную документацию Antigravity CLI; для переносимого публичного репозитория безопаснее использовать `.agents/skills/` внутри workspace.

## OpenCode

Статус: нативная поддержка `SKILL.md`.

Установка внутри проекта:

```bash
mkdir -p .opencode/skills
cp -R personal-navigator-skill .opencode/skills/
```

Глобальная установка:

```bash
mkdir -p ~/.config/opencode/skills
cp -R personal-navigator-skill ~/.config/opencode/skills/
```

OpenCode также ищет skills в совместимых директориях:

```text
.claude/skills/
~/.claude/skills/
.agents/skills/
~/.agents/skills/
```

Если вы хотите один путь для нескольких сред, используйте `.agents/skills/`.

## Windsurf / Cascade

Статус: нативная поддержка skills.

Установка внутри workspace:

```bash
mkdir -p .windsurf/skills
cp -R personal-navigator-skill .windsurf/skills/
```

Глобальная установка:

```bash
mkdir -p ~/.codeium/windsurf/skills
cp -R personal-navigator-skill ~/.codeium/windsurf/skills/
```

Windsurf/Cascade также может обнаруживать `.agents/skills/`, поэтому для кросс-платформенного репозитория можно использовать:

```bash
mkdir -p .agents/skills
cp -R personal-navigator-skill .agents/skills/
```

## GitHub Copilot / VS Code

Статус: нативная поддержка Agent Skills в VS Code / Copilot.

Установка внутри проекта:

```bash
mkdir -p .github/skills
cp -R personal-navigator-skill .github/skills/
```

Личная установка:

```bash
mkdir -p ~/.copilot/skills
cp -R personal-navigator-skill ~/.copilot/skills/
```

VS Code / Copilot также поддерживает совместимые пути:

```text
.claude/skills/
.agents/skills/
~/.claude/skills/
~/.agents/skills/
```

Если нужен общий путь для нескольких агентов, используйте `.agents/skills/`. Если проект ориентирован именно на Copilot, используйте `.github/skills/`.

## Cursor

Статус: для Cursor лучше использовать режим адаптации.

Официальная документация Cursor делает акцент на rules и `AGENTS.md`, а не на отдельной установке `SKILL.md` как нативного skill-пакета. Поэтому лучший вариант:

1. Оставить `personal-navigator-skill/` в репозитории.
2. Использовать готовый `AGENTS.md` из этого репозитория или добавить Cursor Project Rule.
3. В инструкции явно сказать агенту читать `personal-navigator-skill/SKILL.md` и нужные файлы из `references/`.

Минимальный `AGENTS.md`:

```markdown
# Personal Navigator

When the user asks for Personal Navigator, personality map, self-navigation, reflection, development journal, or Living Fire work, read:

- personal-navigator-skill/SKILL.md
- personal-navigator-skill/references/core.md
- personal-navigator-skill/references/lifecycle.md

Follow the skill exactly. Use templates from personal-navigator-skill/templates/ when creating memory files.
```

## Gemini CLI / Gemini Code Assist

Статус: использовать через Antigravity skills, `AGENTS.md` или `GEMINI.md`, в зависимости от конкретной среды.

Если вы работаете в Antigravity, используйте workspace-путь `.agents/skills/`. Глобальные пути отличаются между Antigravity desktop/app и Antigravity CLI, поэтому для публичного проекта не стоит полагаться на один универсальный global path.

Если ваша Gemini-среда не видит `SKILL.md` как skill, используйте адаптацию через `AGENTS.md` или `GEMINI.md`:

```markdown
# Personal Navigator

For Personal Navigator work, load and follow personal-navigator-skill/SKILL.md.
Use references/ only when needed.
Use templates/ to create the Navigator memory files.
```

## Hermes

Статус: поддержка skills в формате `SKILL.md`.

Личная установка:

```bash
mkdir -p ~/.hermes/skills
cp -R personal-navigator-skill ~/.hermes/skills/
```

Если Hermes настроен на внешние директории skills, можно использовать общий путь:

```bash
mkdir -p ~/.agents/skills
cp -R personal-navigator-skill ~/.agents/skills/
```

## Aider и другие среды без native skills

Статус: адаптация через `AGENTS.md` или явное чтение файлов.

Для таких сред используйте `AGENTS.md` как мост:

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

Для Aider можно добавить `AGENTS.md` в `.aider.conf.yml`:

```yaml
read: AGENTS.md
```

## Как проверить установку

После установки запустите агента и спросите:

```text
Какие skills или инструкции Personal Navigator доступны в этом проекте?
```

Затем проверьте первый рабочий сценарий:

```text
Use Personal Navigator.
У меня пока нет Карты личности. Начни со мной дружеское интервью и создай файлы памяти, если можешь.
```

Ожидаемое поведение:

- агент говорит, что без Карты полная навигация невозможна;
- создаёт или предлагает создать 4 файла памяти;
- начинает с первого вопроса по Карте личности;
- не выдаёт глубоких персональных выводов без данных;
- записывает пробелы в `OPEN_LOOPS.md`.

## Источники

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
