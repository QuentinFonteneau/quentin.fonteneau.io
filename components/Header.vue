<template>
    <header>
        <NuxtLink to="/">
            <Logo />
        </NuxtLink>
        <div>
            <NavBar />
        </div>
        <Button url="/contact" isExternal="false" label="Me contacter" />
    </header>
</template>
  
<style scoped>
header {
    display: flex;
    padding: 24px 80px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    border-bottom: 2px solid var(--Stroke, #DCE3EF);
    background: var(--Primaire-White, #FFFEFD);
}
</style>