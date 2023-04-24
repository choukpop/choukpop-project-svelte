<script lang="ts">
    //! Data Import
    import { characters } from "../../../../data/characters";
    import artifactData from "../../../../data/artifacts/en.json";
    import weaponData from "../../../../data/weapons/en.json";
    import { builds } from "../../../../data/build";
    import { itemList } from "../../../../data/itemList";
    import { regions } from "../../../../data/regions";

    export let data: any;

    let character = Object.values(characters).filter(char => char.id === data.character.id)[0]
    
</script>

<svelte:head>
  <title>{character.name} - Genshin Impact | ChouKpop</title>
</svelte:head>

<section class="ml-64">
    <main class="mx-8 pt-4">
        <div class="py-4 w-full">
            <div class="m-auto w-[800px] h-[880px] bg-center bg-no-repeat" style={`background-image: url('/images/characters/full/${character.id}.png');`}></div>
        </div>

        <div class="flex">
            <div class="w-32 h-32 border border-white rounded-full flex justify-center items-center">
                <img
                    class="w-[90%] h-[90%]"
                    src={`/images/elements/${character.element.id}.png`}
                    alt={character.element.name}
                />
            </div>
        </div>
    </main>

</section>
