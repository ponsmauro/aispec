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
  <img src="https://img.shields.io/badge/version-0.0.17-blue" alt="Version"/>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License"/>
</p>

---

## 😤 The Problem

You're coding with AI, but:
- ❌ AI forgets your project rules
- ❌ AI adds features you didn't ask for  
- ❌ AI skips important steps
- ❌ Quality checks are forgotten
- ❌ You spend more time fixing AI mistakes than coding

**Sound familiar?** That's because AI prompts are too vague. AISpec makes them **impossible to ignore**.

---

## 💰 Save Tokens, Save Money

**The hidden cost of AI-assisted development:** Every "fix this" iteration costs tokens and money.

| Without AISpec | With AISpec |
|----------------|-------------|
| ❌ AI forgets rules → 3-5 corrections | ✅ Rules copied into every step |
| ❌ Skips quality checks → bugs found later | ✅ Mandatory checks at each step |
| ❌ "Just make it work" → technical debt | ✅ Architecture enforced from start |
| ❌ Multiple iterations → $$ wasted | ✅ First-attempt accuracy |
| 💸 **5-10 iterations** = Token costs add up | 💰 **1-2 iterations** = Minimal costs |

**Typical savings: 50-80% reduction in AI token costs per feature**

---

## ⚡ Optimized for AI-Assisted Development

Love AI-assisted coding? Hate fixing AI mistakes?

AISpec keeps your velocity while adding just enough structure:

- **PLAN MODE** → Discovery before coding (no more "oops, wrong approach")
- **7-step workflow** → AI follows your rules perfectly, not "creatively"
- **Human checkpoints** → You approve before AI continues (no surprises)
- **Works with ANY AI** → Claude, GPT, Cursor, Windsurf, Copilot, Gemini...

**Code faster. Fix less. Ship more.**

---

## 🤔 What is AISpec?

AISpec attempts to solve the biggest problem with AI-assisted development: **AI agents TRY to follow instructions, but they forget, skip steps, and make assumptions.**

You fill a simple form, and AISpec generates a complete 7-step development plan with:
- Rules copied into EVERY step
- Mandatory quality checks
- Architecture enforcement
- User approval at each stage

**Works with Claude, GPT, Gemini, Cursor, Windsurf, or ANY AI.**

---

## 🌐 Universal Compatibility

AISpec is **completely agnostic** — it doesn't care what you use:

| Category | Works With |
|----------|------------|
| **AI Agents** | Claude, GPT-4, Gemini, Cursor, Windsurf, Copilot, Codeium, any LLM |
| **Languages** | Python, JavaScript, TypeScript, Go, Rust, Java, C#, Ruby, PHP, any |
| **Frameworks** | React, Vue, Angular, Django, FastAPI, Rails, Laravel, Spring, any |
| **Architectures** | Hexagonal, Clean, Layered, Microservices, Serverless, any |
| **Project Types** | New projects, legacy code, greenfield, brownfield |

**You don't change your stack. AISpec adapts to it.**

---

## 🌟 Comparison

| Feature | AISpec | Manual Prompting |
|---------|--------|------------------|
| Rules in every step | ✅ | ❌ |
| Auto-detect project rules | ✅ | ❌ |
| Conflict detection | ✅ | ❌ |
| Architecture enforcement | ✅ | ❌ |
| Quality checks | ✅ | ❌ |
| Human approval workflow | ✅ | ❌ |
| Works with ANY AI | ✅ | ❌ |

---

## 🎁 What You Get

AISpec generates three key files that guide AI agents through your feature development.

**Location:** `{your-project}/{specs-folder}/{feature-name}/`

When you click **Generate & Copy**, you get ready-to-use prompts for:

### 📄 `prompt-init.md` — Initial Setup
- All input data collected from the form
- Project configuration and rules
- Reference documentation paths
- Foundation for the entire workflow

### 📄 `context.md` — Project Snapshot
- Your refined vision
- AI config files detected
- Architecture & conventions
- Current status & tech debt
- Decisions made

### 📋 `plan.md` — Implementation Plan
```
### Step 1: Create base structure
├── RULES: (copied from your files)
├── CHECKS: REUSE, PERFORMANCE, SECURITY
├── ARCHITECTURE: (Hexagonal/Layered/etc)
└── ACCEPTANCE: Project compiles

### Step 2: Implement feature
├── RULES: (copied from your files)
├── CHECKS: REUSE, PERFORMANCE, SECURITY
└── ...
```

---

## ✨ Why AISpec Works

### 1. Rules That Actually Get Followed

```
Every plan step includes:
📋 RULES (copied directly, not referenced)
   • "Use camelCase for functions"
   • "2-space indentation"
   • "NO magic strings or numbers - use named constants"

🔍 MANDATORY CHECKS
   • PLAN MODE: Discovery before coding
   • REUSE: Search existing code first
   • ARCHITECTURE: Does this comply with the design?
   • PERFORMANCE: Check for N+1 queries
   • SECURITY: Input validation?
   • BROWNFIELD: What else uses this?
```

### 2. 7-Step Workflow With Human Approval

```
STEP 0: SWITCH TO PLAN MODE - Discovery & planning phase
STEP 1: Confirm Input Data (user approves)
STEP 2: Show Plugin Rules (mandatory)
STEP 3: Create prompt-init.md (rules file)
STEP 4: Read Project & Create context.md
STEP 5: Generate Plan (ask doubts first)
STEP 6: Implement (with validation)
STEP 7: Finalize & QA
```

### 3. Greenfield & Brownfield Support

| New Project (Greenfield) | Existing Project (Brownfield) |
|--------------------------|-------------------------------|
| Creates base structure first | Scans existing code patterns |
| Sets up architecture | Respects current patterns |
| Generates boilerplate | Integrates with existing |

### 4. Conflict Detection

AISpec finds conflicting rules and asks YOU which one to follow:
```
⚠️ CONFLICT: Indentation
  1. 2 spaces (3 files)
  2. Tabs (1 file)
  
Which rule? [1/2]
```

### 5. Auto-Detection

Automatically discovers:
- **AI Agent Configs**: `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `.windsurfrules`, etc.
- Your project's documentation
- Architecture guidelines
- Existing code patterns
- Reusable constants and code

---

## 🎯 Perfect For

| Use Case | Why AISpec? |
|----------|-------------|
| **All AI Users** | Save 50-80% tokens by getting it right the first time |
| **Vibe Coding** | Structure prevents AI from going off-track |
| **Multiple AIs** | Same results with Claude, GPT, Cursor... |
| **Team Projects** | Everyone follows the same rules |
| **Legacy Code** | Discovers and respects existing patterns |
| **Quality Focus** | Mandatory checks prevent mistakes |
| **AI Beginners** | Learn best practices with guided structure |
| **Cost Conscious** | Less iterations = less token costs |

---

## 🔧 Features

- ✅ **Universal Compatibility** — Any AI, any language, any framework, any architecture
- ✅ **Dark/Light Theme** — Respects your VS Code theme
- ✅ **One-Click Copy** — Generates and copies to clipboard
- ✅ **7-Step Workflow** — With PLAN MODE and user approval at key points
- ✅ **Rule Enforcement** — Copied into every single step (NO magic strings/numbers)
- ✅ **Quality Checks** — REUSE, ARCHITECTURE, PERFORMANCE, SECURITY, etc.
- ✅ **Conflict Resolution** — You choose which rules to follow
- ✅ **Architecture Reminders** — Every step respects your design
- ✅ **Greenfield Support** — Creates base structure first
- ✅ **Brownfield Support** — Scans and respects existing patterns
- ✅ **AI Agent Detection** — Auto-discovers CLAUDE.md, .cursorrules, .windsurfrules, etc.

---

## 📦 Requirements

- **VS Code** 1.85.0+
- **Git** (optional, for branch/worktree features)
- **Any AI assistant** — Claude, GPT, Gemini, Cursor, Windsurf, etc.

---

## 📥 Installation

### From VS Code Marketplace (Recommended)
1. Open VS Code
2. Go to **Extensions** (`Cmd/Ctrl + Shift + X`)
3. Search for **"AISpec"**
4. Click **Install**
5. Reload VS Code if prompted

**Don't see it in the marketplace?** The extension may still be in review. Use the VSIX method below.

### From VSIX File (Manual Install)
```bash
# 1. Download the .vsix file from GitHub releases
# 2. Install via command line:
code --install-extension aispec-0.0.17.vsix

# Or install from VS Code:
# Extensions → ... → Install from VSIX
```

### Troubleshooting
- **Not found in marketplace**: Install manually using VSIX file above
- **Installation fails**: Check VS Code version (requires 1.85.0+)
- **Extension not loading**: Reload VS Code window (`Cmd/Ctrl + Shift + P` → "Reload Window")

---

## 🚀 Quick Start

1. Open VS Code → Click **AISpec** in the sidebar
2. Fill the form:
   - Project name & folder
   - Feature name
   - What & how (descriptions)
   - Architecture (or leave blank for auto-detect)
3. Click **Generate & Copy** 
4. Paste into **any AI assistant**
5. Watch it follow YOUR rules perfectly

---

<p align="center">
  <strong>Stop debugging AI mistakes. Start shipping.</strong><br/>
  <em>AISpec — Structure your AI development.</em>
</p>

<p align="center">
  <img src="images/better-prompts.png" alt="AISpec Plugin"/>
</p>
