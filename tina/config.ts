import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
// const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const branch = "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "publication",
        label: "Publications",
        path: "content/publications",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "authors",
            label: "Authors",
            required: true,
          },
          {
            type: "string",
            name: "year",
            label: "Year",
            required: true,
          },
          {
            type: "string",
            name: "journal",
            label: "Journal",
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            required: true,
          },
          {
            type: "string",
            name: "publicationType",
            label: "Publication Type",
            required: true,
            list: true,
            options: [
              { value: "Journal", label: "Journal" },
              { value: "Technical Report", label: "Technical Report" },
              { value: "Presentation", label: "Presentation" },
              { value: "Data", label: "Data" },
            ],
          },
        ],
      },
      {
        name: "download",
        label: "Downloads",
        path: "content/downloads",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "country",
            label: "Country",
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            required: true,
          },
        ],
      },
    ],
  },
});
