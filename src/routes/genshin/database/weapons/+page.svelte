<script lang="ts">
    import weaponData from "../../../../data/weapons/en.json";

    let weaponFilter: any = {
        catalyst: true,
        sword: true,
        polearm: true,
        bow: true,
        claymore: true,
    }
    let firstClickWeapon = true;
    function toggleWeapon(weapon: any) {
        if (firstClickWeapon) {
            firstClickWeapon = false;
            weaponFilter = {
                catalyst: false,
                sword: false,
                polearm: false,
                bow: false,
                claymore: false,
            };
        }

        weaponFilter[weapon] = !weaponFilter[weapon];
    }
</script>

<svelte:head>
    <title>Weapons - Genshin Impact | ChouKpop</title>
</svelte:head>

<section class="mx-64 pt-8">
    <div class="flex items-center px-8 mx-8 mb-4">
        <h1 class="font-black text-5xl text-white">Weapons</h1>
    </div>

    <main class="mx-8">
        <!-- Filters -->
            <div class="flex flex-col lg:flex-row flex-wrap px-8 mb-4">
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
            </div>

            <!-- Weapons -->
            <div class="px-4 flex flex-wrap mt-2">
                







            </div>
        </main>
</section>
