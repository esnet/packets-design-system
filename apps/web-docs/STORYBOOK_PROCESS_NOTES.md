# Web Component Storybook Fine-Tuning Process Notes

This document outlines the common issues encountered when creating Storybook stories for web components and the solutions applied.

## Common Issue #1: Slotted Content Not Rendering

**Problem:** Web components that use `<slot>` for content don't automatically render Storybook args as slotted content.

**Examples:**
- ESIconButton - icon wasn't appearing
- ESDatum - value text wasn't showing
- ESChip - label wasn't showing
- ESBadge - label wasn't showing

**Solution:** Add a `render` function in the meta configuration that:
1. Creates the web component element
2. Sets properties/attributes from args
3. Inserts content into slots via `textContent` or `appendChild`

```typescript
const meta = {
  // ...
  render: (args) => {
    const element = document.createElement(Component.tagName);
    if (args.property) element.property = args.property;
    if (args.slotContent) element.textContent = args.slotContent;
    return element;
  },
};
```

## Common Issue #2: JSON String Arguments

**Problem:** Stories passing `JSON.stringify()` values that should be JavaScript objects.

**Examples:**
- ESDataTable - columns and data were JSON strings
- ESCommaSeperatedList - items were JSON strings
- ESTabs - tabs were JSON strings
- ESBreadcrumbs - crumbs were JSON strings

**Solution:**
1. Update argTypes to use `control: "object"`
2. Add render function that accepts objects (not JSON strings)
3. Pass plain JavaScript objects/arrays in story args

```typescript
argTypes: {
  items: {
    control: "object",
  },
},
render: (args) => {
  const element = document.createElement(Component.tagName);
  if (args.items && Array.isArray(args.items)) {
    // Use items directly as array
    args.items.forEach(item => {
      // Create child elements
    });
  }
  return element;
},
```

## Common Issue #3: Complex Component Children

**Problem:** Components that expect specific child element structures.

**Examples:**
- ESCommaSeperatedList - needs `<li>` children
- ESTabs - needs `<li class="es-tab">` with `<a>` inside
- ESBreadcrumbs - needs `<li>` with optional `<a>` links
- ESButtonGroup - needs `<li>` with ESButton inside

**Solution:** Render function creates proper DOM structure:

```typescript
render: (args) => {
  const container = document.createElement(Container.tagName);

  args.items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'appropriate-class';

    // Add children (links, buttons, text, etc.)
    const child = document.createElement('a');
    child.href = item.href || '#';
    child.textContent = item.label;
    li.appendChild(child);

    container.appendChild(li);
  });

  return container;
};
```

## Common Issue #4: Nested Components

**Problem:** Web components that contain other web components.

**Examples:**
- ESIconButton - contains ESIcon
- ESButtonGroup - contains ESButton elements

**Solution:** Render function creates and nests web components:

```typescript
render: (args) => {
  const parent = document.createElement(ParentComponent.tagName);

  const child = document.createElement(ChildComponent.tagName);
  child.property = args.childProperty;

  parent.appendChild(child);
  return parent;
};
```

## Common Issue #5: Demonstrating Component Groups

**Problem:** Some components are meant to be used in groups (radio buttons, multiple items).

**Examples:**
- ESInputRadioButton - needs multiple buttons with same name attribute

**Solution:** Create render function that generates multiple instances with proper grouping:

```typescript
render: (args) => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '12px';

  args.options.forEach(option => {
    const wrapper = document.createElement('label');
    const radio = document.createElement(ESInputRadioButton.tagName);
    radio.name = args.groupName; // Same name for all
    radio.value = option.value;
    if (args.selectedValue === option.value) radio.checked = true;

    const label = document.createElement('span');
    label.textContent = option.label;

    wrapper.appendChild(radio);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });

  return container;
};
```

## Common Issue #6: Empty Component Demonstrations

**Problem:** Components that are just containers showing nothing without content.

**Examples:**
- ESCard - just an empty box without demo content

**Solution:** Add render function with meaningful demo content:

```typescript
render: (args) => {
  const card = document.createElement(ESCard.tagName);

  const title = document.createElement('h3');
  title.textContent = 'Card Title';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'This is example card content.';

  card.appendChild(title);
  card.appendChild(paragraph);

  return card;
};
```

## Common Issue #7: Attribute vs Property Naming

**Problem:** Story args don't map to component API correctly.

**Examples:**
- ESAvatar - story had `initials` arg but component uses `alt` attribute
- ESAlert - component has `title` attribute but also uses slot for message

**Solution:** Map args to correct properties/attributes in render function:

```typescript
render: (args) => {
  const element = document.createElement(Component.tagName);
  if (args.initials) element.alt = args.initials; // Map to correct attribute
  if (args.message) element.textContent = args.message; // Map to slot
  return element;
};
```

## Common Issue #8: Component Dynamic Behavior Not Working

**Problem:** Component features requiring DOM manipulation don't work as expected.

**Examples:**
- ESInputSearch - magnifying glass icon not rendering on initial load

**Solution:** Fix the web component implementation itself:
- Use `insertAdjacentHTML` to dynamically add elements
- Attach event listeners to trigger re-renders
- Ensure initial render creates all necessary DOM elements

## Common Issue #9: Storybook Layout Issues

**Problem:** Components with absolutely positioned popups get cut off.

**Examples:**
- ESInputDate - date picker popup cut off
- ESInputDateRange - date range selector cut off

**Solution:** Add decorators to provide sufficient space:

```typescript
decorators: [
  (Story) => {
    const wrapper = document.createElement('div');
    wrapper.style.minHeight = '280px'; // Enough for popup
    const story = Story();
    wrapper.appendChild(story);
    return wrapper;
  },
],
```

## Common Issue #10: CSS Fixes Required

**Problems encountered:**
- ESAlert close button positioning and color
- ESTabs text wrapping in tab labels
- Textarea dark mode styling

**Solutions:**
1. Add/update CSS rules in ui-css package
2. Rebuild ui-css
3. Rebuild Storybook to pick up CSS changes

Example CSS fixes:
```css
/* Tab labels shouldn't wrap */
.es-tab a {
  white-space: nowrap;
}

/* Close button positioning */
.es-alert aside:last-child {
  align-self: flex-start;
  margin-left: auto;
}

/* Dark mode close button color */
.dark .es-alert aside:last-child button svg {
  color: var(--esnet-color-dark-copy, #e6e6e6);
}
```

## Best Practices Summary

1. **Always add render functions** - Don't rely on automatic arg mapping for web components
2. **Understand component API** - Check if component uses slots, attributes, or properties
3. **Pass objects, not JSON strings** - Use `control: "object"` and pass plain JS
4. **Create realistic examples** - Show components with meaningful content
5. **Test interactivity** - Ensure clicks, selections, and state changes work
6. **Match React patterns** - Look at React stories for inspiration on structure
7. **Use proper grouping** - Group related items (radio buttons, tabs, etc.)
8. **Add decorators when needed** - For layout issues like popups needing space
9. **Fix web components if needed** - Sometimes the component code needs fixing, not just stories
10. **Make stories configurable** - Use Storybook controls to make examples interactive

## File Organization

Web component stories location: `/apps/web-docs/src/`
Naming convention: `Component.stories.ts`

Each story should have:
- Meta configuration with render function
- Multiple story examples showing different use cases
- Configurable args using Storybook controls
- Clear, descriptive story names

## Testing Checklist

For each component story:
- [ ] Component renders visually
- [ ] All props/attributes are configurable via controls
- [ ] Multiple meaningful examples provided
- [ ] Slotted content appears correctly
- [ ] Interactive features work (clicks, selections, etc.)
- [ ] Component works in both light and dark mode
- [ ] Layout has sufficient space (no cutoffs)
- [ ] Matches or improves upon React component examples
