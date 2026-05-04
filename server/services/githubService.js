import axios from "axios";

export const getRepoData = async(repoUrl)=>{

const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);

if(!match){
 throw new Error("Invalid github url");
}

const owner=match[1];
const repo=match[2];

const {data}=await axios.get(
`https://api.github.com/repos/${owner}/${repo}`
);

return {
 name:data.name,
 description:data.description,
 language:data.language,
 stars:data.stargazers_count,
 forks:data.forks_count
};

}