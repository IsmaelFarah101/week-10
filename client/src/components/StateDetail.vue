<template>
    <div>
        <h2>The State of {{state.name}}</h2>
        <p v-if="state.visited">You have visited this state</p>
        <p v-else>You have not visited this state</p>
        <div id="map-container">
            <l-map ref="stateMap" style="height:100%; width:100%"
                    v-bind:zoom="zoom" v-bind:center="center">
                    <l-tile-layer :url="url"></l-tile-layer>

            </l-map>

        </div>
    
    
    </div>    

</template>
<script>
//importing the maps libraries
import {LMap ,LTileLayer} from 'vue2-leaflet'

export default {
    name: 'StateDetail',
    components: {
        LMap,LTileLayer
    },
    data(){
        return {
            //specifying the data needed to display it
            state: {
                name: ''
            },
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 2,
            center: [44,-103],
            bounds:null
        
        }
    },
    //this loads the api requests in methods and applys vlaues in the statemap
    mounted(){
        this.state.name = this.$route.params.state
        this.$refs.stateMap.mapObject.dragging.disable()
        this.fetchStateData()
    },
    methods: {
        //this fetches the specified state data and implements it
        fetchStateData(){
            this.$stateService.getOne(this.state.name).then(data => {
                this.state = data
                this.zoom = data.zoom
                this.center = [data.lat, data.lon]
                this.$refs.stateMap.mapObject.flyTo(this.center, this.zoom)
}).catch(err => console.err(err))
        }
    }
}
</script>
<style scoped>
#map-container{
    height: 30em;
}

</style>
