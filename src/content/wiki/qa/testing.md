---
title: Testing Process
section: qa
---

*Standards and workflows — Version 2.0, March 2026*

## Testing philosophy at Jams

Testing is not a separate stage of development. It's part of every developer's core responsibility. A build without testing is not complete.

Four principles drive this:

**Quality and speed go together.** A disciplined testing process makes us faster in the long run. Bugs in production cost exponentially more than the time spent on internal testing.

**Developer ownership.** Every developer is the first and primary person responsible for testing their own work. Testing is a critical skill, not optional.

**Transparency and collaboration.** UX and other team members bring perspectives the developer can't see. Collaboration raises quality.

**The real cost of skipping testing:**
- Client impact: lost trust, frustration, roadmap delays
- Team impact: urgent rework, stress, time stolen from new features
- Agency impact: reputation, contract renewals, referrals

## Full testing flow

`Dev Branch → Testing → Iterations (Dev Branch) → Re-testing → Sync Main → Main → Production`

`main` always contains 100% complete, tested work.

## Internal testing (branch: `testing`)

1. Developer merges their dev branch into `testing`
2. Developer tests their own work exhaustively
3. UX audits interface, flows, and does functional review
4. Decision: bugs found → back to dev branch. All clear → proceed to Main

## Ready to Main (Dev to Main)

1. Merge `main` into dev branch to resolve any conflicts
2. Merge dev branch into `main` (all tested and complete)
3. Optional client validation on `main` (not a blocker)
4. Deploy from `main` to Live when appropriate

## UX participation in testing

UX audits are part of internal testing. Their role:

- **Interface audit:** Visual consistency, design alignment, responsive behavior
- **Flow validation:** End-to-end user experience, micro-interactions, visual feedback
- **Functional review:** Testing functionality from a user perspective, without technical bias
- **Edge case detection:** Catching cases the developer may overlook (ideally caught during definition, but UX acts as a safety net)

Format: audit sessions on the `testing` branch before merging to `main`.

## Hotfix management

If there's a bug in production, it's critical by definition. The distinction is the urgency of the deploy, not the importance of the problem.

**Immediate hotfix** — criteria:
- Functionality completely broken
- Critical data error
- Security issue
- Direct impact on active users

Process: create a `hotfix` branch from Live → test together (dev + another team member) → deploy directly to Live → branch closes after deploy.

**Planned hotfix** — criteria:
- Minor bug with no critical impact
- UX/UI improvement
- Performance optimization
- Copy or content adjustment

Process: standard flow — `dev → testing → main → production`.

The decision of Immediate vs. Planned is shared between the Delivery Manager (technical judgment), PM (business/client judgment), and Developer (risk knowledge). Client urgency can justify treating a planned hotfix as immediate — that's a conscious business decision made as a team.

## Roles and responsibilities

**Developer**
- Absolute owner of testing their own work
- Exhaustive testing on dev branch
- Merge to `testing` when complete
- Sync `main` before final merge
- Respond to UX and client feedback
- Document critical technical decisions in writing
- Record video evidence of the working feature per acceptance criteria

**UX team**
- UI/UX audit on `testing` branch
- User flow validation
- Functional review without technical bias
- Constructive, timely feedback
- Visual inconsistency detection
- Safety net for edge cases
- Hotfix classification (shared)

**Delivery Manager**
- Hotfix classification (shared with PM and dev)
- Escalation of blockers the team can't resolve (disappeared client, critical architecture decisions, Bubble issues)
- Weekly process review
- Coaching on testing best practices
- Final decision on ambiguous cases

## Branch structure

| Branch | Purpose |
|--------|---------|
| `main` | Client testing + deploy to production |
| `testing` | Internal team QA (MANDATORY) |
| `dev-feature-x` | Developer's specific branch |
| `dev-feature-x-1` | Sub-branch for specific components |

**Naming rules:**
- `testing` — must use this exact name
- `main` — exists automatically in Bubble
- Developer branches — any name using letters, numbers, and hyphens

Valid examples: `feature-auth`, `matias-dashboard`, `sprint-2-users`, `fix-payments`

**Branch purposes:**
- `main`: Ready to show the client and deploy. Everything here must be 100% internally tested.
- `testing`: Exclusive internal QA environment. Multiple features can coexist here.
- `dev-*`: Developer work in progress. Total freedom to experiment, break, iterate.

**Risk: Mutual feature blocking**

Scenario: Feature A is on `main` waiting for client feedback, Feature B is ready for production.

Consequence: Feature B is blocked until Feature A is resolved.

Mitigation: Extreme discipline in internal testing to minimize iterations on `main`.

## Detailed workflow

**Step 1: Development and testing on own branch**

Work freely on `dev-feature-x`. Test exhaustively. Merge to `testing` when complete.

**Step 2: Merge to Testing**

In Bubble editor: Version Control → Merge changes from `dev-feature-x` to `testing`. Multiple features can be in testing simultaneously — some complete, some not.

**Step 3: Internal Testing**

UX does UI/UX audit and functional review. Bugs found → back to dev branch, fix, re-merge to `testing`.

**Step 4: Sync with Main (CRITICAL — never skip this)**

Before merging your branch to `main`, always merge `main` into your dev branch first: `main → dev-feature-x` (resolve conflicts here). This ensures your feature is compatible with everything already in `main`.

**Step 5: Merge to Main**

- CORRECT: `dev-feature-x → main`
- INCORRECT: `testing → main` (testing NEVER goes to main)

Reason: Testing may contain multiple features, some not yet validated. Only send to `main` what is complete.

**Step 6: Client tests on Main (optional)**

Client can access the Development environment on branch `main` to validate functionality. Not a blocker. Make active follow-ups if the project requires approval.

**Step 7: Deploy to Production**

After client approval (if applicable), deploy from `main` to Live.

## Verification checklists

**Pre-Merge to Testing**
- [ ] I completed the functionality per scope
- [ ] I tested exhaustively on my dev branch
- [ ] The feature is mobile-responsive (if required)

**Pre-Merge to Main**
- [ ] Passed full internal testing
- [ ] UX validated and approved
- [ ] I synced `main` into my dev branch
- [ ] I resolved all conflicts
- [ ] I documented critical changes

**Pre-Deploy to Production**
- [ ] Client formally approved (per project requirements)
- [ ] I verified `main` is 100% functional

## Special cases

**Projects without branches (Starter Plan)**

1. Develop on the Development branch (single environment)
2. Cross-testing by another team member — MANDATORY
3. Client tests on Development
4. Direct deploy to Live after approval

Note: Cross-testing is critical to compensate for the lack of testing branches.

**Multiple devs on the same project**

Each developer has their own branch (`dev-A-feature`, `dev-B-feature`). When Dev B finishes first, they can merge to `main` without waiting for Dev A — their branch doesn't contain Dev A's work.

**Bug detected after merging to Main**

1. Document the bug
2. Determine if it depends on your branch:
   - If NOT: check if it's already in Live. If in Live, deploy can continue if necessary. If not in Live, resolve before deploy using a new branch.
   - If YES: it was likely missed in internal testing. Roll back using a `main` savepoint. Validate in testing and fix on dev branch (same cycle as a bug detected in testing).

Note: Depending on the case, `main` is blocked for other deploys.
