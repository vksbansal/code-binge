import axios from 'axios'

export const fetchIdeas = () => {
    return axios.get("https://code-binge.s3.ap-south-1.amazonaws.com/tricide-dump/ideas.json")
}