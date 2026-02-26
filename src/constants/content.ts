/**
 * Centralized content for the Fusion Admin Dashboard
 * This allows for easy mapping in Builder.io
 */

export const DASHBOARD_CONTENT = {
  title: "Fusion Admin",
  subtitle: "System Overview & Usage Monitoring",
  sidebar: {
    nav: [
      { label: "Dashboard", icon: "LayoutDashboard", href: "#" },
      { label: "Analytics", icon: "BarChart3", href: "#" },
      { label: "Local MCP", icon: "Cpu", href: "#" },
      { label: "GitHub Sync", icon: "Github", href: "#" },
      { label: "Settings", icon: "Settings", href: "#" },
    ],
    footer: {
      user: "herocalze11@gmail.com",
      status: "Online",
    }
  },
  stats: [
    { label: "Cloud Quota", value: "84%", trend: "up", description: "Approaching limit" },
    { label: "Local Indexing", value: "Active", trend: "stable", description: "Bypassing cloud" },
    { label: "MCP Latency", value: "12ms", trend: "down", description: "Optimized local" },
    { label: "Sync Status", value: "Healthy", trend: "stable", description: "GitHub connected" },
  ],
  localStrategy: {
    title: "Local-First Strategy",
    description: "Bypass usage limits by shifting indexing and execution to your local machine.",
    steps: [
      {
        id: "step-1",
        title: "Local Indexing",
        content: "Run `npx @builder.io/sdk@latest launch` to create a local tunnel."
      },
      {
        id: "step-2",
        title: "MCP Configuration",
        content: "Update `mcp.json` to prioritize local Puppeteer execution."
      },
      {
        id: "step-3",
        title: "Manual Bridge",
        content: "Export JSON from Builder.io and render locally using `RenderContent`."
      }
    ]
  }
};
