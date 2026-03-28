# AISpec - AI Feature Development Assistant

<p align="center">
  <img src="images/just-make-it.png" alt="Just Make It" width="60%"/>
  <img src="images/plugin-view.png" alt="AISpec" width="17%"/>
</p>

---

<p align="center">
  <strong>Generate perfect development plans for ANY AI agent</strong>
</p>

---

## 🤔 What is AISpec?

**AISpec generates structured development plans that ANY AI can follow perfectly.**

Instead of writing prompts manually, fill a simple form and get a complete, production-ready plan.

---

## 😤 Problems AISpec Solves

| Problem | AISpec Solution |
|---------|-----------------|
| ❌ "The AI keeps forgetting our project rules" | ✅ Rules copied into EVERY step |
| ❌ "Different AIs give different results" | ✅ Works with ANY AI consistently |
| ❌ "Architecture gets ignored" | ✅ Architecture reminder in every step |
| ❌ "Conflicts between team members' AI rules" | ✅ Detects and resolves conflicts |
| ❌ "AI adds features I didn't ask for" | ✅ Plan approval before implementation |
| ❌ "Quality checks forgotten" | ✅ Mandatory checks (REUSE, SECURITY, etc.) |

---

## 🎁 What You Get

When you click **Generate Prompt**, you get:

### 📄 `context.md` - Project Snapshot
Everything about your project in one file:
- User's Vision (refined)
- AI Config Files Detected
- Architecture & Conventions
- Current Status & Tech Debt
- Decisions Made

### 📋 `plan.md` - Implementation Plan
Every step includes:
- ✅ Rules copied directly
- ✅ Mandatory checks (REUSE, PERFORMANCE, SECURITY)
- ✅ Architecture reminder
- ✅ Acceptance criteria

> _"It works with Claude, GPT, Gemini, Cursor, Windsurf... any AI you prefer."_

---

## ✨ Key Features

### 🧠 Smart Discovery
Automatically finds and reads:
- `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.cursorrules`
- Your project's documentation
- Architecture guidelines
- Any file with rules/conventions

### ⚡ No More Forgotten Rules

```
Every plan step includes:
📋 RULES FOR THIS STEP (copied directly)
   - Naming: camelCase for functions
   - Indentation: 2 spaces
   - Error handling: use Either pattern

🔍 MANDATORY CHECKS
   - REUSE: Search existing code
   - PERFORMANCE: Check for N+1 queries
   - BROWNFIELD: What uses this code?
   - SECURITY: Input validation?
```

### 🤝 Conflict Resolution
Detects conflicting rules and asks you which one to follow:
```
⚠️ CONFLICT: Indentation
1. 2 spaces (3 files)
2. Tabs (1 file)
Which rule? [1/2/Other]
```

### 🏗️ Architecture Always Respected
Every step reminds: _"Respect the Hexagonal architecture"_

---

## 🎨 Generated Output

When you click **Generate Prompt**, you get:

### 📄 `context.md` - Project Snapshot
```
- User's Vision (refined)
- AI Config Files Detected
- Architecture & Conventions
- Current Status & Tech Debt
- Decisions Made
```

### 📋 `plan.md` - Implementation Plan
```
Step 1: Setup project
├── RULES FOR THIS STEP (mandatory)
├── MANDATORY CHECKS (REUSE, PERFORMANCE, etc.)
├── ARCHITECTURE REMINDER
└── Acceptance Criteria

Step 2: Implement service
├── ...
```

---

## 🚀 Quick Start

1. Open VS Code Command Palette (`Cmd/Ctrl + Shift + P`)
2. Type **"AISpec"** and press Enter
3. Fill the form:
   - Project name
   - Feature name
   - Description
   - Architecture (or let it auto-detect)
4. Click **Generate Prompt**
5. Copy and paste into **any AI assistant**

---

## 💡 Perfect For

| Use Case | Why AISpec? |
|----------|-------------|
| 🔄 **Multiple AIs** | Works with Claude, GPT, Gemini, etc. |
| 📋 **Team Consistency** | Everyone follows the same rules |
| 🏗️ **Legacy Projects** | Discover and respect existing patterns |
| 🔍 **Quality Focus** | Mandatory checks prevent mistakes |
| 📚 **Documentation** | Auto-generates context and docs |

---

## 🔧 What Gets Considered

### During Discovery
- ✅ AI config files (AGENTS.md, CLAUDE.md, etc.)
- ✅ Project documentation
- ✅ Architecture patterns
- ✅ Coding conventions
- ✅ Testing requirements

### During Planning
- ✅ Rules copied into each step
- ✅ Mandatory checks (REUSE, PERFORMANCE, SECURITY)
- ✅ Architecture reminders
- ✅ User vision validation
- ✅ Conflict resolution

### During Implementation
- ✅ Step-by-step with validation
- ✅ Tests alongside code
- ✅ Linter compliance
- ✅ Incremental commits

### During QA & Delivery
- ✅ Quality tools execution
- ✅ Coverage verification
- ✅ Documentation generation
- ✅ PR preparation

---

## 🌟 Why AISpec?

| Feature | AISpec | Manual Prompts |
|---------|--------|----------------|
| Auto-discover project rules | ✅ | ❌ |
| Copy rules into each step | ✅ | ❌ |
| Conflict detection | ✅ | ❌ |
| Architecture reminders | ✅ | ❌ |
| Mandatory checks | ✅ | ❌ |
| Works with ANY AI | ✅ | ❌ |
| Context snapshot | ✅ | ❌ |

---

## 📦 Requirements

- **VS Code** 1.85.0 or higher
- **Git** installed (for branch/worktree features)
- **Any AI assistant** (Claude, GPT, Gemini, etc.)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<p align="center">
  <strong>Made for developers who want AI-assisted development done right</strong>
</p>

---

<p align="center">
  <img src="images/better-prompts.png"/>
</p>
