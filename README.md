# AISpec — AI Feature Development Assistant

<p align="center">
  <img src="images/just-make-it.png" alt="AISpec Plugin"/>
</p>

---

<p align="center">
  <strong>Stop prompting. Start shipping.</strong><br/>
  Generate structured, production-ready plans that ANY AI agent follows perfectly.
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=PonsMauro.aispec">
    <img src="https://img.shields.io/visual-studio-marketplace/v/PonsMauro.aispec?label=VS%20Code%20Marketplace&color=007ACC" alt="VS Code Marketplace"/>
  </a>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License"/>
</p>

---

## Imagine you're driving to vacation in your latest-model car...

**You have two options:**

| Without a map/GPS | With a map/GPS |
|---|---|
| you'll probably get lost | you arrive at your destination |
| you'll burn more gas (tokens) | you save gas |
| you'll take longer than planned | you get there faster |
| the stress ruins the vacation | you actually enjoy the trip |

---

## AI development is the same

Your AI tool (Claude, Cursor, Copilot, etc.) is like that latest-model car — powerful, fast, ready to go.

But if you ask it for code without a clear plan:

- ⏱️ Takes longer to get there
- ⛽ Burns more tokens
- 🛣️ Might take wrong paths
- 😤 Ends in frustration and code review

**With AISpec as your GPS:**

- 🗺️ Every step is mapped out
- ⛽ Optimal token usage
- 🏁 Code that exactly matches what you asked for

> [!TIP]
> AISpec doesn't replace your AI. It tells it exactly where to go and how to get there.

---

## The Problem (now in technical terms)

An SDD [Software Design Document — a document describing what to build] defines WHAT to build, but it doesn't enforce HOW. That's why AI improvises, forgets rules, and creates the mess you later fix in code review.

```
SDD → AI reads it → "Sounds good, I'll do it my way" → Code that doesn't match → Fix → Fix → Fix → Fix → Fix
```

Result:
- ❌ Rules forgotten by step 3
- ❌ Tests written after (if at all)
- ❌ Coverage around 30%
- ❌ 5-10 iterations per feature
- ❌ 100% token usage

> [!WARNING]
> Every "fix this" iteration costs tokens and money. 5-10 iterations = real money down the drain.

---

## The Contrast

| | FREE FORM | AISPEC |
|---|---|---|
| **Flow** | Ask code → Fix → Fix → Fix | ✅ Plan → Test → Execute → Verify |
| **Tests** | ❌ After (if any) | ✅ BEFORE (mandatory) |
| **Coverage** | ❌ ~30% | ✅ **100%** |
| **Rules** | ❌ Forgotten | ✅ **Embedded in every step** |
| **Iterations** | ❌ 5-10 | ✅ **1-2** |
| **Tokens** | ❌ 100% | ✅ **20-30%** |
| **Time** | ❌ Hours | ✅ **Minutes** |

---

## The Solution

**AISpec to the rescue**

AISpec transforms your SDD [what to build] into a complete TDD [Test-Driven Development] workflow:

- Creates a 7-step implementation workflow dynamically
- Forces AI to respect every step you specify
- Reduces 80-90% of tokens and time

> SDD → AISpec → TDD (7 steps) → Done

**No matter your level or seniority — AISpec brings a Senior Dev to every SDD you write.**

> [!IMPORTANT]
> You don't need to be senior to deliver senior-quality code. AISpec does the heavy lifting.

---

## Who Is AISpec For?

**Your AI has no agents defined?**  
AISpec replaces missing roles:
- Senior Developer → writes clean, tested code
- Architect → enforces project structure
- Senior QA → writes tests BEFORE code
- Tech Lead → enforces conventions
- Product Manager → validates acceptance criteria
- Security Analyst → includes security checks
- DevOps Engineer → validates deployments
- Database Administrator → ensures data integrity

**Your AI already has agents?**  
AISpec reinforces and optimizes the overall workflow.

---

## What Projects Is AISpec For?

- **Greenfield (new projects)** — start with the right architecture from day one
- **Brownfield (legacy projects)** — safely add features without breaking existing code

---

## The 7-Step Workflow

```
1. CONFIRM INPUT     → What + How
2. SHOW RULES      → Project conventions
3. GENERATE prompt-init.md → Brief + rules + test objectives
4. SCAN PROJECT   → context.md with architecture snapshot
5. GENERATE plan.md → Tests BEFORE code (KEY)
6. IMPLEMENT      → TDD cycle: test → code → verify
7. FINALIZE      → Tested code + PR
```

> [!IMPORTANT]
> Each step has an approval gate. AI doesn't proceed until you say so.

---

## 📦 Installation

### VS Code Marketplace
`Cmd/Ctrl + Shift + X` → Search "AISpec" → Install

### Command Line
```bash
code --install-extension PonsMauro.aispec
```

### Requirements
- VS Code 1.85.0+
- Git (optional)

---

## 🚀 Quick Start

1. **Open** AISpec panel in VS Code sidebar
2. **Fill** the form (project, feature, what, how)
3. **Click** Generate
4. **Copy** the prompt to your AI (Claude, Cursor, Windsurf, Copilot...)
5. **Follow** the 7-step workflow
6. **Approve** each step → Get tested code + PR

> [!NOTE]
> **Don't see the form?** Press `Cmd/Ctrl + Shift + P` → "Reload Window" to refresh VS Code.

---

## 🔑 What You Get

**Location:** `{project}/aispec/{feature}/`

| File | Purpose |
|------|---------|
| `prompt-init.md` | Brief + rules + test objectives |
| `context.md` | Project snapshot + architecture |
| `plan.md` | Steps with tests BEFORE code |

---

## 🌐 Works With

- **AI Tools**: Claude, Cursor, Windsurf, Copilot, GPT, Gemini, any LLM
- **Languages**: Python, JS, TS, Go, Rust, Java, C#, Ruby, PHP...
- **Frameworks**: React, Vue, Django, FastAPI, Rails, Laravel, Spring...
- **Architectures**: Hexagonal, Clean, Layered, Microservices...

> [!IMPORTANT]
> AISpec is a protocol, not a tool. The spec works with ANY AI execution layer.

---

<p align="center">
  <strong>Stop hoping your AI follows rules. Make it follow a protocol.</strong><br/>
  <em>AISpec — Structure your AI development.</em>
</p>

<p align="center">
  <img src="images/better-prompts.png" alt="AISpec Plugin"/>
</p>

---

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=PonsMauro.aispec">
    <img src="https://img.shields.io/visual-studio-marketplace/v/PonsMauro.aispec?label=VS%20Code%20Marketplace&color=007ACC" alt="VS Code Marketplace"/>
  </a>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License"/>
</p>

---

*MIT License — github.com/ponsmauro/aispec*