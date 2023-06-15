<script lang="ts">
    import { onMount } from "svelte";
    import { storeSettingCharacterColumn } from "../stores"

    // let settingCharColumn: any = 6; console.log(val.currentTarget.value)
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
            <input
                type="number"
                min="6"
                max="12"
                bind:value={$storeSettingCharacterColumn}
            />
        </main>
    </main>
</section>
