<script>
    import SidebarItem from "./SidebarItem.svelte";
    import SidebarMoreItem from "./SidebarMoreItem.svelte";
</script>

<nav class="sidebar fixed w-64 h-full flex-col bg-primary items-center z-50">
    <div class="flex flex-col flex-1 items-center overflow-y-auto w-full px-5 py-5 z-10">
        <a href="/" class="relative py-2">
            <h1 class="font-display text-3xl font-black text-white py-4 relative z-10">
                Genshin
            </h1>
        </a>

        <SidebarItem
            image="/images/home.png"
            label="Home"
            link="/genshin"
        />

        <SidebarItem
            image="/images/characters.png"
            label="Characters"
            link="/genshin/characters"
        />

        <SidebarMoreItem
            image="/images/items.png"
            label="Database"
            items={[
                { label: "Items", href: "/genshin/database/items",},
                { label: "Weapons", href: "/genshin/database/weapons",},
                { label: "Artifacts", href: "/genshin/database/artifacts",},
            ]}
        />

        <SidebarItem
            image="/images/settings.png"
            label="Settings"
            link="/genshin/settings"
        />
    </div>
</nav>