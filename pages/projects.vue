<template>
  <div>
    <div class="overflow-x-hidden">
      <div class="projects container-inner mx-auto text-xl py-16 mb-16 relative">

        <h2 class="font-bold mb-6 underline">{{ $t('opensource') }} : </h2>
        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>
        <ul class="text-lg sm:text-xl space-y-6">
          <li class="github">
            <div>🌟 Made In Senegal</div>
            <div class="text-lg text-gray-600">{{ $t('os1') }}<br>
            <a href="https://www.madeinsenegal.dev" target="_blank">{{ $t('lm') }}</a> </div>
          </li>
          <li class="github">
            <div>🌟 Galsenify</div>
            <div class="text-lg text-gray-600">{{ $t('os2') }}<br>
            <a href="https://www.npmjs.com/package/galsenify" target="_blank">{{ $t('lm') }}</a> </div>
          </li>
          <li class="github">
            <div>🪐 Taarú</div>
            <div class="text-lg text-gray-600">{{ $t('os3') }}<br>
            <a href="https://marketplace.visualstudio.com/items?itemName=daoodaba975.taaru" target="_blank">{{ $t('lm') }}</a> </div>
          </li>
          <li class="github">
            <div>🚀 Exlogrn</div>
            <div class="text-lg text-gray-600">{{ $t('os4') }}<br>
            <a href="https://github.com/daoodaba975/exlogrn" target="_blank">{{ $t('lm') }}</a> </div>
          </li>
          <li class="github">
            <div>⚙️ Git Jafewoul</div>
            <div class="text-lg text-gray-600">{{ $t('os5') }}<br>
            <a href="https://github.com/daoodaba975/git.jafewoul" target="_blank">{{ $t('lm') }}</a> </div>
          </li>
          <li class="github">
            <div>🛠 Basics Frontend Components Collections</div>
            <div class="text-lg text-gray-600">{{ $t('os6') }}<br>
            <a href="https://github.com/daoodaba975/basics-frontend-components-collections" target="_blank">{{ $t('lm') }}</a> </div>
          </li>
          <li class="github">
            <div>🧩 Le Bilan</div>
            <div class="text-lg text-gray-600">{{ $t('os7') }}<br>
            <a href="https://github.com/daoodaba975/bilan" target="_blank">{{ $t('lm') }}</a> </div>
          </li>
          <li class="github">
            <div>🦠 Xex Corona</div>
            <div class="text-lg text-gray-600">{{ $t('os8') }}<br>
            <a href="https://github.com/DevOlutionLab/xex-corona-app" target="_blank">{{ $t('lm') }}</a> </div>
          </li>
          <li class="github">
            <div>💡 Djolof Tech Food</div>
            <div class="text-lg text-gray-600">{{ $t('os9') }}<br>
            <a href="https://github.com/Code-for-Senegal/Djolof-Tech-Food" target="_blank">{{ $t('lm') }}</a> </div>
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