# AISpec - AI Feature Development Assistant

![AISpec Screenshot](screenshot.png)

A VS Code extension that generates comprehensive feature prompts for AI-assisted development. Capture feature requirements, technical context, and development guidelines in a structured way.

## Features

- **Structured Feature Capture**: Form-based input for feature details
- **AI-Ready Prompts**: Generates complete prompts following best practices
- **Best Practices Embedded**: SOLID, YAGNI, DRY, KISS principles included
- **Security First**: Security checklist and secrets protection guidelines
- **Error Handling**: Resilience patterns, logging best practices
- **Incremental Development**: Plan structured from simple to complex tasks
- **Test Coverage**: 100% coverage guidelines included

## Requirements

- VS Code 1.60.0 or higher
- Git (for worktree feature)
- A workspace with an open project

## Installation

1. Clone this repository
2. Open the folder in VS Code
3. Press `F5` to run in development mode
4. Or publish to VS Code Marketplace (see Publishing section)

## Usage

### Open the Panel

1. Click the AISpec icon in the Activity Bar (sidebar)
2. Or use `Cmd/Ctrl + Shift + P` and search for "AISpec"

### Fill the Form

#### Workspace Section
- **Project**: Name of your project
- **Specs folder**: Where to store feature specs (default: `specs`)
- **Docs folder**: Where project documentation is located (default: `docs`)

#### Feature Section
- **Name**: Feature name (use `-` instead of spaces, e.g., `add-payment-webhook`)
- **Base branch**: Target branch to branch from (default: `develop`)
- **Type**: Feature type (F=Feature, B=Bug, M=Migration)
- **Create as git worktree**: Option to create a git worktree for this feature

#### Pull Request Section
- **Jira ticket**: Associated Jira issue (optional)
- **PR name**: Pull request name (auto-generated if empty)
- **Open as Draft**: Mark PR as draft
- **Tags**: GitHub labels to apply

#### References Section
- **Reference paths**: Additional documentation paths to include (one per line)

#### Description Section
- **Functional**: What the feature does, for whom, and why
- **Technical**: Stack, patterns, dependencies (optional)

### Generate Prompt

1. Fill in the required fields (marked with *)
2. Click **Generate Prompt**
3. Review the generated prompt in the output area
4. Click **Copy** to copy to clipboard

### Next Steps

1. Paste the prompt into your AI assistant (Claude, GPT, etc.)
2. The AI will:
   - Read project documentation
   - Analyze the codebase
   - Generate `context.md` with current state
   - Generate `plan.md` with phased implementation tasks
   - Implement following the plan
   - Run quality checks before opening PR

## Generated Prompt Structure

The generated prompt includes:

### 1. Discovery Phase
- Read all project documentation
- Analyze codebase patterns and architecture
- Review reference materials

### 2. Planning Phase
- Create folder structure
- Add folders to `.gitignore`
- Generate `context.md` (current state)
- Generate `plan.md` (phased implementation)

### 3. Implementation Phase
- Follow plan in complexity order
- Write tests alongside code
- Commit incrementally

### 4. Quality Assurance
- Run linters and analyzers
- Run tests (100% coverage target)
- Remove debug code
- Remove unused imports

### 5. Delivery
- Generate technical documentation
- Open PR with proper labels
- Save initial prompt for reference

## Best Practices Included

### Technical Principles
- **SOLID**: Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion
- **YAGNI**: You Aren't Gonna Need It
- **DRY**: Don't Repeat Yourself
- **KISS**: Keep It Simple

### Security Checklist
- Input validation
- SQL injection prevention
- XSS prevention
- No hardcoded secrets
- Environment variables for sensitive data

### Error Handling
- Log only on errors
- Propagate errors with full context
- Retry logic with exponential backoff
- Circuit breaker pattern

## Plan Structure

Tasks are organized in two dimensions:

### By Functionality
Group related features together.

### By Complexity
Within each functional unit:
1. Simplest to implement
2. Medium complexity
3. Most complex

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Generate Prompt | `Cmd/Ctrl + Enter` (when focused) |

## Extension Settings

Currently no configurable settings. All options are set via the form.

## Known Issues

None at this time.

## Roadmap

- [ ] Integration with AI APIs for auto-generation
- [ ] History of generated prompts
- [ ] Custom templates
- [ ] Team sharing capabilities
- [ ] Jira integration
- [ ] GitHub Actions integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

**Made with ❤️ for developers who work with AI**
