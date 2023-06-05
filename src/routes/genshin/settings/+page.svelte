<script lang="ts">
    import { onMount } from "svelte";

    let charColums = [
        { value: 6, name: "6" },
        { value: 7, name: "7" },
        { value: 8, name: "8" },
        { value: 9, name: "9" },
        { value: 10, name: "10" },
        { value: 11, name: "11" },
        { value: 12, name: "12" },
    ];

    let selected: any = 8;
    onMount(() => {
        let store = localStorage.getItem("char-column");
        if (!store) localStorage.setItem("char-column", selected);
    });
</script>

<svelte:head>
    <title>Settings - Genshin Impact | ChouKpop</title>
</svelte:head>

<section class="mx-64 pt-8">
    <div class="flex items-center px-8 mx-8 mb-4">
        <h1 class="font-black text-5xl text-white">Settings</h1>
    </div>

    <main class="mx-8">
        <main class="mx-8">
            <select
                name="Select Grid"
                bind:value={selected}
                on:change={() => localStorage.setItem("char-column", selected)}
            >
                <option value="default">Select Column</option>
                {#each charColums as col}
                    <option value={col.value}>
                        {col.name}
                    </option>
                {/each}
            </select>
        </main>
    </main>
</section>
