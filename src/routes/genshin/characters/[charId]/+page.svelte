<script lang="ts">
    import { characters } from "../../../../data/characters";
    import artifactData from "../../../../data/artifacts/en.json";
    import weaponData from "../../../../data/weapons/en.json";
    import { builds } from "../../../../data/build";

    export let data: any;
    // console.log(data);

    let idChar = data.character.id
    let filterChar = Object.values(characters).filter(char => char.id === idChar)
    console.log(filterChar)
    
</script>

<section class="ml-64 pt-8">
    <div class="flex items-center px-8 mb-4">
        <h1 class="font-black text-5xl text-white">{data.character.id}</h1>
    </div>



</section>
