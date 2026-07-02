export function getBasePath() {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const githubPagesBasePath =
    process.env.GITHUB_ACTIONS === "true" &&
    repositoryName &&
    !repositoryName.endsWith(".github.io")
      ? `/${repositoryName}`
      : "";

  return process.env.NEXT_PUBLIC_BASE_PATH ?? githubPagesBasePath;
}

