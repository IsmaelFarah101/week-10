<template>
    <div class="summary">
        <h3>You have visited {{total}} {{statesPlural}}</h3>
        <p id="visited-all" v-if="visitedAll">
                You have visited all 50 states and DC
        </p>

    </div>    
</template>
<script>
export default {
    name: 'Summary',
    props:{
        total:Number,
        visitedAll:Boolean
    },
    computed: {
        statesPlural(){
            return this.total === 1 ? 'state': 'states'
        }
    }
}
</script>
<style>
    #visited-all{
        color: #be8234;
        font-weight: 600;
    }
</style>
