<script lang="ts">
    export let image: any;
    export let label: any;
    export let items: any;

    let subMenuOpen = false;
    function handleSubMenuOpen() {
        subMenuOpen = !subMenuOpen;
    }
</script>

<div class="w-full rounded-xl ease-in duration-150">
    <div
        class="group w-full py-3 flex items-center px-4 cursor-pointer transition-colors"
        on:click={handleSubMenuOpen}
    >
        <div class="h-8 w-8 flex justify-center mr-3 opacity-75 group-hover:opacity-100 ease-in duration-150">
            <img class="h-full" src={image} alt={label} />
        </div>
        <span class="font-semibold flex-1 text-lg leading-none text-gray-500 group-hover:text-white ease-in duration-150">
            {label}
        </span>
    </div>
</div>

{#if subMenuOpen}
    <div class="py-2 flex flex-col w-full">
        {#each items as item}
            <a
                class="w-full rounded-xl ease-in duration-150"
                href={item.href}
            >
                <div class="w-full py-3 flex items-center px-4 cursor-pointer transition-colors text-gray-500 hover:text-white ease-in duration-150">
                    <div class="h-8 w-8 mr-3 flex justify-center items-center leading-none">
                        <span>●</span>
                    </div>
                    <span class="font-semibold flex-1 text-lg leading-none">
                        {item.label}
                    </span>
                </div>
            </a>
        {/each}
    </div>
{/if}
