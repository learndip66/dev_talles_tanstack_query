import axios from 'axios';
import { GitHubIssue, GitHubLabel } from '../interfaces/github.intaface';
import { CONFIG } from '../../constants/config.constant';

const githubClient = axios.create({
  baseURL: CONFIG.GITHUB.BASE_URL,
  headers: {
    Authorization: `Bearer ${CONFIG.GITHUB.TOKEN}`,
  },
});

const ENDPOINTS = {
  REPOS: {
    LABELS: `/repos/${CONFIG.GITHUB.REPOSITORY.OWNER}/${CONFIG.GITHUB.REPOSITORY.NAME}/labels`,
    ISSUES: `/repos/${CONFIG.GITHUB.REPOSITORY.OWNER}/${CONFIG.GITHUB.REPOSITORY.NAME}/issues`,
  },
};

export async function getLabelsFromRepo(): Promise<GitHubLabel[]> {
  const { data } = await githubClient.get(ENDPOINTS.REPOS.LABELS);
  return data;
}

export async function getIssuesFromRepo(): Promise<GitHubIssue[]> {
  const { data } = await githubClient.get(ENDPOINTS.REPOS.ISSUES);
  return data;
}

export async function getIssuesFromRepoByNumber(issueNumber: number): Promise<GitHubIssue[]> {
  const { data } = await githubClient.get(`${ENDPOINTS.REPOS.ISSUES}/${issueNumber}`);
  return data;
}
