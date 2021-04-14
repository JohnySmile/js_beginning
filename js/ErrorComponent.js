Vue.component('error-comp', {
    props: ['error'],
    template: `
            <div v-if='$root.error'>Error</div>
    `
});