import axios from 'axios'

export const fetchIdeas = () => {
    return axios.get('/data.json')
}