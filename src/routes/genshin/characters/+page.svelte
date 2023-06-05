<script lang="ts">
    import { onMount } from "svelte";

    // Components
    import CharacterGridItem from "../../../components/genshin/characters/CharacterGridItem.svelte";

    // Data
    import { characters } from "../../../data/characters";

    //#region Filters

    let elementFilter: any = {
        electro: true,
        anemo: true,
        hydro: true,
        dendro: true,
        pyro: true,
        cryo: true,
        geo: true,
    }
    let weaponFilter: any = {
        catalyst: true,
        sword: true,
        polearm: true,
        bow: true,
        claymore: true,
    }
    let rarityFilter: any = {
        5: true,
        4: true,
    }
    let firstClickElement = true
    let firstClickWeapon = true
    let firstClicRarity = true

    function toggleElement(element: any) {
        if (firstClickElement) {
            firstClickElement = false
            elementFilter = {
                electro: false,
                anemo: false,
                hydro: false,
                dendro: false,
                pyro: false,
                cryo: false,
                geo: false,
            }
        }

        elementFilter[element] = !elementFilter[element]
    }

    function toggleWeapon(weapon: any) {
        if (firstClickWeapon) {
            firstClickWeapon = false
            weaponFilter = {
                catalyst: false,
                sword: false,
                polearm: false,
                bow: false,
                claymore: false,
            }
        }

        weaponFilter[weapon] = !weaponFilter[weapon]
    }

    function toggleRarity(rarity: any) {
        if (firstClicRarity) {
            firstClicRarity = false
            rarityFilter = {
                5: false,
                4: false,
            }
        }

        rarityFilter[rarity] = !rarityFilter[rarity]
    }

    $: chars = Object.entries(characters).filter((event) => elementFilter[event[1].element.id] && weaponFilter[event[1].weapon.id] && rarityFilter[event[1].rarity])
    //#endregion Filters

    let getLocalStorage: any
    onMount(() => {
        getLocalStorage = localStorage.getItem("char-column");
    })


</script>

<svelte:head>
    <title>Characters - Genshin Impact | ChouKpop</title>
</svelte:head>

<section class="mx-64 pt-8">
    <div class="flex items-center px-8 mx-8 mb-4">
        <h1 class="font-black text-5xl text-white">Characters</h1>
    </div>

    <main class="mx-8">
    <!-- Filters -->
        <div class="flex flex-col lg:flex-row flex-wrap px-8 mb-4">
            <div class="flex items-center justify-center md:justify-start md:mr-4">
                <button
                    on:click={() => toggleElement("electro")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {elementFilter.electro ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/elements/electro.png"
                        alt="electro"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleElement("anemo")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {elementFilter.anemo ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/elements/anemo.png"
                        alt="anemo"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleElement("dendro")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {elementFilter.dendro ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/elements/dendro.png"
                        alt="dendro"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleElement("hydro")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {elementFilter.hydro ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/elements/hydro.png"
                        alt="hydro"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleElement("pyro")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {elementFilter.pyro ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/elements/pyro.png"
                        alt="pyro"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleElement("cryo")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {elementFilter.cryo ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/elements/cryo.png"
                        alt="cryo"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleElement("geo")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {elementFilter.geo ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/elements/geo.png"
                        alt="geo"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
            </div>
            <div class="flex items-center justify-center md:justify-start md:mr-4">
                <button
                    on:click={() => toggleWeapon("catalyst")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {weaponFilter.catalyst ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/weapons/catalyst.png"
                        alt="catalyst"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleWeapon("sword")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {weaponFilter.sword ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/weapons/sword.png"
                        alt="sword"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleWeapon("polearm")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {weaponFilter.polearm ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/weapons/polearm.png"
                        alt="polearm"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleWeapon("bow")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {weaponFilter.bow ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/weapons/bow.png"
                        alt="bow"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleWeapon("claymore")}
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out {weaponFilter.claymore ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/weapons/claymore.png"
                        alt="claymore"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
            </div>
            <div class="flex items-center justify-center md:justify-start md:mr-4">
                <button
                    on:click={() => toggleRarity(5)}
                    style="line-height: 0.9;"
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out text-legendary-from {rarityFilter[5] ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/custom/rarity_5.png"
                        alt="claymore"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
                <button
                    on:click={() => toggleRarity(4)}
                    style="line-height: 0.9;"
                    class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none duration-300 ease-in-out text-rare-from {rarityFilter[4] ? '' : 'opacity-25'}"
                >
                    <img
                        src="/images/custom/rarity_4.png"
                        alt="claymore"
                        class="w-8 h-8"
                        style="min-width: 2rem;"
                    />
                </button>
            </div>
        </div>

        <!-- Characters -->
        <!-- <div class="px-4 flex flex-wrap mt-2">
            {#each chars as [id, char]}
                <CharacterGridItem {id} {char} />
            {/each}
        </div> -->
        <div class="px-4 grid gap-4 mt-2" style={`grid-template-columns: repeat(${getLocalStorage != 'default' ? getLocalStorage : "8"}, minmax(0, 1fr));`}>
            {#each chars as [id, char]}
                <CharacterGridItem {id} {char} />
            {/each}
        </div>
    </main>
</section>
