import { computed, ref } from "vue";

export const usenumerator = (props: { valorem: number }) => {
    
    const numerus = ref(props.valorem);
    const quadrataNumerus = computed(() => numerus.value * numerus.value);

    return {
        numerus,
        quadrataNumerus
    }
}