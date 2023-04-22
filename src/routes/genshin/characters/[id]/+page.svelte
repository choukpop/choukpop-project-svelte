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
    console.log(character.material.boss)
    
</script>

<svelte:head>
  <title>{character.name} - Genshin Impact | ChouKpop</title>
</svelte:head>

<section class="ml-64 pt-8">
    <div class="flex flex-col max-w-screen-2xl w-full md:w-[calc(100%-1rem)]">
        <div class="m-auto">
            <img
                src={`/images/characters/full/${character.id}.png`}
                alt={character.name}
            />
        </div>
    </div>












    <!-- <div class="text-gray-200 rounded-xl border border-gray-200 border-opacity-25 p-4">
        <div class="flex items-center justify-center mt-2">
            <div class="relative mr-2 bg-third hover:bg-fourth rounded-xl p-1 duration-150 ease-in-out">
                <img
                    width="64"
                    height="64"
                    src={`/images/items/${character.material.boss.id}.png`}
                    alt={character.material.boss.name}
                    class="h-full max-w-full object-contain mx-auto"
                />
            
                <div
                    class="absolute top-0 right-0 bg-opacity-60 rounded-full flex items-center text-white bg-black"
                    style="margin: -10px;"
                >
                    <span class="px-2 py-1 text-xs font-semibold">13</span>
                </div>
            </div>
        </div>
    </div> -->


</section>
