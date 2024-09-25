<template>
    <div>
      <h3 v-if="$slots.title"><ContentSlot :use="$slots.title" /></h3>
      <p v-if="$slots.text">
        <ContentSlot :use="$slots.text" unwrap="p"/>
      </p>
    </div>
  </template>