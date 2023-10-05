import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = "main";

export default defineConfig({
  branch,
  clientId: "4d1d0411-eda4-410b-8e6d-bdfa687091c2", // Get this from tina.io
  token: "e230b827d701f7ac31ad3aa71a2f9cb854a042f8", // Get this from tina.io

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
        name: "publications",
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
            ],
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: () => `/publications`,
        },
      },
      {
        name: "download",
        label: "Downloads",
        path: "content/downloads",
        fields: [
          {
            type: "string",
            name: "name",
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
