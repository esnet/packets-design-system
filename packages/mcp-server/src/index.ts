import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { getAllComponents, type PackageType } from "./components.js";
import { getStory } from "./stories.js";
import { getTokens } from "./tokens.js";

const server = new Server(
    { name: "packets", version: "0.1.0" },
    { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
        {
            name: "list_components",
            description:
                "List all available components in the Packets design system across React, Web Components, and CSS packages.",
            inputSchema: {
                type: "object",
                properties: {
                    package: {
                        type: "string",
                        enum: ["react", "web", "css", "all"],
                        description: "Filter by package type. Defaults to all.",
                    },
                },
            },
        },
        {
            name: "get_component",
            description:
                "Get TypeScript prop types and a usage example (Storybook story) for a specific Packets component.",
            inputSchema: {
                type: "object",
                properties: {
                    component_name: {
                        type: "string",
                        description: "Component name, e.g. PktsButton or PktsAlert",
                    },
                    package: {
                        type: "string",
                        enum: ["react", "web", "css"],
                        description:
                            "Which package to look in. Defaults to react if available.",
                    },
                },
                required: ["component_name"],
            },
        },
        {
            name: "search_components",
            description:
                "Search for Packets components by keyword across all packages. Searches component names and prop type definitions.",
            inputSchema: {
                type: "object",
                properties: {
                    query: {
                        type: "string",
                        description: "Search term, e.g. 'input', 'button', 'form', 'variant'",
                    },
                },
                required: ["query"],
            },
        },
        {
            name: "get_design_tokens",
            description:
                "Get Packets design tokens (colors, typography, sizing, motion, box-shadow). Omit category to see all top-level categories.",
            inputSchema: {
                type: "object",
                properties: {
                    category: {
                        type: "string",
                        enum: ["color", "typography", "size", "time", "font", "box-shadow"],
                        description: "Token category to filter by.",
                    },
                },
            },
        },
    ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    if (name === "list_components") {
        const pkgArg = args?.package as string | undefined;
        const pkg = pkgArg === "all" ? undefined : (pkgArg as PackageType | undefined);
        const components = getAllComponents(pkg);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(
                        components.map(c => ({ name: c.name, package: c.package })),
                        null,
                        2
                    ),
                },
            ],
        };
    }

    if (name === "get_component") {
        const componentName = args?.component_name as string;
        const pkgArg = (args?.package as PackageType) ?? "react";

        const all = getAllComponents();
        const nameLower = componentName.toLowerCase();
        const match = all.find(c => c.name.toLowerCase() === nameLower && c.package === pkgArg);

        if (!match) {
            const fallback = all.find(c => c.name.toLowerCase() === nameLower);
            if (fallback) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `"${componentName}" was not found in package "${pkgArg}" but exists in "${fallback.package}". Re-run with package="${fallback.package}" or omit the package argument.`,
                        },
                    ],
                };
            }
            return {
                content: [
                    {
                        type: "text",
                        text: `Component "${componentName}" not found in any Packets package.`,
                    },
                ],
            };
        }

        const story = getStory(match.name, match.package);
        const parts: string[] = [];
        if (match.types) {
            parts.push(`## TypeScript Types\n\`\`\`typescript\n${match.types}\n\`\`\``);
        }
        if (story) {
            parts.push(`## Storybook Story (usage example)\n\`\`\`typescript\n${story}\n\`\`\``);
        }
        if (parts.length === 0) {
            parts.push(`No type or story documentation found for "${componentName}" in package "${match.package}".`);
        }
        return { content: [{ type: "text", text: parts.join("\n\n") }] };
    }

    if (name === "search_components") {
        const query = (args?.query as string).toLowerCase();
        const all = getAllComponents();
        const results = all.filter(
            c =>
                c.name.toLowerCase().includes(query) ||
                c.types?.toLowerCase().includes(query)
        );
        return {
            content: [
                {
                    type: "text",
                    text:
                        results.length === 0
                            ? `No components found matching "${args?.query}".`
                            : JSON.stringify(
                                results.map(c => ({ name: c.name, package: c.package })),
                                null,
                                2
                            ),
                },
            ],
        };
    }

    if (name === "get_design_tokens") {
        const category = args?.category as Parameters<typeof getTokens>[0];
        const tokens = getTokens(category);
        return {
            content: [{ type: "text", text: JSON.stringify(tokens, null, 2) }],
        };
    }

    return { content: [{ type: "text", text: `Unknown tool: ${name}` }] };
});

const transport = new StdioServerTransport();
await server.connect(transport);
