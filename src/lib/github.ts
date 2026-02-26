export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
  topics?: string[];
};

export async function getUserRepos(
  username: string,
  options?: { perPage?: number; sort?: "created" | "updated" | "pushed" | "full_name" }
): Promise<GitHubRepo[]> {
  const perPage = options?.perPage ?? 9;
  const sort = options?.sort ?? "updated";
  const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=${perPage}&sort=${sort}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!res.ok) {
    if (res.status === 404) return [];
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data = (await res.json()) as GitHubRepo[];
  return data.filter((repo) => !repo.fork);
}
