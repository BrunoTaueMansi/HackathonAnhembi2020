<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <quem-somos></quem-somos>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import QuemSomos from '@/components/QuemSomos';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        QuemSomos
    }
};
</script>
