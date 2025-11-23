const GITHUB = {
  BASE_URL: import.meta.env.VITE_GITHUB_BASE_URL,
  TOKEN: import.meta.env.VITE_GITHUB_TOKEN,
  REPOSITORY: {
    NAME: import.meta.env.VITE_GITHUB_REPOSITORY_NAME,
    OWNER: import.meta.env.VITE_GITHUB_REPOSITORY_OWNER,
  },
};

export const CONFIG = {
  GITHUB,
};
