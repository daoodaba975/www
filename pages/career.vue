<template>
  <div>

    <div class="overflow-x-hidden">
      <div class="projects container-inner mx-auto text-xl py-16 mb-16 relative">
        
        <h2 class="font-bold mb-6 underline">{{ $t('jobs') }} : </h2>
        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>
        <ul class="text-lg sm:text-xl space-y-6">            
          <li class="code">
            <div>{{ $t('work4') }}</div>
            <div class="text-lg text-gray-600">@ <a class="underline" href="https://www.norma.dev/" target="_blank">Norma</a> {{ $t('work4d') }}</div>
          </li>
          <li class="code">
            <div>{{ $t('work3') }}</div>
            <div class="text-lg text-gray-600">@ <a class="underline" href="https://turingconsulting.fr/" target="_blank">Turing Consulting France</a> {{ $t('work3d') }}</div>
          </li>
          <li class="code">
            <div>{{ $t('work2') }}</div>
            <div class="text-lg text-gray-600">@ <span class="underline" href="#">Baobab TS</span> {{ $t('work2d') }}</div>
          </li>
          <li class="code">
            <div>{{ $t('work1') }}</div>
            <div class="text-lg text-gray-600">Freelance – Dakar, Senegal</div>
          </li>
        </ul>

        <h2 class="font-bold mb-6 mt-12 underline">{{ $t('training') }} : </h2>
        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>
        <ul class="text-lg sm:text-xl space-y-6">            
          <li class="graduation">
            <div>{{ $t('road2') }}</div>
            <div class="text-lg text-gray-600">{{ $t('road2d') }} @ <a class="underline" href="https://orangedigitalcenter.sn/sonatel-academy/" target="_blank">Sonatel Academy (ODC)</a> (2019 – 2020) Dakar, Senegal</div>
          </li>
          <li class="graduation">
            <div>{{ $t('road1') }}</div>
            <div class="text-lg text-gray-600">{{ $t('road1d') }} @ <a class="underline" href="https://www.groupeisi.com/" target="_blank">Institut Supérieur de l'Informatique (ISI)</a> (2016 – 2019) Dakar, Senegal</div>
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style>
</style>