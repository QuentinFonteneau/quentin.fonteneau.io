<template>
  <section class="content__blockquote">
    <blockquote>
      <slot name="quote" />
      <span>
        <ContentSlot
          :use="$slots.author"
          unwrap="p" />
        <cite>
          <ContentSlot
            :use="$slots.role"
            unwrap="p" />
        </cite>
      </span>
    </blockquote>
  </section>
</template>
