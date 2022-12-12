# Atomic Design Pattern
- for component strucuture

# Factory Method Pattern
- for creating API cals method

# Required
1. node 16.15.0 or higher
2. pnpm installed globally
3. docker installed and setup locally on your machine

# Steps to run application:
1. npm install -g pnpm
2. pnpm run install:frozen-lockfile
3. pnpm start

# Steps to run docker test and build:
1. npm install -g pnpm
2. pnpm run install:frozen-lockfile
3. pnpm run docker:build

# Optional
1. Please add plugin EditorConfig for VS Code
2. Please add plugin to eslint

# Credentials
- If you want to run the app and see the results from graphql, then you need to add your personal access token value
path to file: repository-list/src/api/HTTP.ts
