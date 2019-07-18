import axios from 'axios'

export const fetchIdeas = () => {
    return axios.get(window.location.href + '/data.json')
}