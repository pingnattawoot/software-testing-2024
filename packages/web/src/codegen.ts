import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: ["src/schema/*.graphql"],
  generates: {
    "./src/gql/generates.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHook: true,
        skipTypename: true,
      },
    },
  },
  hooks: { afterAllFileWrite: ["npx prettier --write"] },
};

export default config;
