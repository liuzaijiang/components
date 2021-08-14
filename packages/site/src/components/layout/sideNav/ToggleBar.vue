<template>
    <div :class="classes" @click="onClick">
        <div class="side-nav-toggle-bar-top" />
        <div class="side-nav-toggle-bar-bottom" />
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, inject } from 'vue'
import { appContextToken } from '../../../context'
import { callEmit } from '@idux/cdk/utils'

export default defineComponent({
  setup() {
    const { onTriggerSideNav } = inject(appContextToken)!
    const collapsed = ref(false)
    const onClick =()=>{
        collapsed.value = !collapsed.value
        callEmit(onTriggerSideNav, collapsed.value)
    }

    const classes = computed(()=>{
        return {
            'side-nav-toggle-bar': true,
            'collapsed': collapsed.value,
        }
    })

    return { onClick, classes}
  },
})
</script>
