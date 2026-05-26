---
title: Workshop Checklists
section: qa
---

*Key takeaways and checklists from the all-hands QA session — May 2026.*

## The root problem

We're not putting ourselves in the shoes of the next person in line.

Before you pass your work — become the next user. Experience it from their seat.

## What this looks like when we get it wrong

- **Bug fix proof:** Showing a Bubble DB entry or workflow log instead of the actual UI the PM and client will test.
- **Design vs. reality:** Testing a feature marked "ready" and finding it looks nothing like the Figma design.
- **Half-baked "ready":** Marking a feature ready to test and finding out half of it isn't actually built.
- **The AI wall of text:** Writing a massive product spec with AI that nobody on the team actually reads or understands.

## The handoff chain

Every handoff has a next user. Know who yours is.

| Role | What you do | Your next user |
|------|-------------|----------------|
| Shapers / PMs | Define scope, write specs, facilitate sessions | Client to approve, team to validate |
| Designers | Create flows, frames, prototypes | Client to approve, dev to build |
| Developers | Build features, fix bugs, ship | Shaper + Designer to QA |

## Developer checklist

Before marking anything "ready to test":

1. I opened the app in **incognito** and ran the full flow from start to finish
2. I tested at least one **error state or edge case**, not just the happy path
3. I'm testing on **staging or preview** — not local, not a console log
4. Bug fix: I **reproduced the original bug as reported**, step by step in the UI, before and after
5. My proof is a **UI screenshot or a short Loom** of the actual flow — not a DB entry or workflow log
6. I compared my implementation with the **Figma design** side by side. They match.
7. I hovered over buttons, links, inputs, and interactive elements. **Hover effects work.**
8. I documented what was done in a **clear Linear note**

## Designer checklist

Before marking anything "ready to dev":

1. Every state is designed: **empty, loading, error, success**
2. **Desktop and/or mobile** is complete, depending on what's first in scope
3. The **responsive aspects** are contemplated and noted
4. All **copy is final.** The developer should not be choosing words.
5. Anything non-obvious is **annotated**: hovers, transitions, edge cases, constraints
6. I put together a **self-explanatory prototype or annotated flow**. A developer can build from this without asking a single question.

## Shaper / PM checklist

Before you hand off or present:

**Ready to dev / design:**

1. A dev or designer not in any meeting could read this and know **exactly what to build**
2. The **problem being solved** is stated, not just the solution
3. **Edge cases and out-of-scope** items are explicitly listed
4. **Success criteria** are defined: how will we know this is done?
5. Designs or prototypes are **linked and complete**

**Ready to present to client:**

6. There is a **prototype happy path** the client can use themselves
7. The client can understand it **without me narrating** every screen
8. I know the **one clear question** I'm asking them to answer

## The new baseline

From now on:

- **Test your own work by doing the task the next person in line will do.**
- **When you get a new task, raise your hand if it's not clear enough to move forward.** No dumb questions. Going ahead without clarity and coming back with the wrong solution costs everyone more time than asking upfront.
- **When asking isn't enough, hop on a call immediately.** 15 minutes of clarification can save hours of rework.
- **Don't waste other people's time.** Do a real QA and everyone else will be more efficient.
