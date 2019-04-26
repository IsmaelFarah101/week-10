<template>
    <div class="state-summary p-2 rounded">
        <span class="m-2">{{state.name}}</span>
        <p>
            <input id="visited" class="m-2" type="checkbox"
            v-model="stateVisited" v-on:change="$emit('isVisited', stateName, stateVisited)">
        </p>
        <p>
            <router-link v-bind:to="{name: 'detail', params: {state:stateName}}">
                    <img class="map-icon" src="../assets/map_icon.png">
            </router-link>
        </p>

    </div>
</template>
<script>
export default {
    //this state data is passed from the parrent and is displayed
    //if the checkbox is clicked or unclicked the change is emited to the parent component
    name: 'State',
    props: {
        state: Object
    },
    data(){
        return{
            stateName: this.state.name,
            stateVisited: this.state.visited,
        }
    }
    
}
</script>
<style scoped>
    .state-summary{
        height: 8cm;
        width: 10cm;
        border: 1px #EEE solid;
        background-color: whitesmoke;
    }
    .map-icon{
        width: 2cm;
        height: 2cm;
    }


</style>
