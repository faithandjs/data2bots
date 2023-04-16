import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "cooperate-website",

  projectId: "t5hswqc3",
  dataset: "test_environ",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
