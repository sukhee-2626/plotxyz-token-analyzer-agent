export type FieldType = "text" | "textarea" | "number" | "checkbox";

export interface AgentField {
  name: string;
  label: string;
  type: FieldType;
  rows?: number;
  placeholder?: string;
}

export interface AgentConfig {
  slug: string;
  title: string;
  tagline: string;
  purpose: string;
  accent: string;
  features: string[];
  limitations: string[];
  fields: AgentField[];
  sample: Record<string, string | number | boolean>;
  repo: string;
}

export const agent: AgentConfig = {
  "slug": "plotxyz-token-analyzer-agent",
  "title": "Token Analyzer",
  "tagline": "Estimate token consumption before you send.",
  "purpose": "Counts tokens in supplied text, estimates per-call and monthly cost, and suggests ways to reduce token volume.",
  "accent": "#38bdf8",
  "features": [
    "Token and word counting",
    "Per-call and monthly cost estimates",
    "Token-reduction suggestions"
  ],
  "limitations": [
    "Token counts are approximations, not exact provider counts.",
    "Rates are user-supplied and may be outdated."
  ],
  "fields": [
    {
      "name": "text",
      "label": "Input text",
      "type": "textarea",
      "rows": 8,
      "placeholder": ""
    },
    {
      "name": "model",
      "label": "Model name",
      "type": "text",
      "rows": 4,
      "placeholder": ""
    },
    {
      "name": "calls_per_day",
      "label": "Calls per day",
      "type": "number",
      "rows": 4,
      "placeholder": ""
    },
    {
      "name": "rate_per_1k_usd",
      "label": "Cost per 1k tokens (USD)",
      "type": "number",
      "rows": 4,
      "placeholder": ""
    }
  ],
  "sample": {
    "text": "Summarize the attached meeting notes and extract action items with owners and due dates.",
    "model": "gpt-4o-mini",
    "calls_per_day": 500,
    "rate_per_1k_usd": 0.00015
  },
  "repo": "https://github.com/sukhee-2626/plotxyz-token-analyzer-agent"
};
