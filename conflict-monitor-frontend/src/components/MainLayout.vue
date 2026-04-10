<template>
  <div class="container">
    <header class="navbar">
      <slot name="header">
        <h1>Conflict Monitor</h1>
      </slot>
    </header>

    <main class="content">
      <slot></slot>
    </main>

    <footer class="footer">
    </footer>
  </div>
</template>

<style scoped>
.container { max-width: 1100px; margin: 0 auto; padding: 20px; font-family: 'Inter', sans-serif; }
.navbar { border-bottom: 3px solid #42b883; margin-bottom: 30px; padding-bottom: 10px; }
.footer { margin-top: 50px; text-align: center; color: #888; border-top: 1px solid #eee; padding-top: 20px; }
</style>