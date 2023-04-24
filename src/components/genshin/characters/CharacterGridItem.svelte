<script lang="ts">
    export let id: any;
    export let char: any;
</script>

<a
    href="/genshin/characters/{id}"
    class="m-[11px] cell relative cursor-pointer transition duration-100 hover:opacity-100 hover:shadow-xl hover:scale-110 rounded-xl"
>
    <div class="w-full rounded-t-xl bg-opacity-50 overflow-hidden {char.rarity === 5 ? 'bg-legendary-from' : 'bg-rare-from'}">
        <img
            class="w-full h-full"
            width="106"
            height="106"
            src={`/images/characters/${id}.png`}
            alt={char.name}
        />
    </div>

    <div
        class="absolute top-0 right-0 bg-black bg-opacity-75 rounded-full flex items-center shadow-md text-white"
        style="padding: 4px; margin: -10px;"
    >
        <img
            class="w-4 h-4"
            src={`/images/elements/${char.element.id}.png`}
            alt={char.element.name}
        />
    </div>

    <div
        class="relative overflow-hidden rounded-b-xl bg-secondary"
        style="height: 29px;"
    >
        <div class="w-full overflow-hidden absolute bottom-0">
            <p class="text-white p-1 text-center text-sm">
                {char.name}
            </p>
        </div>
    </div>
</a>
