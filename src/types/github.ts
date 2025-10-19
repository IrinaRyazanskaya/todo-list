import type { RestEndpointMethodTypes } from "@octokit/rest";

type GitHubRepo = RestEndpointMethodTypes["repos"]["listForUser"]["response"]["data"][number];
type GitHubUser = RestEndpointMethodTypes["users"]["getByUsername"]["response"]["data"];

export type { GitHubRepo, GitHubUser };
