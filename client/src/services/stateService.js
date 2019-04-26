//import axios to communcate with the backed
import axios from 'axios'

export default{
    //this API request gets all the states
    getAll(){
        return axios.get('/api/states/').then(response => {
            return response.data
        })
    },
    //this API changes the visited boolean in a specific row
    setVisited(stateName, visited){
        return axios.patch('/api/state/' + stateName,{visited: visited})
                .then(response => {
                    return response.data
                })

    },
    //this get one specified state
    getOne(stateName){
        return axios.get('/api/states/'+ stateName).then(response => {
            return response.data
        })
    }
}