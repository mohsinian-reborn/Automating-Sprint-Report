import { Octokit} from "octokit";
import 'dotenv/config';
const octokit = new Octokit({
    auth: process.env.APP_TOKEN
}
)

export const getAll = async (req, res) => {
    try {
        const response = await octokit.request('GET /repos/aht-wtag/social-media/pulls', {
            owner: 'aht-wtag',
            repo: 'social-media',
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
              accept: 'application/vnd.github+json'
            }
        });
        res.status(200).json(response);
    } catch (err) {
        return res.status(400).json({ error: `${err}` });
    }
};

export const getOpen = async (req, res) => {
    try {
        const owner = 'aht-wtag';
        const repo = 'social-media';
        const username = 'aht-wtag'
        const query = `repo:${owner}/${repo} author:${username} type:pr is:merged`
        const searchResponse = await octokit.request('GET /search/issues', {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          },
          q: query

        });
        res.status(200).json(searchResponse);
    }
    catch (err) {
        return res.status(400).json(`Error: ${err}`);
    }
}
