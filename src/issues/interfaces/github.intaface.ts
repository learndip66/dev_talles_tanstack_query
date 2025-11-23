export type GitHubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
};

export type GitHubLabel = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string | null;
};

export type GitHubReactions = {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
};

export type SubIssuesSummary = {
  total: number;
  completed: number;
  percent_completed: number;
};

export enum GithubIssueState {
  OPEN = 'open',
  CLOSED = 'closed',
}

export type GitHubIssue = {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: GitHubUser;
  labels: GitHubLabel[];
  state: GithubIssueState;
  locked: boolean;
  assignee: GitHubUser | null;
  assignees: GitHubUser[];
  milestone: any | null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string | null;
  type: string | null;
  active_lock_reason: string | null;
  sub_issues_summary: SubIssuesSummary;
  body: string;
  closed_by: GitHubUser | null;
  reactions: GitHubReactions;
  timeline_url: string;
  performed_via_github_app: any | null;
  state_reason: string | null;
};

export type GitHubIssueResponse = {
  json: GitHubIssue;
};
