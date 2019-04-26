<template>
    <div id="state-list">
        <Summary v-bind:total="totalVisited"
                v-bind:visitedAll ="visitedAll">

        </Summary>

        <div class="d-flex flex-wrap justify-content-around">
        <div class="p-2" v-for="state in states" v-bind:key="state.name">
        <State v-bind:state="state" v-on:isVisited="updateVisited">
                
        </State>
        </div>
        </div>
    </div>
</template>
<script>
//importing different components and passing data through them at the top
import State from '../components/State'
import Summary from '../components/Summary'
export default {
    name:'StateList',
    components: {
        State, Summary
    },
    data(){
        return{
            states: [],
        }
    },
    mounted(){
        this.getAll()
    },
    methods: {
        //these methods are making api requests on to get all the data and the other to update it
        getAll(){
            this.$stateService.getAll().then(data => {
                this.states = data
            })
        },
        updateVisited(stateName, stateVisited){
            this.$stateService.setVisited(stateName, stateVisited)
                .then(data => {
                    this.getAll()
                })
        }
    },
    //this values are computed and change depeding on the data in the array they return the total and a boolean if all states are picked
    computed: {
        totalVisited(){
            let visited = this.states.filter(function(state){
                return state.visited
            })
            return visited.length
        },
        visitedAll(){
            let visited = this.states.filter(function(state){
                return state.visited
            })
            return visited.length == this.states.length
        }
    }
}
</script>
<style scoped>

</style>
