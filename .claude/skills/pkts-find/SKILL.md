---
name: pkts-find
description: Find the right Packets Design System component for a given need. Use when the user describes what they want to build or display and is unsure which component to use. Trigger phrases: "what component should I use for", "which Packets component", "I need a Packets component that", "help me find a Packets component", "is there a Packets component for", "what's the best component for". Do not trigger for parity gap questions like "which components are missing from Web" or "find missing components" — those are handled by component-audit.
metadata:
  author: ESnet
  category: discovery
  tags: [packets, design-system, components, discovery]
---

# pkts-find

Helps users discover the right Packets Design System component when they know what they want to accomplish but not which component to use.

## Instructions

1. Read `.claude/skills/pkts-find/references/component-catalog.md` to load the full component list.

2. Match the user's description against the Component, Description, and Keywords columns using fuzzy matching. Partial matches are fine.

3. Return the top 1 to 3 matches. Ranking: exact keyword match over partial; more specific component over generic. When many components match a vague query (e.g. "input"), prefer the one whose primary Category matches the user's context. For each match include:
   - Component name
   - One-line description
   - Which platforms it is available on (CSS, React, Web)
   - The next step to get usage code

4. If no match is found, say so clearly. Suggest the closest alternative, then recommend the right skill: if the user mentioned React or a React framework, recommend `/pkts-react`; if they mentioned vanilla HTML, Web Components, or no framework, recommend `/pkts-web`; otherwise default to `/pkts-react` with a note that `/pkts-web` is available for framework-free contexts.

## Output Format

For each match:

**`<ComponentName>`** - <one-line description>
Available on: <CSS / React / Web>
To get usage code: `/pkts-react <ComponentName>` or `/pkts-web <ComponentName>` or `/pkts-css <ComponentName>`

## Rules

- Do NOT load any component source files — only the catalog.
- Do NOT generate usage code — that is the job of `pkts-react`, `pkts-web`, and `pkts-css`.
- Return at most 3 results. If many components match, prefer the most specific one.
- If the user specifies a platform (e.g. "in React"), note which matches are available there.
