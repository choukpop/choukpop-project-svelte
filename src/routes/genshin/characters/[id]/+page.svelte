<script lang="ts">
    import { onMount } from "svelte";

    //! Data Import
    import { characters } from "../../../../data/characters";
    import artifactData from "../../../../data/artifacts/en.json";
    import weaponData from "../../../../data/weapons/en.json";
    import { builds } from "../../../../data/build";
    import { itemList } from "../../../../data/itemList";
    import { regions } from "../../../../data/regions";

    export let data: any;

    let character = Object.values(characters).filter(char => char.id === data.character.id)[0]

    onMount(() => {
		getElementChar(character.element.id)
	})

    let nameClass: any
    function getElementChar(element: any) {
        switch (element) {
            case 'electro':
            nameClass = 'electro'
                break;
            case 'anemo':
            nameClass = 'anemo'
                break;
            case 'dendro':
            nameClass = 'dendro'
                break;
            case 'pyro':
            nameClass = 'pyro'
                break;
            case 'hydro':
            nameClass = 'hydro'
                break;
            case 'cryo':
            nameClass = 'cryo'
                break;
            case 'geo':
            nameClass = 'geo'
                break;
            default:
            nameClass = ''
                break;
        }
    }
</script>

<svelte:head>
  <title>{character.name} - Genshin Impact | ChouKpop</title>
</svelte:head>

<section class="ml-64">
    <main class="relative bg-center bg-cover bg-no-repeat h-screen" style={`background-image: url('/images/builds/${character.element.id}.png');`}>
        <div class="w-full h-full">
            <div
                class="absolute top-[25px] left-0 right-0 mx-auto w-[700px] h-[850px] bg-center bg-no-repeat"
                style={`background-image: url('/images/characters/full/${character.id}.png');`}
            />
        </div>

        <div class="absolute flex justify-center items-center top-[60%] left-0 right-0 mx-auto gap-10">
            <div class={`w-32 h-32 border border-white rounded-full flex justify-center items-center ${nameClass}`}>
                <img
                    class="w-[75%] h-[75%]"
                    src={`/images/skills/${character.id}/talent_3.png`}
                    alt={character.element.name}
                />
            </div>

            <div class={`w-32 h-32 border border-white rounded-full flex justify-center items-center ${nameClass}`}>
                <img
                    class="w-[75%] h-[75%]"
                    src={`/images/skills/${character.id}/talent_3.png`}
                    alt={character.element.name}
                />
            </div>

            <div class={`w-32 h-32 border border-white rounded-full flex justify-center items-center ${nameClass}`}>
                <img
                    class="w-[75%] h-[75%]"
                    src={`/images/skills/${character.id}/talent_3.png`}
                    alt={character.element.name}
                />
            </div>

            <div class={`w-32 h-32 border border-white rounded-full flex justify-center items-center ${nameClass}`}>
                <img
                    class="w-[75%] h-[75%]"
                    src={`/images/skills/${character.id}/talent_3.png`}
                    alt={character.element.name}
                />
            </div>
        </div>

        <div class="border border-white">
            <p>aegb aiowegbaiwugbawiguabgw niu auinw</p>
            <p>aegb aiowegbaiwugbawiguabgw niu auinw</p>
            <p>aegb aiowegbaiwugbawiguabgw niu auinw</p>
            <p>aegb aiowegbaiwugbawiguabgw niu auinw</p>
            <p>aegb aiowegbaiwugbawiguabgw niu auinw</p>
        </div>
    </main>

</section>

<style lang="postcss">
    .electro {
        --alpha: 1;
        --primary: 95, 52, 127;
        --secondary: 186, 83, 237;
        background: rgb(var(--primary));
        background: linear-gradient(0deg, rgba(var(--primary), var(--alpha)) 15%, rgba(var(--secondary), var(--alpha)) 60%, rgba(0, 0, 0, 0) 90%);
    }
    .dendro {
        --alpha: 1;
        --primary: 72, 119, 42;
        --secondary: 174, 224, 49;
        background: rgb(var(--primary));
        background: linear-gradient(0deg, rgba(var(--primary), var(--alpha)) 15%, rgba(var(--secondary), var(--alpha)) 60%, rgba(0, 0, 0, 0) 90%);
    }
    .hydro {
        --alpha: 1;
        --primary: 16, 53, 122;
        --secondary: 104, 200, 236;
        background: rgb(var(--primary));
        background: linear-gradient(0deg, rgba(var(--primary), var(--alpha)) 15%, rgba(var(--secondary), var(--alpha)) 60%, rgba(0, 0, 0, 0) 90%);
    }
    .anemo {
        --alpha: 1;
        --primary: 36, 128, 122;
        --secondary: 68, 196, 180;
        background: rgb(var(--primary));
        background: linear-gradient(0deg, rgba(var(--primary), var(--alpha)) 15%, rgba(var(--secondary), var(--alpha)) 60%, rgba(0, 0, 0, 0) 90%);
    }
    .pyro {
        --alpha: 1;
        --primary: 136, 48, 36;
        --secondary: 162, 82, 96;
        background: rgb(var(--primary));
        background: linear-gradient(0deg, rgba(var(--primary), var(--alpha)) 15%, rgba(var(--secondary), var(--alpha)) 60%, rgba(0, 0, 0, 0) 90%);
    }
    .geo {
        --alpha: 1;
        --primary: 137, 116, 36;
        --secondary: 241, 223, 35;
        background: rgb(var(--primary));
        background: linear-gradient(0deg, rgba(var(--primary), var(--alpha)) 15%, rgba(var(--secondary), var(--alpha)) 60%, rgba(0, 0, 0, 0) 90%);
    }
    .cryo {
        --alpha: 1;
        --primary: 45, 131, 164;
        --secondary: 124, 220, 243;
        background: rgb(var(--primary));
        background: linear-gradient(0deg, rgba(var(--primary), var(--alpha)) 15%, rgba(var(--secondary), var(--alpha)) 60%, rgba(0, 0, 0, 0) 90%);
    }
</style>