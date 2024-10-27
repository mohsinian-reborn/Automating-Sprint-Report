import { Octokit, App } from "octokit";
import 'dotenv/config';
const octokit = new Octokit({
    auth: process.env.APP_TOKEN
}
)
const response = await octokit.request('GET /repos/aht-wtag/social-media/pulls', {
    owner: 'aht-wtag',
    repo: 'social-media',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      accept: 'application/vnd.github+json'
    }
});

// console.log(response);
const owner = 'aht-wtag';
const repo = 'social-media';
const username = 'aht-wtag'
const query = `repo:${owner}/${repo} author:${username} type:pr is:merged`
const searchResponse = await octokit.request('GET /search/issues', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  },
  q: query

})

for(const item of searchResponse.data.items) {
  console.log(item.user);
}