<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white justify-between items-center">
      <span>Mi esposa</span>
    </div>
    <ChatNuntii />
    <TextusArca />
  </div>
</template>

<script lang="ts" setup>
import ChatNuntii from '@/components/chat/chatNuntii.vue'
import TextusArca from '@/components/chat/textusArca.vue'
</script>
