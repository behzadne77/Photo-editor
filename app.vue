<template>
  <div :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'" :lang="$i18n.locale" data-theme="light">
    <div class="navbar bg-primary text-primary-content">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NuxtLink to="/">{{ $t('home') }}</NuxtLink></li>
            <li><NuxtLink to="/about">{{ $t('about') }}</NuxtLink></li>
            <li><NuxtLink to="/contact">{{ $t('contact') }}</NuxtLink></li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">{{ $t('welcome') }}</a>
      </div>
      
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><NuxtLink to="/" class="hover:text-primary-content/80">{{ $t('home') }}</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-primary-content/80">{{ $t('about') }}</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-primary-content/80">{{ $t('contact') }}</NuxtLink></li>
        </ul>
      </div>
      
      <div class="navbar-end">
        <div class="flex items-center gap-2">
          <!-- Language Selector -->
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
              {{ $t('language') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
              <li><a @click="changeLanguage('fa')" class="cursor-pointer">{{ $t('persian') }}</a></li>
              <li><a @click="changeLanguage('en')" class="cursor-pointer">{{ $t('english') }}</a></li>
            </ul>
          </div>
          
          <!-- Theme Toggle -->
          <button class="btn btn-ghost btn-sm" @click="toggleTheme">
            <svg v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <main class="container mx-auto p-8">
      <div class="hero min-h-[60vh] bg-base-200 rounded-lg">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">{{ $t('welcome') }}</h1>
            <p class="py-6">{{ $t('description') }}</p>
            <div class="flex gap-4 justify-center">
              <button class="btn btn-primary">{{ $t('getStarted') }}</button>
              <button class="btn btn-outline">{{ $t('learnMore') }}</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Features Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">🌍 {{ $t('language') }}</h2>
            <p>{{ $t('description') }}</p>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">🎨 {{ $t('theme') }}</h2>
            <p>{{ $t('description') }}</p>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">⚡ Nuxt 3</h2>
            <p>{{ $t('description') }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const isDark = ref(false)

const changeLanguage = (lang) => {
  locale.value = lang
  // تغییر زبان و به‌روزرسانی URL
  navigateTo({ path: '/' + (lang === 'fa' ? '' : lang) })
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.setAttribute('data-theme', 'dark')
  } else {
    html.setAttribute('data-theme', 'light')
  }
}

// تنظیم تم اولیه
onMounted(() => {
  const html = document.documentElement
  const savedTheme = localStorage.getItem('theme') || 'light'
  isDark.value = savedTheme === 'dark'
  html.setAttribute('data-theme', savedTheme)
})

// ذخیره تم در localStorage
watch(isDark, (newValue) => {
  const theme = newValue ? 'dark' : 'light'
  localStorage.setItem('theme', theme)
})
</script>

<style>
/* استایل‌های پایه برای RTL */
[dir="rtl"] {
  text-align: right;
}

[dir="ltr"] {
  text-align: left;
}

/* فونت فارسی */
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap');

.font-fa {
  font-family: 'Vazirmatn', Tahoma, Arial, sans-serif;
}
</style>
