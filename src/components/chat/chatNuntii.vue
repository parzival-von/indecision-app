
<template>

  <div class="p-4 flex-1 overflow-y-auto"> <!-- div que contiene los mensajes -->
    <div class="flex flex-col space-y-2">

      <ChatBullula :meus-est="true" nuntius="¿salimos luego a dar una vuelta?" />
      <ChatBullula 
      :meus-est="false"
      nuntius="no"
      imago="https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatBullula from './chatBullula.vue'
</script>
