<script setup>
  const cla =  useCalculation()
  const handState = useState('handState')
</script>
<template>
  <div>
    <div class="bg-black-300">
      {{ cla }}
    </div>
    <div class="bg-black-500">
      <ul>
        <li class="bg-slate-300">
          <div>HandTiles::{{ handState.handTiles.length }}</div>
          <div>{{ handState.handTiles.sort() }}</div>
          
        </li>
        <li class="bg-slate-300 my-3">
          <div>RemainingTiles::{{ handState.remainingTiles.length }} </div>
          <div>{{ handState.remainingTiles.sort() }}</div>
          
        </li>
        <li class="bg-slate-300">
          IsMenzen::{{ handState.isMenzen }}
        </li>
      </ul>
    </div>
  </div>
</template>
