<template>
    <div>
        <SwitchDe :value="y" @input="y = $event"/>
    </div>
</template>
<script lang="ts">
import { ref } from "vue";
import SwitchDe from "../lib/SwitchDe.vue";
export default{
    components: { SwitchDe },
    setup() {
        const y = ref(false);
        return { y }
    }
}
</script>